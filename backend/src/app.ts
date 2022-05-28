import app from './config';

const port = process.env.API_PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
