function formatDateToString(date) {
    let newDate = date.substr(0, 10)

    newDate = newDate.split("-");

    newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

    return newDate
}

function formatDateToStringMasked(date, mask){
    let dateMasked = mask
    let dateReference = new Date(date)
    
    if (mask.includes('dd')) {
        let dayDateReference = `0${dateReference.getDate().toString()}`
        
        dayDateReference = dayDateReference.substring(dayDateReference.length - 2)
        
        dateMasked = dateMasked.replace("dd", dayDateReference);
    }
    
    if (mask.includes('mm')) {
        let monthDateReference = dateReference.getMonth() + 1

        monthDateReference = `0${monthDateReference.toString()}`

        monthDateReference = monthDateReference.substring(monthDateReference.length - 2)

        dateMasked = dateMasked.replace("mm", monthDateReference);
    }

    if (mask.includes('yyyy')) {
        let yearDateReference = dateReference.getFullYear().toString()

        yearDateReference = yearDateReference.substring(yearDateReference.length - 4)

        dateMasked = dateMasked.replace("yyyy", yearDateReference);
    }

    return dateMasked
}

export { formatDateToString, formatDateToStringMasked }