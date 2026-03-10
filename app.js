const express = require('express');
const client = require('prom-client'); // Importăm biblioteca
const app = express();

// Activează colectarea metricilor implicite (CPU, RAM, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/', (req, res) => {
  res.send('Hello World! SUNT CEL MAI TAREEEEE');
});

// Endpoint-ul pe care îl caută Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});