
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.text('carName', 128);
    table.integer('price')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(['carName', 'price']);
};
