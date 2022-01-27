const ackeeInstance = ackeeTracker.create('https://analytics.raphaelbernhart.at', {
    detailed: true,
    ignoreLocalhost: false,
    ignoreOwnVisits: false
})
.record('35e91438-e98e-4177-9bf5-c482df5e12df')

const referring = (referrer, link) => {
    if (ackeeInstance.hasOwnProperty('action')) {
        ackeeInstance.action('f37563d4-e474-4b86-9128-8ca2845094d3', {
            key: referrer,
            value: 1
        })
    }

    window.open(link, '_blank')
}