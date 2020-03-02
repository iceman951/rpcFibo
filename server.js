var rpc = require('json-rpc2');
var server = rpc.Server.$create();
function fibo(args, opt, callback) {

    var fibonacci_series = function (n) 
    {
      if (n===1) 
      {
        return [0, 1];
      } 
      else 
      {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    };

    callback(null, fibonacci_series(args));
}

server.expose('fibo', fibo);
server.listen(8000, 'localhost');