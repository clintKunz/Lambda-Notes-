
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table => {
        table.increments();
        table
          .integer('user_id')
          .notNullable()
          .references('id')
          .inTable('users');
        table
          .string('note_title', 128)
          .notNullable();
        table
          .text('note_content')
          .notNullable();
        table
          .boolean('edited')
          .defaultTo(0);
        table
          .timestamp('timestamp')
          .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
