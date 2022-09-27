const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config({ path: `mysql/.env.${app.get('env')}` });

const mysql = require('./mysql/index.js');

app.use(
  express.json({
    limit: '50mb',
  })
);

app.listen(port, () => {
  console.log(`서버가 포트 3000번으로 시작되었습니다.`);
});

app.get('/api/products', async (req, res) => {
  const productList = await mysql.query('productList');
  res.send(productList);
});

app.get('/api/products/:product_id', async (req, res) => {
  const product_id = req.params.product_id;
  const productList = await mysql.query('productDetail', product_id);
  res.send(productList);
});

app.post('/api/product', async (req, res) => {
  console.log(req.body.param);
  const result = await mysql.query('productInsert', req.body.param);
  res.send(result);
});

app.put('/api/product/:product_id', async (req, res) => {
  const product_id = req.params.product_id;
  const result = await mysql.query('productUpdate', [
    req.body.param,
    product_id,
  ]);
  res.send(result);
});

app.delete('/api/product/:product_id', async (req, res) => {
  const product_id = req.params.product_id;
  const result = await mysql.query('productDelete', product_id);
  res.send(result);
});
