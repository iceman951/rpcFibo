var rpc = require('json-rpc2');
var client = rpc.Client.$create(8000,'localhost');
// Call add function on the server
client.call('fibo', 8,
    function (err, result) {
        console.log(result);
    }
);
