const builder = require('./lib/build');
const path = require('path');


builder.build({rootFolder: path.resolve('example'), srcFolder : path.resolve('example', 'src', 'lib')});
