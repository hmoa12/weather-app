const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG1vYTEyIiwiYSI6ImNqeXIxZnd1azA1eDgza25vcHAwMnBxcDUifQ.7XSj37HmZ0aRSk5HAnuv0g&limit=1'
    request({url, json: true}, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features[0]) {
            callback("Couldn't find the location.", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode
