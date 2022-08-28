import ImportLeagueUseCase from 'App/UseCases/ImportLeagueUseCase'

export default class ImportLeaguesController {

  constructor(private importLeagueUseCase: ImportLeagueUseCase) {}

  importLeague({ params }) {

    return this.importLeagueUseCase.getData( params.code )
  }
}

