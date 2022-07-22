
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function openEditCrud(id, url, fields) {
    if (id) {
        const config = {
            method: "get",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            url: `${baseApiUrl}${url}/${id}`,
        };

        const dataObject = await axios(config)
            .then((result) => {
                return result.data;
            })
            .catch(showError);

        Object.entries(dataObject).forEach((values) => {
            if (fields[values[0]]) {
                fields[values[0]].model = values[1];
            }
        });
    }
}

export { openEditCrud }