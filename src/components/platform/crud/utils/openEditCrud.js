
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

import {formatDateToString} from "./../../../../utils/formatDate.js"

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

            if (fields.childTable.tableColumns) {
                fields.childTable.tableColumns.forEach(tableColumn => {
                    if (tableColumn.field.indexOf(".") > 0) {
                        const key = tableColumn.field.substr(0, tableColumn.field.indexOf("."));
                        const value = tableColumn.field.substr(tableColumn.field.indexOf(".") + 1);

                        tableColumn.field = key

                        object[fields.childTable.content].map((values) => {
                            values[key] = values[key][value];
                        });
                    }
                })
            }

            const dateColumns = fields.childTable.tableColumns.filter(column => {
                return column.type === 'date'
            })

            if (object[fields.childTable.content]) {
                object[fields.childTable.content].forEach(field => {
                    dateColumns.forEach(col => {
                        field[col.name] = formatDateToString(field[col.name])
                    })

                    fields.childTable.tableData.push(field)
                })
            }
        }
    }
}

export { openEditCrud }