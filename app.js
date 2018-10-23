var app= require('./config/server')




//var rotaNoticias=require('./app/routes/noticias');
//rotaNoticias(app);
//passando parametro direto para executar a funcao
//var rotaHome = require('./app/routes/home')(app);

//var rotaAddnoticia=require('./app/routes/formulario_inclusao_noticia');
//rotaAddnoticia(app);
var porta = process.env.PORT ||3000;

app.listen(porta, function(){
    console.log("Servidor online");
    console.log(porta);
});