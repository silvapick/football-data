import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TeamsPlayer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'team_id' })
  public teamId: number

  @column({ columnName: 'player_id' })
  public playerId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
