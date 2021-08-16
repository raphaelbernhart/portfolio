const ackeeInstance = ackeeTracker.create('https://analytics.raphaelbernhart.at', {
    detailed: true,
    ignoreLocalhost: false,
    ignoreOwnVisits: false
})
.record('89114d0f-28fc-4360-b9d8-98bd53de9ec8')

const referring = (referrer, link) => {
    if (ackeeInstance.hasOwnProperty('action')) {
        ackeeInstance.action('35fea6c7-383d-421d-a315-a1847d657e00', {
            key: referrer,
            value: 1
        })
    }

    window.open(link, '_blank')
}