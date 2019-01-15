const fetch = require('node-fetch');

export default function (fieldForName, round) {
  fetch(
    'http://localhost:8000/score',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: fieldForName,
        score: round - 1,
      }),
    },
  );
  console.log('pashet11111');
}
