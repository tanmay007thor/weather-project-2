const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=6a356c1c6755104ea62019ded4e9142a&query=' + latitude + ',' + longitude +'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback( undefined,'there is a  ' + body.current.temperature + ' degree out there. ' + body.current.precip + '% chance of the rain .')
           

        }
    })
}

module.exports = forecast
