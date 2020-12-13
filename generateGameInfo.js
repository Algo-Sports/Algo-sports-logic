const fs = require("fs");
const jsonGenerator = require("./jsonGenerator.js");

let gamesetting = {};

gamesetting = JSON.parse(fs.readFileSync('./gamesetting.json'));
let gameinfo = jsonGenerator.gameinfo(gamesetting.canvas, gamesetting.ball,gamesetting.laser,gamesetting.plate,gamesetting.wave,gamesetting.maxlap);

fs.writeFileSync('./gameinfo.json',JSON.stringify(gameinfo));