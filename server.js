/**
 * Created by Branden on 2016-09-23.
 */
// create variables that uses the npm connect package
var connect = require ('connect');
var url = require('url');

// create a connect object
var server = connect();

// a function to add, subtract, multiply, divide based on the url
var calculator = function (req,res,next) {
    // getting the query string variables
    var qs = url.parse(req.url, true).query;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    // an if, else statement to determine the mathematical operator
    var method = qs.method;
    if (method == "add"){
        var result = x+y;
        method = "+";
    }
    else if (method == "divide"){
        var result = x/y;
        method = "/";
    }
    else if(method == "subtract"){
        var result = x-y;
        method = "-"
    }
    else if(method == "multiply"){
        var result = x*y;
        method = "*";
    }
    else {
        // show an error if an invalid function is given
        res.end("<p>Please Input the right data for the calculator to work.<br> The method needs to be either multiply, divide, add or subtract.<p>");
    }
    // output the result
    res.end("<p>" +"Url result:" +" "+x+" "+method+" "+ y +" = "+ result + "</p>");
};

// start the server on port 3000
server.listen(3000);
// use the calculator function
server.use(calculator);
// display a message that the server is running
console.log('connect running port 3000');