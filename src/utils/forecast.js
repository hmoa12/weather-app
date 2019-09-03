const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e31ef5b1200554533e06d69a8f33fe60/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si&exclude=minutely,hourly'

    request({url, json: true}, (error, { body }) => {
        const {temperature, precipProbability} = body.currently
        const summary = body.daily.summary

        if (error) {
            callback("Couldn't fetch the data, make sure you are connected to internet!", undefined)
        } else if (body.error) {
            callback('The given location is invalid.', undefined)
        } else {
            callback(undefined, summary + ', it is currently ' + temperature + ' degrees out. There is a ' + precipProbability +'% chance of rain.')
        }
    })
}

module.exports = forecast
