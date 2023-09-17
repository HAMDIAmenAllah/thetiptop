import keys from "./oauth2.keys.json";

function getGoogleOAuthURL() {
    const rootUrl = keys.web.auth_uri;

    const options = {
        redirect_uri: keys.web.redirect_uris[1],
        client_id: keys.web.client_id,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(" "),
    };
    const qs = new URLSearchParams(options)

    return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL();
