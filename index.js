const builder = require('./builder');
const path = require('path');

builder.build({ rootFolder : path.join(__dirname, 'example')});
