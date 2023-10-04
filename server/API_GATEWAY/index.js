const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { rateLimit } = require("express-rate-limit");
const {
    FLIGHT_SERVICE_PATH_LOCAL,
    AUTH_SERVICE_PATH_LOCAL,
    BOOKING_SERVICE_PATH_LOCAL,
    PORT
} = require("./serverConfig");
const axios = require("axios");
const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, //2 mins
  limit: 15, //15 requests
});

//For logging
app.use(morgan("combined"));

//For rate limiting
app.use(limiter);

app.use("/bookingservice", async (req, res, next) => {
  try {
    const response = await axios.get(
        `${AUTH_SERVICE_PATH_LOCAL}/authservice/api/v1/isAuthenticated`,{
          headers: {
            'Authorization': req.headers['authorization'],
          },
        }
      );
    
    if (response.data.success) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.use("/bookingservice", createProxyMiddleware({target: `${BOOKING_SERVICE_PATH_LOCAL}`,changeOrigin: true,}));
app.use("/flightservice",createProxyMiddleware({target: `${FLIGHT_SERVICE_PATH_LOCAL}`,changeOrigin: true,}));
app.use("/authservice",createProxyMiddleware({target: `${AUTH_SERVICE_PATH_LOCAL}`,changeOrigin: true,}));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
