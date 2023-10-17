const express = require('express');
const v1ApiRoutes = require('./v1/index');

const createApiRoutes = (channel) => {
  const router = express.Router();

  // Mount the v1 API routes and pass the channel to the route handlers
  router.use('/v1', v1ApiRoutes(channel));

  return router;
};

module.exports = createApiRoutes;
