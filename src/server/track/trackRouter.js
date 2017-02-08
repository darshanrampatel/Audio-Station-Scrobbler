'use strict';

const express = require('express');
const trackRouter = express.Router();
const controller = require('./trackController');
const payload = require('../middleware/payload');
const squish = require('../middleware/payload');
const sign = require('../middleware/signature');

trackRouter.route('/scrobbles')
  .post(payload.build(), controller.create)
  .get(controller.test)

module.exports = trackRouter; 