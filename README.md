# Butterflies Server 
This project contains the code for the Butterflies webapp server. 

## Getting Started
In the config folder there is a file named "dev.setup.ts" remove the "setup"prefix so that this file is simply dev.ts. Follow the instructions for adding the necessary
api keys / mongo connection string. To start app npm run dev. 

## Folder Structure 
The **common** folder will house reusable middleware functions and error classes to be used by the individual route handlers.

The **config** folder will contain keys for development and production to connect to the mongodb database as well as outside services.

The **models** folder will house the model definitions of each document type.

The **routes**  folder will contain folders for each set of resources i.e Auth, Profiles etc. 


Each resource folder will contain a seperate folder for each individual route handler. i.e Signup, Signin etc. as well as an: **index.ts** to connect all routehanlders to the resource router and import / apply necessary middlewares.

The **tests**  folder contains files for the setup of test suites as well as helper functions to mock authentication.

Each route handler folder will contain 2 to 3 files pertaining to the implementation of that route. Which are as follows:

**index.ts** - File exports a function containing the route handler business logic.

**index.test.ts** -  Unit tests for each individual route handler.

**validation.ts** - File to define the validation rules and error messages for the request body of the route handler if necessary. i.e Only for post routes.

