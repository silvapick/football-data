import axios from 'axios'

export default class ImportLeagueUseCase {
  constructor() {}

  public async getData(code: string) {
    const response = await axios
      .get('http://api.football-data.org/v4/competitions/' + code + '/teams', {
        headers: {
          'X-Auth-Token': '2e47cfface8f4eb3b69acb49fea88213',
        },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log('Error response: ' + error)
      })
      .then(function (response) {
        console.log(response)
      })

    return response
  }
}
