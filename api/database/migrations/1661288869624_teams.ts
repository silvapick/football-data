import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'teams'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('short_name').notNullable()
      table.string('tla')
      table.string('crest')
      table.string('address')
      table.string('website')
      table.string('founded')
      table.string('club_colors')
      table.string('venue')
      table
        .integer('area_id').unsigned().notNullable()
        .references('areas.id')
        .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
