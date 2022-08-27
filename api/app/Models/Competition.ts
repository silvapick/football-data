import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Area from './Area'

export default class Competition extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'code' })
  public code: string | null

  @column({ columnName: 'emblem_url' })
  public emblemUrl: string | null

  @column({ columnName: 'plan' })
  public plan: string | null

  @column({ columnName: 'area_id' })
  public areaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Area)
  public area: HasOne<typeof Area>

}
