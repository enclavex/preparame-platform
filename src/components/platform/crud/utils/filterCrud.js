
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";
import {urlQueryBuilder} from "./../../../../utils/urlQueryBuilder.js"

async function filterCrud(filters, url) {
    url = urlQueryBuilder(url, filters)

    const config = {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const result = await axios
        .get(`${baseApiUrl}${url}`, config)
        .catch(showError);

    return result.data
}

export { filterCrud }