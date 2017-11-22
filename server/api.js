var API_KEY = require('./apikey');
var request = require('request');

var RiotAPI = {
    getSummonerIcon(summoner_name, callback) {
        let url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner_name}?api_key=${API_KEY}`;

        request(url, function (error, response, body) {
            if (error) {
                console.log(error);
            }

            let json = JSON.parse(body);
            let profileIconId = json['profileIconId'];
            if (profileIconId) {
                callback(profileIconId.toString());
            } else {
                callback('-1');
            }
        });
    }
}

module.exports = RiotAPI;