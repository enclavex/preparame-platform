
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function saveCrud(url, data, method = "post", format = false) {
    try {
        if (url.slice(0, 1) !== "/") {
            url = `/${url}`
        }
       
        Object.entries(data)
            .forEach(values => {
                if (values[0] === 'id') {
                    if (!values[1]) {
                        delete data.id
                    }
                }
    
                if (format) {
                    const isObject = typeof values[1] === 'object' && values[1] !== null
                   
                    if (isObject) {
                        if (Object.entries(values[1]).length > 0) {
                            data[
                                values[0]
                            ] = values[1].value
                            
                            values[1] = values[1].value
                        }
                    }
                }
            })
    
        const config = {
            method: method,
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            data: data,
            url: `${baseApiUrl}${url}`,
        };
    
        const objectCreated = await axios(config)
            .then((created) => {
                return created;
            })
            .catch(err => {
                return showError(err)
            });
    
        return objectCreated
    } catch (err) {
        console.log(err)
    }
}

export { saveCrud }