# HEDGEHOG Twitter Bootstrap theme

## How to work with code
HEDGEHOG theme the also as Bootstrap uses Grunt with convenient methods for working with the framework. It's how we compile our code. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Node.JS
First of all required to install Node.js from <http://nodejs.org>

### Install Grunt
From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root directory, then run `npm install`. npm will look at [package.json] and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

### Grunt commands

####Build - `grunt`
Compilation and prepare distributive/documentation.

####Compile Less - `grunt compile`
Run `grunt compile` to compile the Css from Less and put hedgehog.css and hedgehog.min.css to `/dist/css` folder

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Run documentation locally by Jekyll
1. Install Jekyll - `sudo gem install jekyll`
2. Run command from root of source folder `jekyll serve`. Make sure you run `grunt` command before.
3. # => Now browse to http://0.0.0.0:9001/