const express = require ('express');
const { getJSONData } = require ('./data');

const app = express();
const port = 3000; // You can choose any available port

app.get('/api', (req, res) => {
  const responseData = getJSONData();
  res.status(200).json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
