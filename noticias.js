var http= require('http');
 var server =http.createServer(function(req,resp){
     var categoria=req.url;
     if(categoria=='/tecnologia'){

    resp.end("<html><body>Portal de tecnologia</body></html>");
    }else if(categoria=='/moda'){

    resp.end("<html><body>Portal de moda</body></html>");
    

    }else{
        resp.end("<html><body>Portal de Noticias</body></html>");
    }

}).listen(3005);