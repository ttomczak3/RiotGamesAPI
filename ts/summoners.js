var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function user() {
    return __awaiter(this, void 0, void 0, function () {
        var riotKey, searchText, APICallingSummonerString, responseSummoner, summoner, Id, APICallingLeagueString, responseLeague, league, rank;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    riotKey = '';
                    searchText = document.getElementById('search').value;
                    APICallingSummonerString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/".concat(searchText, "/?api_key=").concat(riotKey);
                    return [4 /*yield*/, fetch(APICallingSummonerString)];
                case 1:
                    responseSummoner = _a.sent();
                    return [4 /*yield*/, responseSummoner.json()];
                case 2:
                    summoner = _a.sent();
                    Id = summoner.id;
                    APICallingLeagueString = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/".concat(Id, "/?api_key=").concat(riotKey);
                    return [4 /*yield*/, fetch(APICallingLeagueString)];
                case 3:
                    responseLeague = _a.sent();
                    return [4 /*yield*/, responseLeague.json()];
                case 4:
                    league = _a.sent();
                    try {
                        switch (league[0].tier || league[1].tier) {
                            case 'IRON':
                                rank = 'images/ranked-emblems/Emblem_Iron.png';
                                break;
                            case 'BRONZE':
                                rank = 'images/ranked-emblems/Emblem_Bronze.png';
                                break;
                            case 'SILVER':
                                rank = 'images/ranked-emblems/Emblem_Silver.png';
                                break;
                            case 'GOLD':
                                rank = 'images/ranked-emblems/Emblem_Gold.png';
                                break;
                            case 'PLATINUM':
                                rank = 'images/ranked-emblems/Emblem_Platinum.png';
                                break;
                            case 'DIAMOND':
                                rank = 'images/ranked-emblems/Emblem_Diamond.png';
                                break;
                            case 'MASTER':
                                rank = 'images/ranked-emblems/Emblem_Master.png';
                                break;
                            case 'GRANDMASTER':
                                rank = 'images/ranked-emblems/Emblem_Grandmaster.png';
                                break;
                            case 'CHALLENGER':
                                rank = 'images/ranked-emblems/Emblem_Challenger.png';
                                break;
                        }
                    }
                    catch (e) {
                        rank = 'images/ranked-emblems/default.png'; // Checking for none ranked players
                    }
                    // Displaying player data
                    document.getElementById("icon").setAttribute('src', "http://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/".concat(summoner.profileIconId, ".png")); // Using Riots API to recive profile icons
                    document.getElementById("name").innerHTML = summoner.name;
                    document.getElementById("level").innerHTML = "level: ".concat(summoner.summonerLevel);
                    document.getElementById("tier").src = rank;
                    return [2 /*return*/];
            }
        });
    });
}
