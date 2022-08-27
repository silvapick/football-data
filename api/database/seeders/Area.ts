import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Area.createMany([
      {
        id: 2011,
        name: 'Argentina',
        countryCode: 'ARG',
        flag: 'https://crests.football-data.org/762.png',
        parentAreaId: 2220,
        parentArea: 'South America',
      },
      {
        id: 2012,
        name: 'Armenia',
        countryCode: 'ARM',
        flag: 'https://crests.football-data.org/1970.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2016,
        name: 'Austria',
        countryCode: 'AUT',
        flag: 'https://crests.football-data.org/816.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2023,
        name: 'Belgium',
        countryCode: 'BEL',
        flag: 'https://crests.football-data.org/805.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2030,
        name: 'Bosnia and Herzegovina',
        countryCode: 'BIH',
        flag: 'https://crests.football-data.org/bosnia.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2032,
        name: 'Brazil',
        countryCode: 'BRA',
        flag: 'https://crests.football-data.org/764.svg',
        parentAreaId: 2220,
        parentArea: 'South America',
      },
      {
        id: 2035,
        name: 'Bulgaria',
        countryCode: 'BGR',
        flag: 'https://crests.football-data.org/817.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2058,
        name: 'Croatia',
        countryCode: 'HRV',
        flag: 'https://crests.football-data.org/799.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2062,
        name: 'Czech Republic',
        countryCode: 'CZE',
        flag: 'https://crests.football-data.org/798.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2063,
        name: 'Czechoslovakia',
        countryCode: 'CZS',
        flag: 'https://crests.football-data.org/798.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2065,
        name: 'Denmark',
        countryCode: 'DNK',
        flag: 'https://crests.football-data.org/782.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2072,
        name: 'England',
        countryCode: 'ENG',
        flag: 'https://crests.football-data.org/770.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2075,
        name: 'Estonia',
        countryCode: 'EST',
        flag: 'https://crests.football-data.org/estonia.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2077,
        name: 'Europe',
        countryCode: 'EUR',
        flag: 'https://crests.football-data.org/EUR.svg',
        parentAreaId: 2267,
        parentArea: 'World',
      },
      {
        id: 2080,
        name: 'Finland',
        countryCode: 'FIN',
        flag: 'https://crests.football-data.org/1976.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2081,
        name: 'France',
        countryCode: 'FRA',
        flag: 'https://crests.football-data.org/773.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2088,
        name: 'Germany',
        countryCode: 'DEU',
        flag: 'https://crests.football-data.org/759.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2093,
        name: 'Greece',
        countryCode: 'GRC',
        flag: 'https://crests.football-data.org/775.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2106,
        name: 'Hungary',
        countryCode: 'HUN',
        flag: 'https://crests.football-data.org/827.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2107,
        name: 'Iceland',
        countryCode: 'ISL',
        flag: 'https://crests.football-data.org/iceland.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2113,
        name: 'Israel',
        countryCode: 'ISR',
        flag: 'https://crests.football-data.org/israel.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2114,
        name: 'Italy',
        countryCode: 'ITA',
        flag: 'https://crests.football-data.org/784.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2129,
        name: 'Latvia',
        countryCode: 'LVA',
        flag: 'https://crests.football-data.org/latvia.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2134,
        name: 'Liechtenstein',
        countryCode: 'LIE',
        flag: 'https://crests.football-data.org/1982.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2135,
        name: 'Lithuania',
        countryCode: 'LTU',
        flag: 'https://crests.football-data.org/1983.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2143,
        name: 'Malta',
        countryCode: 'MLT',
        flag: 'https://crests.football-data.org/malta.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2163,
        name: 'Netherlands',
        countryCode: 'NLD',
        flag: 'https://crests.football-data.org/8601.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2171,
        name: 'Northern Ireland',
        countryCode: 'NIR',
        flag: 'https://crests.football-data.org/829.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2173,
        name: 'Norway',
        countryCode: 'NOR',
        flag: 'https://crests.football-data.org/813.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2186,
        name: 'Poland',
        countryCode: 'POL',
        flag: 'https://crests.football-data.org/794.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2187,
        name: 'Portugal',
        countryCode: 'PRT',
        flag: 'https://crests.football-data.org/765.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2192,
        name: 'Republic of Ireland',
        countryCode: 'IRL',
        flag: 'https://crests.football-data.org/806.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2194,
        name: 'Romania',
        countryCode: 'ROU',
        flag: 'https://crests.football-data.org/811.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2195,
        name: 'Russia',
        countryCode: 'RUS',
        flag: 'https://crests.football-data.org/808.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2204,
        name: 'Scotland',
        countryCode: 'SCO',
        flag: 'https://crests.football-data.org/814.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2209,
        name: 'Shetland',
        countryCode: 'SHE',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Shetland.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2224,
        name: 'Spain',
        countryCode: 'ESP',
        flag: 'https://crests.football-data.org/760.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2233,
        name: 'Sweden',
        countryCode: 'SWE',
        flag: 'https://crests.football-data.org/792.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2234,
        name: 'Switzerland',
        countryCode: 'CHE',
        flag: 'https://crests.football-data.org/788.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2247,
        name: 'Turkey',
        countryCode: 'TUR',
        flag: 'https://crests.football-data.org/803.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2253,
        name: 'Ukraine',
        countryCode: 'UKR',
        flag: 'https://crests.football-data.org/790.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
      {
        id: 2264,
        name: 'Wales',
        countryCode: 'WAL',
        flag: 'https://crests.football-data.org/833.svg',
        parentAreaId: 2077,
        parentArea: 'Europe',
      },
    ])
  }
}