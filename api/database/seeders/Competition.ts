import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Competition from 'App/Models/Competition'

export default class extends BaseSeeder {
  public async run() {
    await Competition.createMany([
      {
        id: 2162,
        name: 'Serie C - Girone A',
        code: 'ISCA',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2114,
      },
      {
        id: 2160,
        name: 'Regionalliga Südwest',
        code: 'RSW',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2088,
      },
      {
        id: 2159,
        name: 'Regionalliga Bayern',
        code: 'RBY',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2088,
      },
      {
        id: 2158,
        name: 'Playoffs 1/2',
        code: 'IPL',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2114,
      },
      {
        id: 2157,
        name: 'Supercup',
        code: 'ESC',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2077,
      },
      {
        id: 2156,
        name: 'Relegation',
        code: 'BLREL',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2088,
      },
      {
        id: 2154,
        name: 'UEFA Conference League',
        code: 'UCL',
        emblemUrl: 'https://crests.football-data.org/UCL.png',
        plan: 'TIER_FOUR',
        areaId: 2077,
      },
      {
        id: 2150,
        name: 'Souper Kap Ellados',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2093,
      },
      {
        id: 2149,
        name: 'Copa Liga Profesional',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2011,
      },
      {
        id: 2146,
        name: 'UEFA Europa League',
        code: 'EL',
        emblemUrl: 'https://crests.football-data.org/EL.png',
        plan: 'TIER_TWO',
        areaId: 2077,
      },
      {
        id: 2144,
        name: 'Playoffs 2/3',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2081,
      },
      {
        id: 2143,
        name: 'Playoffs 1/2',
        code: 'FPL',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2081,
      },
      {
        id: 2142,
        name: 'Ligue 2',
        code: 'FL2',
        emblemUrl: 'https://crests.football-data.org/FL2.png',
        plan: 'TIER_TWO',
        areaId: 2081,
      },
      {
        id: 2141,
        name: 'Euro League - Playoff',
        code: 'DELP',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2065,
      },
      {
        id: 2140,
        name: '3. Bundesliga',
        code: 'BL3',
        emblemUrl: 'https://crests.football-data.org/BL3.png',
        plan: 'TIER_THREE',
        areaId: 2088,
      },
      {
        id: 2139,
        name: 'Football League Cup',
        code: 'FLC',
        emblemUrl: 'https://crests.football-data.org/FLC.png',
        plan: 'TIER_THREE',
        areaId: 2072,
      },
      {
        id: 2138,
        name: 'Coupe de France',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2081,
      },
      {
        id: 2136,
        name: 'Trophée des Champions',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2081,
      },
      {
        id: 2135,
        name: 'Coupe de la Ligue',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2081,
      },
      {
        id: 2134,
        name: 'DFL Super Cup',
        code: 'GSC',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2088,
      },
      {
        id: 2133,
        name: 'Frauen Bundesliga',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2088,
      },
      {
        id: 2132,
        name: 'Super League',
        code: 'GSL',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2093,
      },
      {
        id: 2131,
        name: 'Greek Cup',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2093,
      },
      {
        id: 2130,
        name: 'Magyar Kupa',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2106,
      },
      {
        id: 2129,
        name: 'Regionalliga',
        code: 'REG',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2088,
      },
      {
        id: 2128,
        name: 'NB I',
        code: 'HNB',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2106,
      },
      {
        id: 2127,
        name: 'Úrvalsdeild',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2107,
      },
      {
        id: 2124,
        name: 'Supercoppa',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2114,
      },
      {
        id: 2123,
        name: 'Serie C',
        code: 'ISC',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2114,
      },
      {
        id: 2122,
        name: 'Coppa Italia',
        code: 'CIT',
        emblemUrl: 'https://crests.football-data.org/CIT.png',
        plan: 'TIER_THREE',
        areaId: 2114,
      },
      {
        id: 2121,
        name: 'Serie B',
        code: 'SB',
        emblemUrl: 'https://crests.football-data.org/SB.png',
        plan: 'TIER_TWO',
        areaId: 2114,
      },
      {
        id: 2059,
        name: 'Suomen Cup',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2080,
      },
      {
        id: 2058,
        name: "UEFA Women's EURO",
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2077,
      },
      {
        id: 2057,
        name: 'Meistriliiga',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2075,
      },
      {
        id: 2056,
        name: 'FA Community Shield',
        code: 'COM',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2072,
      },
      {
        id: 2055,
        name: 'FA Cup',
        code: 'FAC',
        emblemUrl: 'https://crests.football-data.org/FA_CUP.png',
        plan: 'TIER_TWO',
        areaId: 2072,
      },
      {
        id: 2054,
        name: 'League Two',
        code: 'EL2',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2072,
      },
      {
        id: 2053,
        name: 'National League',
        code: 'ENL',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2072,
      },
      {
        id: 2051,
        name: 'DBU Pokalen',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2065,
      },
      {
        id: 2050,
        name: 'Superliga',
        code: 'DSU',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2065,
      },
      {
        id: 2049,
        name: 'Synot Liga',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2062,
      },
      {
        id: 2047,
        name: 'Prva Liga',
        code: 'PRVA',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2058,
      },
      {
        id: 2040,
        name: 'A PFG',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2035,
      },
      {
        id: 2039,
        name: 'Kupa na Bulgarija',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2035,
      },
      {
        id: 2038,
        name: 'Série D',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2032,
      },
      {
        id: 2037,
        name: 'Copa do Brasil',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2032,
      },
      {
        id: 2036,
        name: 'Série C',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2032,
      },
      {
        id: 2035,
        name: 'Premier Liga',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2030,
      },
      {
        id: 2033,
        name: 'Division 1B',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2023,
      },
      {
        id: 2032,
        name: 'Playoffs',
        code: 'BJPP',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2023,
      },
      {
        id: 2031,
        name: 'Veikkausliiga',
        code: 'VEI',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2080,
      },
      {
        id: 2030,
        name: 'League One',
        code: 'EL1',
        emblemUrl: '',
        plan: 'TIER_TWO',
        areaId: 2072,
      },
      {
        id: 2029,
        name: 'Campeonato Brasileiro Série B',
        code: 'BSB',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2032,
      },
      {
        id: 2028,
        name: 'Coupe de Belgique',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2023,
      },
      {
        id: 2027,
        name: 'ÖFB Cup',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2016,
      },
      {
        id: 2025,
        name: 'Supercopa Argentina',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2011,
      },
      {
        id: 2024,
        name: 'Liga Profesional',
        code: 'ASL',
        emblemUrl: 'https://crests.football-data.org/LPDF.svg',
        plan: 'TIER_TWO',
        areaId: 2011,
      },
      {
        id: 2023,
        name: 'Primera B Nacional',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2011,
      },
      {
        id: 2022,
        name: 'Playoffs 1/2',
        code: 'APL',
        emblemUrl: '',
        plan: 'TIER_TWO',
        areaId: 2016,
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
        id: 2020,
        name: 'Erste Liga',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2016,
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
        id: 2018,
        name: 'European Championship',
        code: 'EC',
        emblemUrl: 'https://crests.football-data.org/EUR.svg',
        plan: 'TIER_ONE',
        areaId: 2077,
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
        id: 2015,
        name: 'Ligue 1',
        code: 'FL1',
        emblemUrl: 'https://crests.football-data.org/FL1.png',
        plan: 'TIER_ONE',
        areaId: 2081,
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
        id: 2012,
        name: 'Bundesliga',
        code: 'ABL',
        emblemUrl: '',
        plan: 'TIER_THREE',
        areaId: 2016,
      },
      {
        id: 2011,
        name: 'DFB-Pokal',
        code: 'DFB',
        emblemUrl: 'https://crests.football-data.org/DFB_CUP.png',
        plan: 'TIER_TWO',
        areaId: 2088,
      },
      {
        id: 2010,
        name: 'Supercoupe de Belgique',
        code: null,
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2023,
      },
      {
        id: 2009,
        name: 'Jupiler Pro League',
        code: 'BJL',
        emblemUrl: '',
        plan: 'TIER_TWO',
        areaId: 2023,
      },
      {
        id: 2007,
        name: 'WC Qualification UEFA',
        code: 'QUFA',
        emblemUrl: '',
        plan: 'TIER_FOUR',
        areaId: 2077,
      },
      {
        id: 2004,
        name: '2. Bundesliga',
        code: 'BL2',
        emblemUrl: 'https://crests.football-data.org/BL2.png',
        plan: 'TIER_TWO',
        areaId: 2088,
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
        id: 2001,
        name: 'UEFA Champions League',
        code: 'CL',
        emblemUrl: 'https://crests.football-data.org/CL.png',
        plan: 'TIER_ONE',
        areaId: 2077,
      },
    ])
  }
}
