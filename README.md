# Image Processing API - Udacity FullstackJS  #

## Getting Started ##

### Installing dependencies ###

After cloning the repo, all the project dependencies can be installed using npm:
```
npm install
```

### Running the server ###

To execute the application use the following command in terminal:

```
npm run start
```

the app will then be available on port 3000 by default, but that can be changed by editing the port constant value in the app.ts file.

### Scripts ###

The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript ####

```
npm run build
```

The transpiled code will be available in the `dist` folder.

#### Testing ####

A jasmine testing suite

```
npm run jasmine
```

#### Formatting ####

The code can be automatically formatted using prettier.

```
npm run prettier
```

#### Linting ####

```
npm run lint
```
---
## How to use ##

The API offers one endpoint to access and resize images available in the `images` folder.

The endpoint is `api/v1/image` and requires three query params:

| Query Param   | Value         |
| ------------- |:-------------:|
| filename      | the filename (without extension) of one of the images available in the folder |
| height        |  positive integer      |
| width         |  positive integer      |

 if the app is running on port 3000 that would be:

[http://localhost:3000/api/v1](http://localhost:3000/api/v1)

An example of  endpoint call would be: 

[http://localhost:3000/api/v1/image?filename=santamonica&height=400&width=400](http://localhost:3000/api/v1/image?filename=santamonica&height=400&width=400)
