import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Team from './Team'

export default class Area extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'country_code' })
  public countryCode: string

  @column({ columnName: 'flag' })
  public flag: string | null

  @column({ columnName: 'parent_area_id' })
  public parentAreaId: number | null

  @column({ columnName: 'parent_area' })
  public parentArea: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Team)
  public team: HasMany<typeof Team>
}
