

var wget = require('wget-improved');

var command = process.argv[2];
var secret = process.argv[3];
var snack = process.argv[4];

if (command == null) {
  console.log("************************************************************************************************************");
  console.log("Hello - I hope you're hungry!");
  console.log("");
  console.log("use node client.js -h for instructions on how to enjoy your snacks.");
  console.log("");
}

if (command == '-h') {
  console.log("To eat a snack, enter the flag -e, your secret key and snack.")
  console.log("For example...")
  console.log("node client.js -e 1234 mysnack")
  console.log("------------------------------");
  console.log("To regurgitate a snack, enter the flag -r, your secret key and we'll return your snack.")
  console.log("For example...")
  console.log("node client.js -r 1234 ")
  console.log("------------------------------");
  console.log("To regurgitate every snack, enter the flag -r, the secret key 1187 and we'll return all snacks.")
  console.log("For example...")
  console.log("node client.js -r 1187")
  console.log("------------------------------");
  console.log("If you're feeling sick, enter the flag -d and your secret. We'll rid ourselves of the snack.")
  console.log("For example...")
  console.log("node client.js -d 1234")
  console.log("Enjoy your snack!")
  console.log("************************************************************************************************************");
}

if (command == '-e') {
  const options = {
      protocol: 'http',
      host: 'localhost',
      path: '/api/snacks/new/' + snack,
      headers: {'client-secret': + secret},
      method: 'GET'
  };

  let req = wget.request(options, function(res) {
      let content = '';
      if (res.statusCode === 200) {
          res.on('error', function(err) {
              console.log(err);
          });
          res.on('data', function(chunk) {
              content += chunk;
          });
          res.on('end', function() {
              console.log(content);
          });
      } else {
          console.log('Server respond ' + res.statusCode);
      }
  });

  req.end();
  req.on('error', function(err) {
      console.log(err);
  });
}

if (command == '-r') {
  var path = '/api/snacks/find'

  if (secret==1187) {
    path = '/api/snacks/findall'
  }
  const options = {
      protocol: 'http',
      host: 'localhost',
      path: path,
      headers: {'client-secret': secret},
      method: 'GET'
  };

  let req = wget.request(options, function(res) {
      let content = '';
      if (res.statusCode === 200) {
          res.on('error', function(err) {
              console.log(err);
          });
          res.on('data', function(chunk) {
              content += chunk;
          });
          res.on('end', function() {
              console.log(content);
          });
      } else {
          console.log('Server respond ' + res.statusCode);
      }
  });

  req.end();
  req.on('error', function(err) {
      console.log(err);
  });
}

if (command == '-d') {
  const options = {
      protocol: 'http',
      host: 'localhost',
      path: '/api/snacks/delete',
      headers: {'client-secret': secret},
      method: 'GET'
  };

  let req = wget.request(options, function(res) {
      let content = '';
      if (res.statusCode === 200) {
          res.on('error', function(err) {
              console.log(err);
          });
          res.on('data', function(chunk) {
              content += chunk;
          });
          res.on('end', function() {
              console.log(content);
          });
      } else {
          console.log('Server respond ' + res.statusCode);
      }
  });

  req.end();
  req.on('error', function(err) {
      console.log(err);
  });

}
