var mysql = require('mysql');


var connMysql=  function (){   

       
return  mysql.createConnection({
    host:'localhost', 
    user:'developer',
    password: 'toor',
    database:'portal_noticias'

        });
    }
  
        module.exports= function ()  {
          
            return connMysql;
         }