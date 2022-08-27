import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Area from './Area'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'short_name' })
  public shortName: string

  @column({ columnName: 'tla' })
  public tla: string

  @column({ columnName: 'address' })
  public address: string

  @column({ columnName: 'website' })
  public website: string

  @column({ columnName: 'founded' })
  public founded: string

  @column({ columnName: 'club_colors' })
  public clubColors: string

  @column({ columnName: 'venue' })
  public venue: string

  @column({ columnName: 'area_id' })
  public areaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Area)
  public area: HasOne<typeof Area>
}
