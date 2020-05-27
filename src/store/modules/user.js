import * as firebase from 'firebase';

const state = {
    user: null,
    loading: false,
}

const getters = {
    getUser(state) {
        return state.user;
    },
    getLoading(state) {
        return state.loading;
    }
}

const mutations = {
    //* Set logged in user to state
    setUser(state, payload) {
        state.user = payload;
    },
    //* Set loading state
    setLoading(state, payload) {
        return state.loading = payload;
    }
}

const actions = {
    //* Login User
    login({
        commit
    }, payload) {
        commit('setLoading', true);
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setUser', user);
                commit('setLoading', false);
            })
            .catch(err => {
                commit('setLoading', false);
                console.error(err);
            });
    },
    //* Auto Login user
    tryAutoLogin({
        commit
    }) {
        commit('setLoading', true);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                commit('setUser', user);
            }
            commit('setLoading', false);
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