const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'BOOKING SERVICE',
      version: '1.0.0',
      description: 'Documentation for Booking Service APIs',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['src/routes/v1/index.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;