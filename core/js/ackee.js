const ackeeInstance = ackeeTracker.create('https://analytics.raphaelbernhart.at', {
    detailed: true,
    ignoreLocalhost: false,
    ignoreOwnVisits: false
})
.record('89114d0f-28fc-4360-b9d8-98bd53de9ec8')

const referring = (referrer, link) => {
    if (ackeeInstance.hasOwnProperty('action')) {
        ackeeInstance.action('7290d650-248d-46a7-87f2-b7a5b61cef06', {
            key: referrer,
            value: 1
        })
    }

    window.open(link, '_blank')
}