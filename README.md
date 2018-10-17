# Itility node utility functions

Utility functions for things you need all the time in node.

### INSTALL
```npm i itility``` or ```yarn add itility```

### FUNCTIONS

#### Environment mode
Get strings based on the NODE_ENV you are in.
```javascript
const { mode } = require('itility')

// development: mongodb://localhost:27017
// production: mongodb://mongo:27017
const url = mode('mongodb://*:27017', 'localhost', 'mongo')

// Same result, different method
const url = mode('*', 'mongodb://localhost:27017', 'mongodb://mongo:27017')

// Same result, shared port
const url = mode('*:27017', 'mongodb://localhost', 'mongodb://mongo')

// staging: mongodb://staging:27017
const url = mode('mongodb://*:27017', 'localhost', 'staging', 'mongo')
```

MIT licensed. Enjoy!
