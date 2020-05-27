import store from "../store/index";

export default (to, from, next) => {
    if (store.getters["user/getUser"]) {
        next();
    } else {
        next('/admin/login');
    }
}