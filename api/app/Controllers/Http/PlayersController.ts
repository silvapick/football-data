// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Player from 'App/Models/Player'
import ChangeTeamPlayerUseCase from 'App/UseCases/ChangeTeamPlayerUseCase'

export default class PlayersController {
  public async index() {
    let players = await Player.query().orderBy('name')
    return players
  }

  public async getById({ params }) {
    let player = await Player.query().where('id', params.id)
    return player
  }

  public async getByTeamId({ params }) {
    let playersTeam = await Player.query().preload('team', (teamQuery) => {
      teamQuery.where('id', params.teamId)
    })
    return playersTeam
  }

  public async changeTeamPlayer({ params }) {
    let player = ChangeTeamPlayerUseCase.setNewTeamPlayer(params.playerId, params.teamId)
    return player
  }
}
