import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'teams_players'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('team_id').unsigned().notNullable().references('teams.id').onDelete('cascade')
      table
        .integer('player_id')
        .unsigned()
        .notNullable()
        .references('players.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
