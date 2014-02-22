# aquire

Require application module. A build module encouragement tool as a step before your module becomes a full npm package

Node great and having functional units of code in modules that can be pulled in via require() is nice. However during the time when code is being built in your application and your lovely little modules of code it can be hassle to ```var mymodule = require('./somepath/mymodule')```. Also there's the overhead in setting up the git repo, npm package, etc. What if you could build you applicaton and then come back and then put all those nifty nuggets of functionality into formal packages and easily switch to code to using formally packaged versions? Enter ```aquire```

### install

```npm install aquire --save```

### usage

Put your modules in the ```app_modules``` folder, in the same folder as your ```node_modules```. Ex:

```
app_modules/
  nifty.js
  other/
    index.js
  profound/
    index.js
    package.json
    node_modules/
node_modules/
```

Then ```require('aquire')``` and use it to get your application module.


```js
var aquire  = require('aquire');
var mynifty = aquire('nifty') // nifty.js or nifty/index.js or as defined in nifty/package.json
var myother = aquire('other')
```

Later when you've packaged up your functionality and published it via ```npm publish``` and ```npm install nifty --save``` to add the package to your applcation. You simple change the call to ```aquire('nifty')``` to ```require('nifty')```

```js
var aquire  = require('aquire');
var mynifty = require('nifty') // nifty is now a formal package
var myother = aquire('other')
```

### optional path

If you prefer another path for your application modules other than ```app_modules``` you can set it via the second parameter. Once passed, the default will remain changed until you change it again.

Example with your modules in ```other_path_modules```:

```
other_path_modules/
  nifty.js
  other/
    index.js
  profound/
    index.js
    package.json
    node_modules/
node_modules/
```

```js
var aquire  = require('aquire');
var mynifty = require('nifty', 'other_path_modules') // change the default path on first use
var myother = aquire('other')
```

### License MIT
