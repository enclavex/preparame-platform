
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

        const object = Array.isArray(dataObject) ? dataObject[0] : dataObject

        Object.entries(object).forEach((values) => {
            if (fields[values[0]]) {
                if (fields[values[0]].type === "DialogSelect") {
                    fields[values[0]].model = {
                        label: values[1][fields[values[0]].options.label],
                        value: values[1][fields[values[0]].options.value]
                    }
                } else {
                    fields[values[0]].model = values[1];
                }

            }
        });
    }
}

export { openEditCrud }