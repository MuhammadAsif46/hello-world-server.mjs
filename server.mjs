// console.log("hello world expressJs hello world");

import express from 'express';
const app = express()

// https://198.061.982.0/profile

app.get('/', (req, res) => {
    console.log(" 'Hello World!' "+ new Date());
  res.send('Hello World!'+ new Date())
})
app.get('/profile', (req, res) => {
    console.log("This is a profile page "+ new Date());
  res.send("This is a profile page " + new Date())
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})