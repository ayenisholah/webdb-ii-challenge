
exports.up = function(knex) {
  return knex.schema.alterTable('cars', table => {
    table.text('make', 128);
    table.text('model', 28);
    table.integer('year', 4);
    table.string('VIN', 17).unique();
    
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(['model', 'year', 'VIN']);
  
};
 