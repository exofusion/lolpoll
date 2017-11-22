var RiotAPI = {
    getSummonerIcon(summoner_name, callback) {
        let url = `http://localhost:3000/summoner_icon/${summoner_name}`;
        return fetch(url, {
                    method: 'GET'
                })
                .then((response) => response.text())
                .then((responseText) => callback(responseText))
                .catch((error) => {
                    console.error(error);
                });
    }
}


export default RiotAPI;