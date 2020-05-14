import * as firebase from 'firebase';

function saveFile(path, image) {
    return firebase.storage().ref(path).put(image)
        .then(fileData => fileData.ref.getDownloadURL())
        .catch(err => console.error(err));
}

function deleteFile(path) {
    return firebase.storage().ref(path).delete();
}

export {
    saveFile,
    deleteFile,
}