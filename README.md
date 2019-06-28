# RESTful API tutorial

## What's a RESTful API?

- When we want to just communicate data with the server and not HTML.

3 example use cases

1. Client (Mobile App)
2. Client (Code, features like maps)
3. Client (Browser w/SPA)

## RESTful APIs are stateless backends

It has endpoints, with each endpoints having individual HTTP verbs. (methods)

## Technique

1. AJAX request
2. Get response

The JSON data will be transfered here for request and response.

## RESTful Constraints:

1. Client Server Architecture
   Seperation of concerns , RESTful API should not care about UI
2. Stateless
   No Client-Context ( eg: no sessions ) is stored on the server
3. Cacheabilty
   Responses must define themselves are cacheable or non-cacheable
4. Layered System
   Intermediate Servers maybe used without the client knowing about it
5. Uniform Interface
   - Resources are identified in requests, transferred data is decoupled from db schema.
   - Self descriptive messages, links to further resources returned from server are essential
6. Code on Demand (Optional)
   Executable code could be transferred.

## First plan

1. Plan the endpoints, with the methods.
2. Mark the protected routes

## install dependencies

## server.js - creating the server

## app.js - spinning up the express application

## add the routes

Some packages:

nodemon, morgan - logging package, body-parser

## Handling request body, handle CORS

What are CORS?
Cross - origin resource sharing

If the client and server are on the same server, like say localhost:3000
Then it will succeed.
But for a restful API, the client and server has different origins, so the request will fail.
So for restful Api, we want to allow access.

So we have to disable this mechanism , by sending some headers to the server from the client

## Maintain a documentation, and clearly state about the data and data format. That is the request and response data

## setup the database

## fill in the logic to the routes

## Add validation

## Linking the models if necessary and using .populate()

## Image Uploading - using multer

## Authentication

How is works?

Client ----------------- Server

Client sends auth data (email, pwd) to server for registration or login

Then in a normal node app we return a session, but we dont use sessions in restapi servers, and even mobile appps cannot use sessions, we will actually return a Token.
This token can be stored by our clients, and the client uses this token for future requests, we verify the token and serve the request

This token is a JWT : JSON WEB TOKEN
Its a JSON Data + Signature = JWT

This signature can be verified

We will use a private+public key combination.
JSON data is not encryptied

steps:

1. start by creating a user model
2. implement signup, use bcrypt
3. implement login
4. use jsonwebtoken npm package for JWT
