# Feathers Hook - Disable Multi Item Create

A feathersjs hook that prevents creating multiple resources
in a single `create` call.

## Installation

    npm install feathers-hooks-disable-multi-item-create

## Usage

```javascript
var disableMultiItemCreate = require('feathers-hooks-disable-multi-item-create');

var hooks = {
    before: {
        create:[disableMultiItemCreate()]
    }
}
```

## License

MIT