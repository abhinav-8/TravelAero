# TravelAero's API Gateway 
The API Gateway in TravelAero acts as a central entry point, allowing seamless communication between microservices. It handles incoming requests and directs them to the appropriate services.Implemented using Node.js and Express.js, it ensures efficient routing,rate limiting,logging enhancing modularity and scalability.

## Setup and Installation :

- Go to `API Gateway` and execute `npm install`
- Create a `.env` file in the `API_GATEWAY` directory based on file `.envExample` 
 

- Go to `API_GATEWAY` and start the server by `npm start`
- Checkout the enpoints each service provides (Checkout their READMEs).
- Endpoints of all the services can be directly called through the gateway `http://localhost:{GATEWAY_PORT}/{ROUTES}`, here `ROUTES` are all the routes of other services. Examples:

```
- /flightservice/api/v1/get, 
- bookingservice/api/v1/create
```


## Why API Gateway?

FRONTEND - MIDDLE-END - BACKEND

- We need an intermediate layer between the client side and microservices
- Using this middle end, when client sends request we will be able to make decision that which microservices should actually respond to this request
- We can do message validation, response transformation, rate liming
- This API gateway will act as a middle end and will act as a reverse proxy
