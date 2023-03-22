async function user() {
  const riotKey = ''; // Development API Key, needs to be regenerated every 24 hours
  const searchText = (document.getElementById('search') as HTMLInputElement).value;   // Getting summoner name from search bar

  // Request to Riot API
  let APICallingSummonerString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}/?api_key=${riotKey}`;
  const responseSummoner = await fetch(APICallingSummonerString);

  let summoner = await responseSummoner.json(); // Return value to json

  const Id = summoner.id; // Getting player's encrypted summonerId

  // Request to Riot API
  let APICallingLeagueString = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${Id}/?api_key=${riotKey}`;
  const responseLeague = await fetch(APICallingLeagueString);

  let league = await responseLeague.json(); // Return value to json

  // Matching up the tier image with the players tier
  let rank;
  try {
    switch(league[0].tier || league[1].tier) {
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
  catch(e) {
    rank = 'images/ranked-emblems/default.png'; // Checking for none ranked players
  }

  // Displaying player data
  document.getElementById("icon")!.setAttribute('src', `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${summoner.profileIconId}.png`); // Using Riots API to recive profile icons
  document.getElementById("name")!.innerHTML = summoner.name;
  document.getElementById("level")!.innerHTML = `level: ${summoner.summonerLevel}`;
  (document.getElementById("tier") as HTMLImageElement).src = rank;
}

