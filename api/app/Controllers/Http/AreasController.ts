import Area from 'App/Models/Area'

export default class AreasController {
  public async index() {
    let areas = await Area.query().orderBy('name')
    return areas
  }

  public async getById({ params }) {
    let area = await Area.query().where('id', params.id)
    return area
  }
}
