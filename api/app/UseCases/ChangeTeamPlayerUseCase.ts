import Player from 'App/Models/Player'
import TeamsPlayer from 'App/Models/TeamsPlayer'

export default class ChangeTeamPlayerUseCase {
  static async setNewTeamPlayer(playerId: number, newTeamId: number) {
    const player = await Player.findOrFail(playerId)

    const teamsPlayer = new TeamsPlayer()

    teamsPlayer.teamId = player.teamId
    teamsPlayer.playerId = player.id

    await teamsPlayer.save()

    player.teamId = newTeamId

    await player.save()
  }
}
