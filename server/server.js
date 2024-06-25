const express = require('express');
const app = express();
const fs = require('fs');

const cartFilePath = './cart.json';
const port = 3001;

app.use(express.json());

app.post('/cart/add', (req, res) => {
  const product = req.body;
  fs.readFile(cartFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading cart data');
      return;
    }
    const cart = JSON.parse(data);
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
      if (err) {
        res.status(500).send('Error updating cart data');
        return;
      }
      res.status(200).send('Product added to cart');
    });
  });
});

app.put('/cart/update', (req, res) => {
  const { id, quantity } = req.body;
  fs.readFile(cartFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading cart data');
      return;
    }
    const cart = JSON.parse(data);
    const productIndex = cart.findIndex((item) => item.id === id);
    if (productIndex > -1) {
      cart[productIndex].quantity = quantity;
      fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
        if (err) {
          res.status(500).send('Error updating cart data');
          return;
        }
        res.status(200).send('Cart updated');
      });
    } else {
      res.status(404).send('Product not found in cart');
    }
  });
});

app.delete('/cart/delete/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  fs.readFile(cartFilePath, (err, data) => {
    if (err) {
      res.status(500).send('Error reading cart data');
      return;
    }
    let cart = JSON.parse(data);
    cart = cart.filter((item) => item.id !== productId);
    fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
      if (err) {
        res.status(500).send('Error updating cart data');
        return;
      }
      res.status(200).send('Product removed from cart');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
