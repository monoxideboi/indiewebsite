function getror2 (data) {
    let hoursElem = document.getElementById('rorhours');
    let bar = document.getElementById('rorBar');

    console.log(data.achievements);
    let hoursPlayed = Math.floor(data.playtime_forever/60*10)/10;
    console.log(hoursPlayed);
    hoursElem.innerHTML = `${hoursPlayed} hours`;
    
    let achievementCounter = 0;
    for (let i = 0; i < data.achievements.length; i++) {
        let achievement = data.achievements[i];
        if (achievement.achieved == 1) {
            achievementCounter++;
        }
    }
    console.log(`${achievementCounter} completed`);
    let numofsquares = Math.floor(achievementCounter/data.achievements.length*10);
    let barText = "█".repeat(numofsquares);
    barText += "▒".repeat(10-numofsquares);
    bar.innerHTML = barText;
    // percent.innerHTML = Math.floor(achievementCounter/data.achievements.length*100) + '%';






}