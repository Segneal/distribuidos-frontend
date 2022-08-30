const PORT = 5500;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/login', async (req, res) => {
  let userCompare = {
    user: 'nico',
    password: 'a',
  };
  let user = {
    user: 'nico',
    password: 'a',
  };

  if (
    userCompare.user === user.user &&
    userCompare.password === user.password
  ) {
    return res.json(user);
  }
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
