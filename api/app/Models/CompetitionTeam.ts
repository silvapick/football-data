import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class CompetitionTeam extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'competition_id' })
  public competitionId: number

  @column({ columnName: 'area_id' })
  public areaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => CompetitionTeam)
  public competitionTeam: HasOne<typeof CompetitionTeam>
}
