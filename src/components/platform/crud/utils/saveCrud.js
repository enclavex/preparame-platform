
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function saveCrud(url, data, method = "post") {
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
            console.error(err)
            return showError(err)
        });

    return objectCreated
}

export { saveCrud }