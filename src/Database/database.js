const daysType = {
    simpleDay: [
        '9-00',
        '9-30',
        '10-00',
        '10-30',
        '11-30',
        '12-00',
        '13-00',
        '13-30',
        '14-00',
        '14-30',
        '15-00',
        '15-30',
        // '16-00',
    ],
    shortDay: [
        '9-00',
        '9-30',
        '10-00',
        '10-30',
        '11-30',
        '12-00',
        '13-00',
        '13-30',
        '14-00',
        '14-30',
        // '15-00',
    ],
    restDay: ['Неприёмный день']
}
const timeTable = {
    1: daysType.simpleDay,//Monday
    2: daysType.simpleDay,
    3: daysType.simpleDay,
    4: daysType.simpleDay,
    5: daysType.shortDay,
    6: daysType.restDay,
    0: daysType.restDay,//Sunday
}

export {timeTable, daysType};