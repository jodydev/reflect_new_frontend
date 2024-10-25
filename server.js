import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Errore nella richiesta');
  }
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
