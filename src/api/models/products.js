import {queries, storage} from '@/firestore'

const entityName = 'products'

export default  {
    getAll() {
        return queries.getAll(entityName)
    },

    save(product) {
        return queries.save(entityName, product)
    },

    uploadPhotos(product, files) {
        return new Promise((resolve, reject) => {
            if (!files.length) {
                resolve([]);
            }
            const uploadedRefs = []
    
            // para cada arquivo na fila
            for (let i = 0; i < files.length; i++) {
                
                // descobre a da extensão a partir do nome do arquivo
                let fileName = files[i].name
                let dotIndex = fileName.lastIndexOf('.')
                let fileExtension = fileName.substring(dotIndex)
    
                // monta o path de storage no firebase no formato /colecao/idDocumento/indice.extensao
                let storagePath = product.path + "/" + i + fileExtension
    
                //faz upload do arquivo
                storage.child(storagePath).put(files[i])
    
                //consulta a url final do arquivo 
                .then(uploaded => uploaded.ref.getDownloadURL())
    
                .then(url => {
                        //guarda a url no array
                        uploadedRefs.push(url)
                        //quando finalizar, atualiza o produto com os endereços de todas as imagens
                        if (uploadedRefs.length == files.length) {
                            product.update({ 'images': uploadedRefs }).then(resolve).catch(reject)
                        }
                        })
    
                .catch((error) => {
                    product.delete()
                    reject(error)
                    })
            }
        })
    }

}