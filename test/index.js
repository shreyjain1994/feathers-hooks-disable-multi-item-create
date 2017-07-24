var feathers = require('feathers');
var hooks = require('feathers-hooks');
var memory = require('feathers-memory');
var disableMultiItemCreate = require('../index');

var app = feathers();
app.configure(hooks());
app.use('/foo', memory());
var service = app.service('foo');
service.hooks({
    before: {
        create: [disableMultiItemCreate()]
    }
});

it('should allow service to create when only creating 1 resource', function (done) {
    var resource = {foo: 'foo'};
    service.create(resource)
        .then(function () {
            done();
        })
        .catch(function (err) {
            done(new Error('Error was raised despite only creating 1 resource.'));
        })
});

it('should raise an error when trying to create more than 1 resource', function (done) {
    var resources = [{foo: 'foo'}, {foo: 'bar'}];
    service.create(resources)
        .then(function () {
            done(new Error('Error was not raised when trying to create more than 1 resource.'));
        })
        .catch(function (err) {
            done();
        })
});