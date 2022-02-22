let jsonString = JSON.stringify(data)

fetch('THE_URL', {
  method: 'POST',

  headers: { 'Content-Type': 'application/json' },

  body: jsonString,
}).then() // do something)
