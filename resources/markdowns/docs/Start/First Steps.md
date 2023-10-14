# Getting Started with Chameleon

<p class="lead">First steps with Chameleon</p>

If you are reading this is because you do not have a clear idea about what exactly is Chameleon and what is its power and expressiveness. As the best way to learn something is by using it let's start by describing the collection of steps that you can follow to configure & check the framework.  We illustrate these steps by showing a simple example.

## Download Chameleon

The first step to start with Chameleon is to get the binary code. In our Download Center you will find all available resources for the framework. Essentially, Chameleon is a single Javascript bundle. But you can also use it in conjunction with other associated plugins providing several extension models. Each plugin is also a single resource.  

<div class="action">
  <a class="button" href="#Start:Download">Download Center</a>
</div>

## Set Up the Project

Chameleon use most modern Web & JavaScript standards. The Extensions are defined using classes and decorators and the code is organized using the ES6 module specification. In a near future browser support for these features is expected to be full. In fact, most of these features are already in use in modern browsers. Nevertheless, there is still required to use Babel as a transpilation tool. For this reason, you need to add some configuration. But let's start by the beginning.

### Create a Project Structure

Origami Chameleon does not require to use any specific folder structure to arrange resources in your project. You are the project owner and you decide how do you like to work. Nevertheless, for the sake of clarity we cannot help starting this section by discussing a tentative project structure. It is the same one that we will use to develop the labs that you can find in the labs section and all file paths included in code snippets along this section assume this project structure.

```text
test
  + web
    + assets
       + img
       + css
    + code
      + build
      + lib
      + src
        + extensions
        - start.js
  - index.html
```

We will assume that the root folder is named `test`. As you can see, our proposed project structure includes a main `index.html`  file and two folders to separate web assets from JavaScript code. Within the `code` folder we have 3 directories named `lib`, `src` & `build`. The first one is used to host chameleon libraries whilst the two latter ones are respectively used to save source code and all auto-generated code resulting from the transpilation process carried out by babel.

Particularly it is important to highlight

### Create the Package.json

Once you have a project structure, you firstly need to define a `package.json` file with all the settings required for the project. As this is a Babel project you should al least include needed libraries as development time dependencies. And for your convenience we recommend to define an building script to dump transpiled resources in the `build` folder.

```json
{
  "name": "chameleon-test-01",
  "version": "1.0.0",
  "author": "Origami",
  "description": "My first chameleon test",
  "scripts": {
    "build": "./node_modules/.bin/babel ./web/code/src --out-dir ./web/code/build"
  },
  "devDependencies": {
    "@babel/cli": "7.6.0",
    "@babel/core": "7.6.0",
    "@babel/preset-env": "7.6.0",
    "@babel/polyfill": "7.6.0",
    "@babel/plugin-proposal-class-properties": "7.5.5",
    "@babel/plugin-proposal-decorators": "7.4.4",
    "@babel/plugin-proposal-object-rest-spread": "7.5.5"
  }
}
```

### Create Babel Configuration

Since Chameleon make use of extended features out of standard settings it is necessary to add specific configuration for Babel. There are several flavors to configure a Babel project. Here we use the most common one consisting of include the `.babelrc.js` resource at the root path.

```javascript
const properties = require ('@babel/plugin-proposal-class-properties')
const decorators = require ('@babel/plugin-proposal-decorators')
const spread     = require ('@babel/plugin-proposal-object-rest-spread')

const presets = [[
  '@babel/preset-env',
  {
    targets : {
      esmodules : false,
      node      : 10
    },
    useBuiltIns : 'usage',
    modules     : false
  }
]]

const plugins = [
  [decorators, { legacy : true }],
  [properties, { loose  : true }],
  [spread]
]

module.exports = { presets, plugins };
```

### Define the Entry Point

Finally, it is required to create an entry point for the project. In our case this is a regular html file, as it was described before. In the following code it is important to highlight two things. Firstly, since the framework is designed according to ES6 Module standard, the script should include the `type='module'` attribute. Secondly, since we use a transpilation process, we cannot make use of source code scripts in `src` but generated ones dumped in the `build` folder. In particular all our examples in the lab section point to the `start.js` file as the main entry point resource in JavaScript code.     

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Origami Chameleon Test</title>
  </head>

  <body>
    <script type="module" src="./web/code/build/start.js"></script>
  </body>

</html>
```

## Test the Framework

Once we have defined a sandbox environment we can start to play with Chameleon.
In a real architecture this would be the moment in which a set of adaptive extension are defined to be applied on demand over different components. Chameleon makes all this work simple and straight forward for you.

### Write the Test

Nevertheless, let’s start by the beginning. Our first adaptive extension not need to be very complex just representative of the framework power. Just as a naive example let’s start by defining a regular extension adding a couple of greeting methods into the body of the target object. So, create the `start.js` file and include the following code.


```Javascript
import { Inspect   } from '../lib/origami.chameleon.js'
import { Extension } from '../lib/origami.chameleon.js'

@Extension
class Greetings {

  constructor (core) {
    this.core = core
  }

  install () {
    this.core.hello = function () { console.log ('Hi!')  }
    this.core.bye   = function () { console.log ('Bye!') }
  }

  uninstall () {
    delete this.core.hello
    delete this.core.bye
  }

}

let x = {}
let y = {}

Inspect (x).extensions.install (Greetings)
Inspect (y).extensions.install (Greetings)

x.hello ()
y.bye ()
```

Congratulations! You have created your first adaptive extension. Do not worry if you don't catch all details in this specification. Simply observe as a regular extension in Chameleon is a simple class conveniently decorated including two installation and uninstallation methods to indicate how a target component must be transformed.

### Run The Test

Right now, it is the moment to run the test. Open an OS terminal and move to the root path of your project. Firstly, you need to install all the dependencies required by Babel. Then, the project must be built and finally it must be served in a static http server. If you have not any server installed on your PC you can download `http-server` package from NPM. When you have finished, open the browser in the proper port and open dev tools to see the results. Just type these commands.

```
test $ npm i

   (the project is installed)

test $ npm -run build

  (the project is built)

test $ npm i -g http-server

  (the http-server package is installed. Execute only once)

test $ http-server .

  (server listening on http://localhost:8080)
```

## Next Steps

This is only the beginning. With the Chameleon framework you will be able to define complex and power adaptive architectures where transformation logic lives as reusable extensions to be applied when needed. Go to the previous page and found new paths to learn about Chameleon possibilities.  

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Start:Overview" class="control previous"></a>
    <a href="doc.html#Start:Download" class="control next"></a>
  </div>
</div>
