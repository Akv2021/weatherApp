var http = require('http'),
url = 'http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&APPID=eebf636871d49e82db4e65a23ef4e5f9&units=metric';

var server = http.createServer(function(req,res){
    var request = require('request');
    request(url,function(err,resp,body){
    // console.log(`CLG : body`, body);
        var data = JSON.parse(body);
        var op = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <table style="border: 1;">
                <tr>
                    <td>City Name</td>
                    <td>Temperature</td>
                    <td>Sunset Time</td>
                </tr>
                <tr>
                    <td>${data.name}</td>
                    <td>${data.main.temp}</td>
                    <td>${data.sys.sunset}</td>
                </tr>
            </table>
        </body>
        </html>`;
        res.write(op);
        // res.write('Hi');
        res.end();

    })
}).listen(8081);
