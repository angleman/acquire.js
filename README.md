# aquire

Require application module. A build module encouragement tool as a step before your module becomes a full npm package

Node is great and having functional units of code in modules that can be pulled in via require() is really nice. However, during the time when your application code is being built, accessing your lovely little modules isn't very clean, ex: ```var mymodule = require('./somepath/mymodule')```. More importantly there's the overhead in setting up the repo, npm package, etc; when, you really need to get a project out the door. What if you could build you applicaton and then come back and then put all those nifty nuggets of functionality into formal packages and easily switch to code to using the newly packaged versions? 

Enter ```aquire```

### Install

```npm install aquire --save```

### Usage

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

### Optional path

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

### Bonus

If you want to easily access data in your ```bower.json```, ```component.json```, ```config.json``` or ```package.json``` files, you can simple ```aquire``` and then use them.

```js
var aquire  = require('aquire');
var myPack  = require('package')
console.log(myPack.name, myPack.version) // nifty 0.1.4
```

### License MIT
