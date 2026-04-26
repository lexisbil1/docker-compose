const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.connect();

app.get('/', async (req, res) => {
  await client.set('message', 'Hello from Redis!');
  const msg = await client.get('message');
  res.send(msg);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
