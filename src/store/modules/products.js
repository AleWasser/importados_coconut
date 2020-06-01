import {
    db
} from '../../db';

import {
    saveFile,
    deleteFile
} from '../../helpers/storage';

const state = {
    products: [],
    loading: false,
}
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return (id) => {
            return state.products.find(item => item.id == id);
        }
    },
    getProductsByCategory(state) {
        return (category) => {
            return state.products.filter(item => item.category.id == category);
        }
    },
    getLoading(state) {
        return state.loading;
    }
}

const mutations = {
    //* Set fetched products to state
    fetch(state, payload) {
        state.products = payload;
    },
    //* Set new product on state
    create(state, payload) {
        state.products.push(payload);
    },
    //* Set updated product on state
    update(state, payload) {
        const category = state.products.find(item => item.id == payload.id);
        for (let key in payload) {
            if (key in category) {
                category[key] = payload[key];
            }
        }
    },
    //* Unset deleted product from state
    delete(state, payload) {
        state.products = state.products.filter(item => item.id !== payload);
    },
    //* Set Loading State
    setLoading(state, payload) {
        return state.loading = payload;
    }
}
const actions = {
    //* Fetch Products from database
    fetch({
        commit
    }) {
        commit('setLoading', true);
        db.collection('products').orderBy('name').get()
            .then(snapshot => {
                let documents = [];
                snapshot.forEach(doc => {
                    let item = doc.data();
                    item.id = doc.id;
                    documents.push(item);
                });
                commit('fetch', documents);
                commit('setLoading', false);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Create Product
    create({
        commit
    }, payload) {
        let id;
        let imageUrl;
        let imagePath;
        let productData = {
            name: payload.name,
            description: payload.description,
            category: {
                id: payload.category.id,
                name: payload.category.name,
            },
            stock: payload.stock,
            price: payload.price,
            tonos: payload.tonos.length > 0 ? payload.tonos : null,
        };
        commit('setLoading', true);
        db.collection('products').add(productData)
            .then(res => {
                id = res.id;
                let ext = payload.image.name.slice(payload.image.name.lastIndexOf('.'));
                imagePath = `products/${id}/0${ext}`;
                return saveFile(imagePath, payload.image);
            })
            .then(url => {
                imageUrl = url;
                return db.collection('products').doc(id).update({
                    imageUrl: url,
                    imagePath: imagePath,
                })
            })
            .then(() => {
                commit('create', {
                    ...productData,
                    id: id,
                    imageUrl: imageUrl,
                    imagePath: imagePath,
                });
                commit('setLoading', false);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Update a product
    update({
        commit
    }, payload) {
        let imageUrl;
        let imagePath;
        let productData = {
            name: payload.name,
            description: payload.description,
            category: {
                id: payload.category.id,
                name: payload.category.name,
            },
            stock: payload.stock,
            price: payload.price,
            tonos: payload.tonos.length > 0 ? payload.tonos : null,
        };
        commit('setLoading', true);
        db.collection('products').doc(payload.id).update(productData)
            .then(() => {
                if (payload.image) {
                    let ext = payload.image.name.slice(payload.image.name.lastIndexOf('.'));
                    imagePath = `products/${payload.id}/0${ext}`;
                    return saveFile(imagePath, payload.image)
                        .then(url => {
                            imageUrl = url;
                            return db.collection('products').doc(payload.id).update({
                                imageUrl: url,
                                imagePath: imagePath,
                            })
                        })
                        .then(() => {
                            commit('update', {
                                ...productData,
                                id: payload.id,
                                imageUrl: imageUrl,
                                imagePath: imagePath,
                            });
                            commit('setLoading', false);
                        })
                } else {
                    commit('update', {
                        ...productData,
                        id: payload.id,
                    });
                    commit('setLoading', false);
                }
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Cascade update when category is updated
    updateCategory({
        dispatch
    }, payload) {
        db.collection('products').where('category.id', "==", payload.id).get()
            .then(snapshot => {
                let batch = db.batch();
                snapshot.forEach(doc => {
                    const docRef = db.collection('products').doc(doc.id);
                    batch.set(docRef, {
                        category: {
                            ...payload
                        },
                    }, {
                        merge: true
                    });
                });
                batch.commit()
                    .then(() => dispatch('fetch'));
            })
            .catch(err => console.error(err));

    },
    //* Delete Product
    delete({
        commit
    }, payload) {
        commit('setLoading', true);
        db.collection('products').doc(payload.id).delete()
            .then(() => deleteFile(payload.imagePath))
            .then(() => {
                commit('delete', payload.id);
                commit('setLoading', false);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Delete cascade on category delete
    deleteCategory({
        dispatch
    }, payload) {
        db.collection('products').where('category.id', "==", payload.id).get()
            .then(snapshot => {
                let batch = db.batch();
                snapshot.forEach(doc => {
                    const docRef = db.collection('products').doc(doc.id);
                    batch.set(docRef, {
                        category: null
                    }, {
                        merge: true
                    });
                });
                batch.commit()
                    .then(() => dispatch('fetch'));
            })
            .catch(err => console.error(err));
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}