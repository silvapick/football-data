import ImportLeagueUseCase from 'App/UseCases/ImportLeagueUseCase'

export default class ImportLeaguesController {

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  importLeague({ params }) {
    return ImportLeagueUseCase.getData(params.code)
  }
}
