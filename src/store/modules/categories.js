import {
    db
} from '../../db';

import {
    saveFile,
    deleteFile
} from '../../helpers/storage';

const state = {
    categories: [],
    loading: false,
}

const getters = {
    getCategories(state) {
        return state.categories;
    },
    getCategory(state) {
        return (id) => {
            return state.categories.find(item => item.id == id);
        }
    },
    getLoading(state) {
        return state.loading;
    }
}

const mutations = {
    //* Set fetched categories to state
    fetch(state, payload) {
        state.categories = payload;
    },
    //* Set new category on state
    create(state, payload) {
        state.categories.push(payload);
    },
    //* Set updated category on state
    update(state, payload) {
        const category = state.categories.find(item => item.id == payload.id);
        for (let key in payload) {
            if (key in category) {
                category[key] = payload[key];
            }
        }
    },
    //* Unset deleted category from state
    delete(state, payload) {
        state.categories = state.categories.filter(item => item.id !== payload);
    },
    //* Set loading state
    setLoading(state, payload) {
        return state.loading = payload;
    }
}

const actions = {
    //* Fetch Categories from database
    fetch({
        commit
    }) {
        commit('setLoading', true);
        db.collection('categories').orderBy('name').get()
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
    //* Create Categories
    create({
        commit,
    }, payload) {
        let id;
        let imageUrl;
        let imagePath;
        commit('setLoading', true);
        db.collection('categories').add({
                name: payload.name,
            })
            .then(res => {
                id = res.id;
                let ext = payload.image.name.slice(payload.image.name.lastIndexOf('.'));
                imagePath = `categories/${id}/main${ext}`;
                return saveFile(imagePath, payload.image);
            })
            .then(url => {
                imageUrl = url;
                return db.collection('categories').doc(id).update({
                    imageUrl: url,
                    imagePath: imagePath,
                })
            })
            .then(() => {
                commit('create', {
                    name: payload.name,
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
    //* Update a category
    update({
        commit
    }, payload) {
        let imageUrl;
        let imagePath;
        commit('setLoading', true);
        db.collection('categories').doc(payload.id).update({
                name: payload.name,
            })
            .then(() => {
                if (payload.image) {
                    let ext = payload.image.name.slice(payload.image.name.lastIndexOf('.'));
                    imagePath = `categories/${payload.id}/main${ext}`;
                    return saveFile(imagePath, payload.image)
                        .then(url => {
                            imageUrl = url;
                            return db.collection('categories').doc(payload.id).update({
                                imageUrl: url,
                                imagePath: imagePath,
                            })
                        })
                        .then(() => {
                            commit('update', {
                                name: payload.name,
                                id: payload.id,
                                imageUrl: imageUrl,
                                imagePath: imagePath,
                            });
                        })
                } else {
                    commit('update', {
                        name: payload.name,
                        id: payload.id,
                    });
                }
                commit('setLoading', false);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Delete Category
    delete({
        commit
    }, payload) {
        commit('setLoading', true);
        db.collection('categories').doc(payload.id).delete()
            .then(() => deleteFile(payload.imagePath))
            .then(() => {
                commit('setLoading', false);
                commit('delete', payload.id);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}