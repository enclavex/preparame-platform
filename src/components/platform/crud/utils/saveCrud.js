
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function saveCrud(id, url, data) {
    if (id) {
        Object.assign(data, { id: id });
    }

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