const quotes = [
  "Start thinking 'bout the bad in the good!",
  'My God lives somewhere in the south of Europe, Sightseeing with His favorite son',
  'Uh, well, I think it’s fitting I found this website because I’m secretly a time traveler',
  'The last dinosaur, I wonder what it saw, when there was nothing anymore',
  'You change your mind almost as much as you change clothes',
  "If you want me as your back beat, take a seat, baby we can take a ride. Goin' 40 on the backstreets, baby we can take our time",
  "If we're an experiment, wheres the petri dish located? And who's the one conducting tests?"
];

function genQuote() {
  const quoteElem = document.getElementById('quote');

  console.log('loading quote');
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
  quoteElem.innerHTML = quote;
}
