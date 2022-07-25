
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function saveCrud(url, data) {
    Object.entries(data)
    .forEach(values => {
        if (values[0] === 'id') {
            if (!values[1]) {
                delete data.id
            }
        }
    })

    const config = {
        method: "post",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        data: data,
        url: `${baseApiUrl}${url}`,
    };

    const objectCreated = await axios(config)
        .then((created) => {
            return created;
        })
        .catch(showError);

    return objectCreated
}

export { saveCrud }