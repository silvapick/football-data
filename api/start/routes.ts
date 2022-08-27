/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/areas', 'AreasController.index')

Route.get('/area/:id', 'AreasController.getById')

Route.get('/competitions', 'CompetitionsController.index')

Route.get('/competition/:id', 'CompetitionsController.getById')

Route.get('/competitions/area/:areaId', 'CompetitionsController.getByAreaId')

Route.get('/teams', 'TeamsController.index')

Route.get('/team/:id', 'TeamsController.getById')

Route.get('/teams/area/:areaId', 'TeamsController.getByAreaId')

Route.get('/players', 'PlayersController.index')

Route.get('/player/:id', 'PlayersController.getById')

Route.get('/players/team/:teamId', 'PlayersController.getByTeamId')

Route.get('/importLeague/:code/teams', 'ImportLeaguesController.imporLeague')

Route.get('*', async () => {
  return { error: '404' }
})
