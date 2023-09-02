import express from 'express';
const app = express();
const port = 5000;
import session from 'express-session';

app.use(express.json());
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    })
  );

import soal1Routes from './routes/soal1R.js';
import soal2Routes from './routes/soal2R.js';


app.use('/merkler', soal1Routes);
app.use('/merkler', soal2Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});