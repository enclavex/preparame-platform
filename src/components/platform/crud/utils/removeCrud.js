import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function removeCrud(selected, url) {
    url = `/${url}`;

    const config = {
        method: "delete",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseApiUrl}${url}/${selected.id}`,
    };

    return await axios(config)
        .catch(showError);
}

export { removeCrud }