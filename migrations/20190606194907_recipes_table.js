exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("dishes", function(tbl) {
        tbl.increments();
        tbl
          .string("dish_name", 128)
          .notNullable()
          .unique();
      })
      .createTable("recipes", function(tbl) {
        tbl.increments();
        tbl
          .string("recipe_name", 128)
          .notNullable()
          .unique();
        tbl
          .integer("dish_id")
          .unsigned()
          .references("id")
          .inTable("dishes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
        .string("instructions", 1000)
        .notNullable();
      })
      .createTable("ingredients", function(tbl) {
        tbl.increments();
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.integer("quantity").notNullable();
      })
      .createTable("recipe_ingredients", function(tbl) {
        tbl.increments();
        tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl
        .string("recipe_name")
        .unsigned()
        .references("name")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl
        .string("ingredient_name")
        .unsigned()
        .references("name")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl
        .integer("ingredient_quantity")
        .unsigned()
        .references("quantity")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      })    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
  };
  