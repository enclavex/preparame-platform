
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

async function openEditCrud(id, url, fields) {
    if (id) {
        const mainConfig = {
            method: "get",
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            url: `${baseApiUrl}${url}/${id}`,
        };

        const mainDataObject = await axios(mainConfig)
            .then((result) => {
                return result.data;
            })
            .catch(showError);


        const object = Array.isArray(mainDataObject) ? mainDataObject[0] : mainDataObject

        if (object.id) {

            const mainTableFields = fields.mainTable.registerColumns

            Object.entries(object).forEach((values) => {
                if (mainTableFields[values[0]]) {
                    if (mainTableFields[values[0]].type === "DialogSelect") {
                        mainTableFields[values[0]].model = {
                            label: values[1][mainTableFields[values[0]].options.label],
                            value: values[1][mainTableFields[values[0]].options.value]
                        }
                    } else {
                        mainTableFields[values[0]].model = values[1];
                    }

                }
            });

            if (fields.childTable) {
                mainDataObject[0][fields.childTable.content].forEach(field => {
                    fields.childTable.tableData.push(field)
                })
            }
        }
    }
}

export { openEditCrud }