//TODO: Use a CDN to store and deliver images (Amazon Cloudfront)
import dontbuy from "./dontbuy.json";
import favorites from "./favorites.json";
import forsale from "./forsale.json";
import kickstarter from "./kickstarter.json";
import watchlist from "./watchlist.json";

//get boardgame geek images TEMPORARY
export const gameImages = [
  "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/Gloomhaven_Cover_Art.jpg",
  "https://upload.wikimedia.org/wikipedia/en/a/a5/Diplomacy_box_cover.jpg",
  "https://upload.wikimedia.org/wikipedia/en/3/36/Pandemic_game.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Carcassonne-game.jpg",
];

//add old price and current price values to data
export const mocks = {
  "dont buy": dontbuy,
  favorites: favorites,
  "for sale": forsale,
  kickstarter: kickstarter,
  watchlist: watchlist,
};

//use board game atlas to get canada, britain, australia prices
//need boardgamegeek game id to create link
export const links = [
  "amazon.com",
  "target.com",
  "miniaturemarket.com",
  "bgg.com",
  "kickstarter.com",
  "tabletopmerchant.com",
  "reddit.com",
  "boardlandia.com",
  "cardhaus.com",
  "boardgameatlas.com",
];
