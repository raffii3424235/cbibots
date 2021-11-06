module.exports = {
  Admins: ["503922372177297418"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/9dxmKcbSaG", //Support Server Link
  Token: process.env.Token || "OTA2Mzk3MDQwNDk2NDgwMjc3.YYYCBg.fngLVHf0l2SZQXMI5G6qSfrmxWI", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "906397040496480277", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "_jMF_BmsekJ8sZEiWlT2x47AKuhKpvlT", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "kung", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
  /*
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  */
  //Alternate Lavalink
  
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "6329c920f95847d2adc241c84ffd4296", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "6fbc061dc44240a9a1dac186f563e076", //Spotify Client Secret
  },
};
