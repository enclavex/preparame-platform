function fillScheduleHeader(specialistSchedules, dateBegin, dateEnd) {
    const headers = []

    let actualDate = new Date(dateBegin)

    for (let index = 0; index < 5; index++) {
        const headerExistsIndex = specialistSchedules.findIndex((specialistSchedule) => {
            return specialistSchedule.header.dateSchedule.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' }) ==
                actualDate.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' })
        })

        if (headerExistsIndex === -1) {
            headers.push({
                header: {
                    weekDay: actualDate.toLocaleDateString(undefined, { weekday: 'long' }).toLowerCase().slice(0, 3),
                    monthDay: actualDate.getDate(),
                    monthAbbr: actualDate.toLocaleDateString(undefined, { month: 'long' }).toLowerCase().slice(0, 3),
                    year: actualDate.getFullYear(),
                    dateSchedule: new Date(actualDate),
                    id: index.toString()
                },
                hours: [{
                    hour: "",
                    available: null,
                    userId: null,
                    id: index.toString()
                }]
            })
        }

        actualDate.setDate(actualDate.getDate() + 1)
    }

    return headers
}

function organizeSpecialistScheduleData(specialistSchedules, dateBegin, dateEnd) {
    const specialistScheduleAvailables = specialistSchedules.map((specialistScheduleAvailable) => {
        const dateSchedule = new Date(specialistScheduleAvailable.dateSchedule)

        return {
            id: specialistScheduleAvailable.id,
            available: specialistScheduleAvailable.status === "AVAILABLE",
            weekDay: dateSchedule.toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase().slice(0, 3),
            monthDay: dateSchedule.getDate(),
            monthAbbr: dateSchedule.toLocaleDateString('pt-BR', { month: 'long' }).toLowerCase().slice(0, 3),
            month: dateSchedule.getMonth(),
            year: dateSchedule.getFullYear(),
            hour: dateSchedule.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' }),
            userId: specialistScheduleAvailable.userId,
            dateSchedule
        }
    })

    const specialistScheduleData = []

    specialistScheduleAvailables.forEach((specialistScheduleAvailable) => {
        const specialistScheduleDataIndex = specialistScheduleData.findIndex((specialistSchedule) => {
            return specialistSchedule.header.monthDay === specialistScheduleAvailable.monthDay &&
                specialistSchedule.header.year === specialistScheduleAvailable.year
        })


        specialistScheduleAvailable.available = specialistScheduleAvailable.available &&
            specialistScheduleAvailable.dateSchedule >= new Date()

        if (specialistScheduleDataIndex === -1) {
            specialistScheduleData.push({
                header: {
                    weekDay: specialistScheduleAvailable.weekDay,
                    monthDay: specialistScheduleAvailable.monthDay,
                    monthAbbr: specialistScheduleAvailable.monthAbbr,
                    year: specialistScheduleAvailable.year,
                    dateSchedule: specialistScheduleAvailable.dateSchedule,
                    id: specialistScheduleAvailable.id
                },
                hours: [{
                    hour: specialistScheduleAvailable.hour,
                    available: specialistScheduleAvailable.available,
                    userId: specialistScheduleAvailable.userId,
                    dateSchedule: specialistScheduleAvailable.dateSchedule,
                    id: specialistScheduleAvailable.id
                }]
            })
        } else {
            specialistScheduleData[specialistScheduleDataIndex].hours.push({
                hour: specialistScheduleAvailable.hour,
                available: specialistScheduleAvailable.available,
                userId: specialistScheduleAvailable.userId,
                dateSchedule: specialistScheduleAvailable.dateSchedule,
                id: specialistScheduleAvailable.id
            })
        }
    })

    const newHeaders = fillScheduleHeader(specialistScheduleData, dateBegin, dateEnd)

    specialistScheduleData.push(...newHeaders)

    specialistScheduleData.sort((prior, next) => {
        return new Date(prior.header.dateSchedule) - new Date(next.header.dateSchedule);
    });

    return specialistScheduleData
}

function getDayOfWeek(date, dayOfWeek, before) {
    let resultDate = new Date(date);

    let countDaysToNextweek = 7

    if (before) {
        countDaysToNextweek = 0
    }

    resultDate.setDate(date.getDate() + (countDaysToNextweek + dayOfWeek - (date.getDay() == 7 ? 0 : date.getDay())) % 7);

    return resultDate;
}

function getDayOfNextWeek(date, dayOfWeek, before) {
    const resultDate = getDayOfWeek(date, dayOfWeek, before);

    resultDate.setDate(resultDate.getDate() + 7);

    return resultDate;
}

export { organizeSpecialistScheduleData, getDayOfWeek, getDayOfNextWeek }