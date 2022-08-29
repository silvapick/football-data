import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Competition from 'App/Models/Competition'

export default class extends BaseSeeder {
  public async run() {
    await Competition.createMany([
      {
        id: 2007,
        name: 'WC Qualification UEFA',
        code: 'QUFA',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2077,
      },
      {
        id: 2001,
        name: 'UEFA Champions League',
        code: 'CL',
        emblemUrl: 'https://crests.football-data.org/CL.png',
        plan: 'TIER_ONE',
        areaId: 2077,
      },
      {
        id: 2002,
        name: 'Bundesliga',
        code: 'BL1',
        emblemUrl: 'https://crests.football-data.org/BL1.png',
        plan: 'TIER_ONE',
        areaId: 2088,
      },
      {
        id: 2003,
        name: 'Eredivisie',
        code: 'DED',
        emblemUrl: 'https://crests.football-data.org/ED.png',
        plan: 'TIER_ONE',
        areaId: 2163,
      },
      {
        id: 2013,
        name: 'Campeonato Brasileiro Série A',
        code: 'BSA',
        emblemUrl: 'https://crests.football-data.org/764.svg',
        plan: 'TIER_ONE',
        areaId: 2032,
      },
      {
        id: 2014,
        name: 'Primera Division',
        code: 'PD',
        emblemUrl: '',
        plan: 'TIER_ONE',
        areaId: 2011,
      },
      {
        id: 2015,
        name: 'Ligue 1',
        code: 'FL1',
        emblemUrl: 'https://crests.football-data.org/FL1.png',
        plan: 'TIER_ONE',
        areaId: 2081,
      },
      {
        id: 2016,
        name: 'Championship',
        code: 'ELC',
        emblemUrl: 'https://crests.football-data.org/ELC.png',
        plan: 'TIER_ONE',
        areaId: 2072,
      },
      {
        id: 2017,
        name: 'Primeira Liga',
        code: 'PPL',
        emblemUrl: 'https://crests.football-data.org/PPL.png',
        plan: 'TIER_ONE',
        areaId: 2187,
      },
      {
        id: 2018,
        name: 'European Championship',
        code: 'EC',
        emblemUrl: 'https://crests.football-data.org/EUR.svg',
        plan: 'TIER_ONE',
        areaId: 2077,
      },
      {
        id: 2019,
        name: 'Serie A',
        code: 'SA',
        emblemUrl: 'https://crests.football-data.org/SA.png',
        plan: 'TIER_ONE',
        areaId: 2114,
      },
      {
        id: 2021,
        name: 'Premier League',
        code: 'PL',
        emblemUrl: 'https://crests.football-data.org/PL.png',
        plan: 'TIER_ONE',
        areaId: 2072,
      },
      {
        id: 2152,
        name: 'Copa Libertadores',
        code: 'CLI',
        emblemUrl: 'https://crests.football-data.org/CLI.svg',
        plan: 'TIER_ONE',
        areaId: 2114,
      },
    ])
  }
}
