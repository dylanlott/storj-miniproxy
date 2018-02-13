const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (req, res, next) => {
  console.log('req', req.params);
  res.render('share', {
    layout: 'layout',
    title: 'Share a file'
  });
};
