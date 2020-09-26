const axios = require("axios").default;
const qs = require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

let token = "";

const getToken = async() => {
    let token;
    const promise = await axios
        .post(
            "https://accounts.spotify.com/api/token",
            qs.stringify({
                grant_type: "client_credentials",
                client_id: "17a4482188314fb8bd103a79e261a5dd",
                client_secret: "22580b98dfc1482f94a57090002be10as",
            }),
            config
        )
    token = promise.data;
    return token.access_token;
}

module.exports = getToken;