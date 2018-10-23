 module.exports.formulario_inclusao_noticia=function(application,req,res){
    res.render('admin/form_add_noticia',{ validacao: {} , noticia : {} } );
}
module.exports.noticias_salvar = function(application,req,res){

    var noticia = req.body;

        req.assert('titulo','Titulo obrigadorio').notEmpty();
        req.assert('resumo','Resumo obrigatorio').len(10,100);
        req.assert('autor_nome','Autor Obrigatorio').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Campo obrigatorio').notEmpty();
        var erros = req.validationErrors();
            //console.log(erros);
        if(erros){ 
            res.render('admin/form_add_noticia', { noticia : noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDao(connection);

        noticiasModel.salvarNoticia(noticia,  function(error, result){
            res.redirect('/noticias');
        });
}




