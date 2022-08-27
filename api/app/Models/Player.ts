import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Team from './Team'

export default class Player extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'first_name' })
  public firstName: string

  @column({ columnName: 'last_name' })
  public lastName: string

  @column({ columnName: 'date_of_birth' })
  public dateOfBirth: Date | string

  @column({ columnName: 'nationality' })
  public nationality: string

  @column({ columnName: 'position' })
  public position: string

  @column({ columnName: 'shirt_number' })
  public shirtNumber: string

  @column({ columnName: 'last_updated' })
  public lastUpdated: DateTime | string

  @column({ columnName: 'team_id' })
  public teamId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Team)
  public team: HasOne<typeof Team>
}
