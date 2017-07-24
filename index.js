var checkContext = require('feathers-hooks-common').checkContext;
var errors = require('feathers-errors');
var stringf = require('util').format;

module.exports = function () {
    return function (context) {
        checkContext(context, 'before', ['create'], 'disableMultiItemCreate');

        if (Array.isArray(context.data)) {
            throw new errors.BadRequest(
                stringf("Multi-record creates are not allowed for %s. (disableMultiItemCreate)",
                    context.path
                )
            )
        }
    }
};