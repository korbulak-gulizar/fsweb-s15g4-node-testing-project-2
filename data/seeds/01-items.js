exports.seed = function (knex) {
  return knex("items")
    .truncate()
    .then(function () {
      return knex("items").insert([
        { name: "item1" },
        { name: "item2" },
        { name: "item3" },
      ]);
    });
};
