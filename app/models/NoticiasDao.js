function NoticiasDao(connection){
this._connection = connection;

}

NoticiasDao.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_criancao desc', callback);
}
NoticiasDao.prototype.getNoticia = function(id_noticia,callback){
   
    console.log(id_noticia.id_noticia);

   this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}
NoticiasDao.prototype.salvarNoticia = function(noticia, callback){
   this._connection.query('INSERT INTO noticias SET ? ', noticia, callback);  
}

NoticiasDao.prototype.get5UltimasNoticias=function(callback){
    this._connection.query('select * from  noticias order by data_criancao desc limit 5',callback);
}
NoticiasDao.prototype.form_editar_noticia = function(noticia,callback){
    this._connection.query('update noticias  set ?  where id_noticia =  '+noticia.id_noticia,callback);
}

module.exports = function(){

    return NoticiasDao;

}