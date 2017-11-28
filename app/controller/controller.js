module.exports.hello_world = function(app, req, res) {
    
    // app(express) ./app/service/service.js function service_hello_world
    res.send(app.app.service.service.service_hello_world('Hello World'));
}