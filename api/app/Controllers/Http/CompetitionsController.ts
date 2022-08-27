// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Competition from 'App/Models/Competition'

export default class CompetitionsController {
  public async index() {
    let competitions = await Competition.query().orderBy('name')
    return competitions
  }

  public async getById({ params }) {
    const competition = await Competition.query().where('id', params.id)
    return competition
  }

  public async getByAreaId({ params }) {
    let competitionsArea = await Competition.query().preload('area', (areaQuery) => {
      areaQuery.where('id', params.areaId)
    })
    return competitionsArea
  }
}
