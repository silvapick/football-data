import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'players'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('first_name')
      table.string('last_name')
      table.date('date_of_birth')
      table.string('nationality')
      table.string('position')
      table.string('shirt_number')
      table.dateTime('last_updated')
      table.integer('team_id')
        .unsigned()
        .notNullable()
        .references('teams.id')
        .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
