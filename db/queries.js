const database = require("./knex.js");

module.exports = {
    list(){
      return database('template')
    },
    read(id){
      return database('template').select().where('id', id).first()
    },
    create(item){
      return database('template')
      .insert(item)
      .returning('*')
      .then(record => record[0])
    },
    update(id, item){
      return database('template')
     .update(item)
     .where("id", id)
     .returning("*")
     .then(item => item[0])
    },
    delete(id){
      return database('template').delete().where('id', id)
    }
};
