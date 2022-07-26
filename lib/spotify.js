import SpotifyWebApi from "spotify-web-api-node";
const scopes=[
     "user-read-email",
     "palylist-read-private",
     "playlist-read-collaborative",
     "user-read-email",
     "streaming",
     "user-read-private",
     "user-library-read",
     "user-top-read",
     //"user-Library-modify",
     "user-read-playback-state",
     //"user-modify-playback-state",
     "user-read-currently-playing",
     "user-read-recently-played",
     "user-follow-read",
].join(',');


const params ={
    scope: scopes,
};
const quearyParamString = new URLSearchParams(params);
const LOGIN_URL = `https://accounts.spotify.com/authorize?${quearyParamString.toString()}`;


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLICCLIENT_SECRET,
})

export default spotifyApi;
export { LOGIN_URL};