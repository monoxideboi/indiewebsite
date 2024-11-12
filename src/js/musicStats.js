async function getSong(lasturl) {
  // setInterval(async () => {
  const artElem = document.getElementById('songArt');
  const nameElem = document.getElementById('songName');
  const artistElem = document.getElementById('songArtist');
  const timeElem = document.getElementById('songTime');

  const songBox = document.getElementById('songBox');

  const url = 'https://asoik.dev/services/lastfm';
  // const url = 'http://127.0.0.1:8787/';

  let headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');

  let data = await fetch(url, {
    method: 'GET',
    headers: headers,
  })
    .then((res) => {
      console.log(typeof(res.status));
      if (res.status == 429) {
        // console.log(`false retirn`);
        return false;
      } else {
        return res.json();
      }
    })
    .then((json) => {
      if (!json) {
        // console.log(`returning false`);
        return false;
      }
      console.log(json);
      return json;
    });
    // console.log('data');
    // console.log(data);
  if (data != false) {
    // console.log('data fine');
    // console.log(data.url);
    // console.log(lasturl)
    if (data.url != lasturl) {
      console.log('song changed!');

      nameElem.innerHTML = '';
      artistElem.innerHTML = '';

      artElem.src = data.image[2]['#text'];
      songBox.href = data.url;

      let songName = data.name;
      let artistName = data.artist['#text'];

      marqueeOverflow(songName, 15, nameElem);
      marqueeOverflow(artistName, 15, artistElem);
      console.log(data['@attr']);
      if (data['@attr'] && data['@attr'].nowplaying) {
        timeElem.innerHTML = 'Now listening!';
      } else {
        console.log(data.date.uts);
        console.log(typeof parseInt(data.date.uts));
        console.log(timeAgo(parseInt(data.date.uts)));
        timeElem.innerHTML = timeAgo(parseInt(data.date.uts));
      }
      lasturl = data.url;
    }
    setTimeout(() => {
      getSong(lasturl);
    }, 5000);
  } else {

    //i dont think this works
    console.log('rate limit');
  }
  // }, '3000');

  // 5 Seconds
}

function timeAgo(uts) {
  let now = Date.now();
  let utsmili = uts * 1000;

  let diff = now - utsmili;
  let seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return seconds + ' seconds ago';
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes + ' minutes ago';
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours + ' hours ago';
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return days + ' days ago';
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return weeks + ' weeks ago';
  }

  const months = Math.floor(days / 30.44); // Average days per month
  if (months < 12) {
    return months + ' months ago';
  }
}

function marqueeOverflow(string, length, parent) {
  if (string.length >= length) {
    // if (true) {
    let newElem = document.createElement('marquee');
    // newElem.innerHTML = 'ladjhflahlfhalfalfjalfjaf';
    newElem.addEventListener('mouseover', () => {
      newElem.stop();
    });
    newElem.addEventListener('mouseout', () => {
      newElem.start();
    });
    newElem.innerHTML = string;
    parent.appendChild(newElem);
  } else {
    parent.innerHTML = string;
  }
}
