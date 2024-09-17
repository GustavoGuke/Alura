// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// fetch("http://192.168.3.210/login.fcgi", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     login: 'admin',
//     password: 'admin'
//   })
// })
// .then(response => response.json())
// .then(data => {
//   const session = data.session;
//   console.log("acessou")
// })
// .catch(error => {
//   console.error('Erro ao fazer a solicitação:', error);
// });

const https = require('node:http')
const data = JSON.stringify({
    login: 'admin',
    password: 'admin'
})
const options = {
  host: 'http://192.168.3.210/login.fcgi',
  port: 443,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    process.stdout.write(d)
  })
})
req.on('error', error => {
  console.error(error)
})
req.write(data)
req.end()