
async function getRecentlyPlayed() {
    let recentGameImgs = document.getElementsByClassName('recentGameImg');
    let recentGameNames = document.getElementsByClassName('recentGameName');
    let recentGameHours = document.getElementsByClassName('recentGameHours');

    console.log('getting steam things');

    let headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    let data = await fetch("https://asoik.dev/services/steam", {
        method: 'GET',
        headers: headers
    }).then ((res) => {
        return res.json();
    }).then((json) => {
        console.log(json);
        return json;
    });

    for (let i = 0; i < data.recentgames.total_count; i++) {
        let game = data.recentgames.games[i];
        // recentGameImgs[i].src = `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
        
        let setName = game.name;
        if (setName.length > 17) {
            setName = game.name.substring(0,13) + '...';
        }
        recentGameNames[i].innerHTML = setName;
        console.log(game.playtime_2weeks);
        recentGameHours[i].innerHTML = `${Math.floor(game.playtime_2weeks/60)} Hours`;
    }

    getror2 (data.games[632360]);


    
}