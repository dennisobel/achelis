var express  = require('express');
var routes = require("./routes/routes.js");
var app      = express();
var bodyParser = require("body-parser");
var cors = require('cors');
var logger = require('morgan');
var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
//connect to mongo using mongoose

var databaseConfig = require('./config/database');

// mongoose.connect(databaseConfig.url,{useNewUrlParser: true});
// process.env.HOST = '169.239.252.209'
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

app.use(cors());

app.use(function(req,res,next){
    // var allowedOrigins = [
    //   "http://localhost:8100/",
    //   "http://localhost:3000",
    //   "https://achelisserver.herokuapp.com/",
    //   "https://achelisserver.herokuapp.com/profile",
    //   'https://achelisserver.herokuapp.com/buyspare',
    //   'https://achelisserver.herokuapp.com/bookservice',
    //   'https://achelisserver.herokuapp.com/rental',
    //   'https://s3.eu-west-2.amazonaws.com/achelis/index.html',
    //   'https://s3.eu-west-2.amazonaws.com/achelis/',
    //   'https://s3.eu-west-2.amazonaws.com',
    //   '*'
    // ];
    // var origin = req.headers.origin;
    // console.log(req.headers)
    // if(allowedOrigins.indexOf(origin) > -1){
    //     res.setHeader("Access-Control-Allow-Origin", origin);
    // }     
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    console.log(req.headers.origin)
    return next();
    
    return next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

routes(app);

// export default app;
// module.exports.app = app
app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
