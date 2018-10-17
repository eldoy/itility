# Itility node utility functions

Utility functions for things you need all the time in node.

### INSTALL
```npm i itility``` or ```yarn add itility```

### FUNCTIONS

```javascript
const itil = require('itility')
```

#### Environment mode
Get strings based on the NODE_ENV you are in.
```javascript
// DBURL will be mongodb://localhost:27017 in development
// and mongodb://mongo:27017 in production
const DBURL = itil.mode('mongodb://*:27017', 'localhost', 'mongo')

// Same result, different method
const DBURL = itil.mode('*', 'mongodb://localhost:27017', 'mongodb://mongo:27017')

// Same result, shared port
const DBURL = itil.mode('*:27017', 'mongodb://localhost', 'mongodb://mongo')
```

MIT licensed. Enjoy!
