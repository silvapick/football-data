// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'

export default class TeamsController {
  public async index() {
    let teams = await Team.query().orderBy('name')
    return teams
  }

  public async getById({ params }) {
    let team = await Team.query().where('id', params.id)
    return team
  }

  public async getByAreaId({ params }) {
    let teamsArea = await Team.query().preload('area', (areaQuery) => {
      areaQuery.where('id', params.areaId)
    })
    return teamsArea
  }
}
