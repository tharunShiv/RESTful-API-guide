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
