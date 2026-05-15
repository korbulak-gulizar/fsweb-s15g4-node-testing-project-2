exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id"); // otomatik artan id
    table.string("name").notNullable(); // item adı
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
