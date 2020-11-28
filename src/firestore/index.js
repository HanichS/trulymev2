import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    /* removidas para não aparecer as chaves no repositorio publico */
  };

export const db  = firebase.initializeApp(firebaseConfig).firestore()

export const storage = firebase.storage().ref();

const mapData = function (queryResult) {
    return queryResult.docs.map(doc => {
        let data = doc.data()
        data.ref = doc.ref
        return data
    })
}

const makePromise = function (query) {
    return new Promise((resolve, reject) => {
        query
            .then((queryResult) => {
                resolve(mapData(queryResult))
            })
            .catch(reject)
    })
}

export const queries = {
    save(collection, payload) {
        return db.collection(collection).add(payload)
    },

    getAll(collection, order) {
        let query = db.collection(collection)
        if (order) {
            query = query.orderBy(...order)
        }
        return makePromise(query.get())
    },

    getWhere(collection, params) {
        let query = db.collection(collection)
        if (!Array.isArray(params[0])) {
            params = [params]
        }
        for (let param of params) {
            query = query.where(...param)
        }

        return makePromise(query.get())
    }
}

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }



