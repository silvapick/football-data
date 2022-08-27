import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'competitions_teams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('competition_id')
        .unsigned()
        .notNullable()
        .references('competitions.id')
        .onDelete('CASCADE')
      table
        .integer('team_id')
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
