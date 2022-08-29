import axios from 'axios'
import Team from 'App/Models/Team'
import Player from 'App/Models/Player'

export default class ImportLeagueUseCase {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static async getData(code: any) {
    await axios
      .get('http://api.football-data.org/v4/competitions/' + code + '/teams', {
        headers: {
          'X-Auth-Token': '2e47cfface8f4eb3b69acb49fea88213',
        },
      })
      .then(async function (response) {
        // eslint-disable-next-line no-array-constructor
        let listTeams = new Array()
        // eslint-disable-next-line no-array-constructor
        let listPlayers = new Array()

        response.data.teams.forEach((team) => {
          let objectTeam = {
            id: team.id,
            name: team.name,
            shortName: team.shortName,
            tla: team.tla,
            crest: team.crest,
            website: team.website,
            founded: team.founded,
            clubColors: team.clubColors,
            venue: team.venue,
            areaId: team.area.id,
          }

          listTeams.push(objectTeam)

          team.squad.forEach((squad) => {
            let fullName = squad.name.split(' ')

            let objectSquad = {
              id: squad.id,
              name: squad.name,
              first_name: fullName[0],
              last_name: fullName[1],
              date_of_birth: squad.dateOfBirth,
              nationality: squad.nationality,
              position: squad.position,
              shirt_number: Math.floor(Math.random() * (99 - 1) + 1),
              team_id: team.id,
            }
            listPlayers.push(objectSquad)
          })
        })

        await Team.fetchOrCreateMany('id', listTeams)
        await Player.fetchOrCreateMany('id', listPlayers)
      })
      .catch(function (error) {
        console.log('Error response: ' + error)
      })
  }
}
