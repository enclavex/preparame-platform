import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function removeCrud(selecteds, url, data) {
    url = `/${url}`;

    selecteds.forEach(async (selected) => {
        const config = {
            method: "delete",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            url: `${baseApiUrl}${url}/${selected.id}`,
        };

        await axios(config)
            .then(() => {
                const indexDeleted = data.findIndex((value) => {
                    return value.id === selected.id;
                });

                if (indexDeleted > -1) {
                    data.splice(indexDeleted, 1);
                }
            })
            .catch(showError);
    })
}

export { removeCrud }