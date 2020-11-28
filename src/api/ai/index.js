import axios from 'axios';

let imageAnalysis = function (file) {
    const URL = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/8b2ecbb6-44c0-499e-ac4b-baf25f62742f/classify/iterations/Iteration1/image'; 

    let data = new FormData();
    //data.append('name', 'my-picture');
    data.append('file', file); 

    const headers = {
        
/* removidas para não aparecer as chaves no repositorio publico */
            
    }

    return new Promise((resolve, reject) => {
        axios.post(
            URL, 
            data,
            {headers: headers}
        ).then(
            response => {
                resolve(response.data.predictions[0].tagName);
            }
        ).catch(reject);
    })

}

export default {
    imageAnalysis
}


