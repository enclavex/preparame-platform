function formatDateToString(date) {
    let newDate = date.substr(0, 10)

    newDate = newDate.split("-");

    newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

    return newDate
}

export {formatDateToString}