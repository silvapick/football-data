import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Team from 'App/Models/Team'

export default class TeamSeeder extends BaseSeeder {
  public async run() {
    await Team.createMany([
      {
        id: 57,
        areaId: 2072,
        name: 'Arsenal FC',
        shortName: 'Arsenal',
        tla: 'ARS',
        address: '75 Drayton Park London N5 1BU',
        website: 'http://www.arsenal.com',
        founded: '1886',
        clubColors: 'Red / White',
        venue: 'Emirates Stadium',
      },
      {
        id: 58,
        areaId: 2072,
        name: 'Aston Villa FC',
        shortName: 'Aston Villa',
        tla: 'AVL',
        address: 'Villa Park Birmingham B6 6HE',
        website: 'http://www.avfc.co.uk',
        founded: '1872',
        clubColors: 'Claret / Sky Blue',
        venue: 'Villa Park',
      },
      {
        id: 59,
        areaId: 2072,
        name: 'Blackburn Rovers FC',
        shortName: 'Blackburn',
        tla: 'BLA',
        address: 'Ewood Park Blackburn BB2 4JF',
        website: 'http://www.rovers.co.uk',
        founded: '1874',
        clubColors: 'Blue / White',
        venue: 'Ewood Park',
      },
      {
        id: 60,
        areaId: 2072,
        name: 'Bolton Wanderers FC',
        shortName: 'Bolton',
        tla: 'BOL',
        address: 'Burnden Way Bolton BL6 6JW',
        website: 'http://www.bwfc.co.uk',
        founded: '1874',
        clubColors: 'White / Navy Blue',
        venue: 'University of Bolton Stadium',
      },
      {
        id: 61,
        areaId: 2072,
        name: 'Chelsea FC',
        shortName: 'Chelsea',
        tla: 'CHE',
        address: 'Fulham Road London SW6 1HS',
        website: 'http://www.chelseafc.com',
        founded: '1905',
        clubColors: 'Royal Blue / White',
        venue: 'Stamford Bridge',
      },
      {
        id: 62,
        areaId: 2072,
        name: 'Everton FC',
        shortName: 'Everton',
        tla: 'EVE',
        address: 'Goodison Park Liverpool L4 4EL',
        website: 'http://www.evertonfc.com',
        founded: '1878',
        clubColors: 'Blue / White',
        venue: 'Goodison Park',
      },
      {
        id: 63,
        areaId: 2072,
        name: 'Fulham FC',
        shortName: 'Fulham',
        tla: 'FUL',
        address: 'Craven Cottage, Stevenage Road London SW6 6HH',
        website: 'http://www.fulhamfc.com',
        founded: '1879',
        clubColors: 'White / Black',
        venue: 'Craven Cottage',
      },
      {
        id: 64,
        areaId: 2072,
        name: 'Liverpool FC',
        shortName: 'Liverpool',
        tla: 'LIV',
        address: 'Anfield Road Liverpool L4 0TH',
        website: 'http://www.liverpoolfc.tv',
        founded: '1892',
        clubColors: 'Red / White',
        venue: 'Anfield',
      },
      {
        id: 65,
        areaId: 2072,
        name: 'Manchester City FC',
        shortName: 'Man City',
        tla: 'MCI',
        address: 'SportCity Manchester M11 3FF',
        website: 'https://www.mancity.com',
        founded: '1880',
        clubColors: 'Sky Blue / White',
        venue: 'Etihad Stadium',
      },
      {
        id: 66,
        areaId: 2072,
        name: 'Manchester United FC',
        shortName: 'Man United',
        tla: 'MUN',
        address: 'Sir Matt Busby Way Manchester M16 0RA',
        website: 'http://www.manutd.com',
        founded: '1878',
        clubColors: 'Red / White',
        venue: 'Old Trafford',
      },
      {
        id: 67,
        areaId: 2072,
        name: 'Newcastle United FC',
        shortName: 'Newcastle',
        tla: 'NEW',
        address: 'Sports Direct Arena Newcastle upon Tyne NE1 4ST',
        website: 'http://www.nufc.co.uk',
        founded: '1881',
        clubColors: 'Black / White',
        venue: "St. James' Park",
      },
      {
        id: 68,
        areaId: 2072,
        name: 'Norwich City FC',
        shortName: 'Norwich',
        tla: 'NOR',
        address: 'Carrow Road Norwich NR1 1JE',
        website: 'http://www.canaries.co.uk',
        founded: '1902',
        clubColors: 'Yellow / Green',
        venue: 'Carrow Road',
      },
      {
        id: 69,
        areaId: 2072,
        name: 'Queens Park Rangers FC',
        shortName: 'QPR',
        tla: 'QPR',
        address: 'South Africa Road, Shepherds Bush London W12 7PA',
        website: 'http://www.qpr.co.uk',
        founded: '1882',
        clubColors: 'Blue / White',
        venue: 'Kiyan Prince Foundation Stadium',
      },
      {
        id: 70,
        areaId: 2072,
        name: 'Stoke City FC',
        shortName: 'Stoke',
        tla: 'STK',
        address: 'Stanley Matthews Way Stoke-on-Trent ST4 4EG',
        website: 'http://www.stokecityfc.com',
        founded: '1863',
        clubColors: 'Red / White',
        venue: 'Bet365 Stadium',
      },
      {
        id: 71,
        areaId: 2072,
        name: 'Sunderland AFC',
        shortName: 'Sunderland',
        tla: 'SUN',
        address: 'The Sunderland Stadium of Light Sunderland SR5 1SU',
        website: 'http://www.safc.com',
        founded: '1879',
        clubColors: 'Red / White',
        venue: 'Stadium of Light',
      },
      {
        id: 73,
        areaId: 2072,
        name: 'Tottenham Hotspur FC',
        shortName: 'Tottenham',
        tla: 'TOT',
        address: 'Bill Nicholson Way, 748 High Road London N17 0AP',
        website: 'http://www.tottenhamhotspur.com',
        founded: '1882',
        clubColors: 'Navy Blue / White',
        venue: 'Tottenham Hotspur Stadium',
      },
      {
        id: 74,
        areaId: 2072,
        name: 'West Bromwich Albion FC',
        shortName: 'West Brom',
        tla: 'WBA',
        address: 'The Hawthorns West Bromwich B71 4LF',
        website: 'http://www.wba.co.uk',
        founded: '1879',
        clubColors: 'White / Navy Blue',
        venue: 'The Hawthorns',
      },
      {
        id: 75,
        areaId: 2072,
        name: 'Wigan Athletic FC',
        shortName: 'Wigan Athletic',
        tla: 'WIG',
        address: 'Loire Drive Wigan WN5 0UZ',
        website: 'http://www.wiganlatics.co.uk',
        founded: '1932',
        clubColors: 'Blue / White',
        venue: 'The DW Stadium',
      },
      {
        id: 76,
        areaId: 2072,
        name: 'Wolverhampton Wanderers FC',
        shortName: 'Wolverhampton',
        tla: 'WOL',
        address: 'Waterloo Road Wolverhampton WV1 4QR',
        website: 'http://www.wolves.co.uk',
        founded: '1877',
        clubColors: 'Black / Gold',
        venue: 'Molineux Stadium',
      },
      {
        id: 322,
        areaId: 2072,
        name: 'Hull City AFC',
        shortName: 'Hull City',
        tla: 'HUL',
        address: 'Walton Street Hull HU3 6HU',
        website: 'http://www.hullcitytigers.com',
        founded: '1904',
        clubColors: 'Orange / Black',
        venue: 'Kingston Communications Stadium',
      },
      {
        id: 325,
        areaId: 2072,
        name: 'Portsmouth FC',
        shortName: 'Portsmouth',
        tla: 'POR',
        address: 'Frogmore Road Portsmouth PO4 8RA',
        website: 'http://www.portsmouthfc.co.uk',
        founded: '1898',
        clubColors: '',
        venue: 'Fratton Park',
      },
      {
        id: 328,
        areaId: 2072,
        name: 'Burnley FC',
        shortName: 'Burnley',
        tla: 'BUR',
        address: 'Harry Potts Way Burnley BB10 4BX',
        website: 'http://www.burnleyfootballclub.com',
        founded: '1881',
        clubColors: 'Claret / Sky Blue',
        venue: 'Turf Moor',
      },
      {
        id: 332,
        areaId: 2072,
        name: 'Birmingham City FC',
        shortName: 'Birmingham',
        tla: 'BIR',
        address: "St. Andrew's Stadium Birmingham B9 4RL",
        website: 'http://www.bcfc.com',
        founded: '1875',
        clubColors: 'Blue / White',
        venue: "St Andrew's Trillion Trophy Stadium",
      },
      {
        id: 336,
        areaId: 2072,
        name: 'Blackpool FC',
        shortName: 'Blackpool',
        tla: 'BLA',
        address: 'Bloomfield Road, Seasiders Way Blackpool FY1 6JJ',
        website: 'http://www.blackpoolfc.co.uk',
        founded: '1887',
        clubColors: 'Orange / White',
        venue: 'Bloomfield Road',
      },
      {
        id: 338,
        areaId: 2072,
        name: 'Leicester City FC',
        shortName: 'Leicester City',
        tla: 'LEI',
        address: 'The Walkers Stadium, Filbert Way Leicester LE2 7FL',
        website: 'http://www.lcfc.com',
        founded: '1884',
        clubColors: 'Royal Blue / White',
        venue: 'King Power Stadium',
      },
      {
        id: 340,
        areaId: 2072,
        name: 'Southampton FC',
        shortName: 'Southampton',
        tla: 'SOU',
        address: 'Britannia Road Southampton SO14 5FP',
        website: 'http://www.saintsfc.co.uk',
        founded: '1885',
        clubColors: 'Red / White / Black',
        venue: "St. Mary's Stadium",
      },
      {
        id: 341,
        areaId: 2072,
        name: 'Leeds United FC',
        shortName: 'Leeds United',
        tla: 'LEE',
        address: 'Elland Road Leeds LS11 0ES',
        website: 'http://www.leedsunited.com',
        founded: '1904',
        clubColors: 'White / Blue',
        venue: 'Elland Road',
      },
      {
        id: 342,
        areaId: 2072,
        name: 'Derby County FC',
        shortName: 'Derby County',
        tla: 'DER',
        address: 'Pride Park Derby DE24 8XL',
        website: 'http://www.dcfc.co.uk',
        founded: '1884',
        clubColors: 'White / Black',
        venue: 'iPro Stadium',
      },
      {
        id: 343,
        areaId: 2072,
        name: 'Middlesbrough FC',
        shortName: 'Middlesbrough',
        tla: 'MID',
        address: 'Riverside Stadium Middlesbrough TS3 6RS',
        website: 'http://www.mfc.co.uk',
        founded: '1876',
        clubColors: 'Red / White',
        venue: 'Riverside Stadium',
      },
      {
        id: 345,
        areaId: 2072,
        name: 'Sheffield Wednesday FC',
        shortName: 'Sheffield Wed',
        tla: 'SHE',
        address: 'Hillsborough Sheffield, Yorkshire S6 1SW',
        website: 'http://www.swfc.co.uk',
        founded: '1820',
        clubColors: 'Blue / White / Black',
        venue: 'Hillsborough Stadium',
      },
      {
        id: 346,
        areaId: 2072,
        name: 'Watford FC',
        shortName: 'Watford',
        tla: 'WAT',
        address: 'Vicarage Road Watford WD18 0ER',
        website: 'http://www.watfordfc.com',
        founded: '1881',
        clubColors: 'Yellow / Black',
        venue: 'Vicarage Road Stadium',
      },
      {
        id: 347,
        areaId: 2072,
        name: 'AFC Wimbledon',
        shortName: 'AFC Wimbledon',
        tla: 'WMB',
        address: 'Jack Goodchild Way, 422a Kingston Road Kingston upon Thames KT1 3PB',
        website: 'http://www.afcwimbledon.co.uk',
        founded: '2002',
        clubColors: 'Blue / Yellow',
        venue: 'Kiyan Prince Foundation Stadium',
      },
      {
        id: 348,
        areaId: 2072,
        name: 'Charlton Athletic FC',
        shortName: 'Charlton',
        tla: 'CHA',
        address: 'Floyd Road, Charlton London SE7 8BL',
        website: 'http://www.cafc.co.uk',
        founded: '1905',
        clubColors: 'Red / White',
        venue: 'The Valley',
      },
      {
        id: 349,
        areaId: 2072,
        name: 'Ipswich Town FC',
        shortName: 'Ipswich Town',
        tla: 'IPS',
        address: 'Portman Road Ipswich IP1 2DA',
        website: 'http://www.itfc.co.uk',
        founded: '1887',
        clubColors: 'Blue / White',
        venue: 'Portman Road Stadium',
      },
      {
        id: 351,
        areaId: 2072,
        name: 'Nottingham Forest FC',
        shortName: 'Nottingham',
        tla: 'NOT',
        address: 'Pavilion Road, West Bridgeford Nottingham NG2 5GJ',
        website: 'http://www.nottinghamforest.co.uk',
        founded: '1865',
        clubColors: 'Red / White',
        venue: 'The City Ground',
      },
      {
        id: 354,
        areaId: 2072,
        name: 'Crystal Palace FC',
        shortName: 'Crystal Palace',
        tla: 'CRY',
        address: 'Whitehorse Lane London SE25 6PU',
        website: 'http://www.cpfc.co.uk',
        founded: '1905',
        clubColors: 'Red / Blue',
        venue: 'Selhurst Park',
      },
      {
        id: 355,
        areaId: 2072,
        name: 'Reading FC',
        shortName: 'Reading',
        tla: 'REA',
        address: 'Junction 11 M4 Reading RG2 0FL',
        website: 'http://www.readingfc.co.uk',
        founded: '1871',
        clubColors: 'Blue / White',
        venue: 'Madejski Stadium',
      },
      {
        id: 356,
        areaId: 2072,
        name: 'Sheffield United FC',
        shortName: 'Sheffield Utd',
        tla: 'SHE',
        address: 'Bramall Lane Sheffield, Yorkshire S2 4SU',
        website: 'http://www.sufc.co.uk',
        founded: 'null',
        clubColors: 'Red / White / Black',
        venue: 'Bramall Lane',
      },
      {
        id: 357,
        areaId: 2072,
        name: 'Barnsley FC',
        shortName: 'Barnsley',
        tla: 'BAR',
        address: 'Grove Street Barnsley S71 1ET',
        website: 'http://www.barnsleyfc.co.uk',
        founded: '1887',
        clubColors: 'Red / White',
        venue: 'Oakwell Stadium',
      },
      {
        id: 376,
        areaId: 2072,
        name: 'Northampton Town FC',
        shortName: 'Northampton',
        tla: '',
        address: 'Upton Way Northampton NN5 5QA',
        website: 'http://www.ntfc.co.uk',
        founded: '1897',
        clubColors: 'Claret / White',
        venue: 'Academy Stadium',
      },
      {
        id: 384,
        areaId: 2072,
        name: 'Millwall FC',
        shortName: 'Millwall',
        tla: 'MIL',
        address: 'Zampa Road London SE16 3LN',
        website: 'http://www.millwallfc.co.uk',
        founded: '1885',
        clubColors: 'Blue / White',
        venue: 'The Den',
      },
      {
        id: 385,
        areaId: 2072,
        name: 'Rotherham United FC',
        shortName: 'Rotherham Utd',
        tla: 'ROT',
        address: 'New York Way Rotherham S60 1AH',
        website: 'http://www.themillers.co.uk',
        founded: '1870',
        clubColors: 'Red / White',
        venue: 'New York Stadium',
      },
      {
        id: 387,
        areaId: 2072,
        name: 'Bristol City FC',
        shortName: 'Bristol City',
        tla: 'BRI',
        address: 'Ashton Gate Bristol BS3 2EJ',
        website: 'http://www.bcfc.co.uk',
        founded: '1894',
        clubColors: 'Red / White',
        venue: 'Ashton Gate Stadium',
      },
      {
        id: 389,
        areaId: 2072,
        name: 'Luton Town FC',
        shortName: 'Luton Town',
        tla: 'LUT',
        address: '1 Maple Road Luton LU4 8AW',
        website: 'http://www.lutontown.co.uk',
        founded: '1885',
        clubColors: 'White / Navy Blue / Orange',
        venue: 'Kenilworth Road Stadium',
      },
      {
        id: 391,
        areaId: 2072,
        name: 'Notts County FC',
        shortName: 'Notts County',
        tla: 'NOT',
        address: 'Meadow Lane Nottingham NG2 3HJ',
        website: 'http://www.nottscountyfc.co.uk',
        founded: '1862',
        clubColors: 'Black / White',
        venue: 'Meadow Lane Stadium',
      },
      {
        id: 394,
        areaId: 2072,
        name: 'Huddersfield Town AFC',
        shortName: 'Huddersfield',
        tla: 'HUD',
        address: 'Stadium Way Huddersfield HD1 6PX',
        website: 'http://www.htafc.com',
        founded: '1908',
        clubColors: 'Blue / White',
        venue: "The John Smith's Stadium",
      },
      {
        id: 397,
        areaId: 2072,
        name: 'Brighton & Hove Albion FC',
        shortName: 'Brighton Hove',
        tla: 'BHA',
        address: '44 North Road Brighton & Hove BN1 1YR',
        website: 'http://www.seagulls.co.uk',
        founded: '1898',
        clubColors: 'Blue / White',
        venue: 'The American Express Community Stadium',
      },
      {
        id: 399,
        areaId: 2072,
        name: 'Leyton Orient FC',
        shortName: 'Leyton Orient',
        tla: 'LEY',
        address: 'Brisbane Road Leyton E10 5NE',
        website: 'http://www.leytonorient.com',
        founded: '1881',
        clubColors: 'Black / Red',
        venue: 'Matchroom Stadium',
      },
      {
        id: 402,
        areaId: 2072,
        name: 'Brentford FC',
        shortName: 'Brentford',
        tla: 'BRE',
        address: 'Braemar Road Brentford TW8 0NT',
        website: 'http://www.brentfordfc.co.uk',
        founded: '1889',
        clubColors: 'Red / White / Black',
        venue: 'Griffin Park',
      },
      {
        id: 409,
        areaId: 2072,
        name: 'Milton Keynes Dons FC',
        shortName: 'Milton Keynes',
        tla: 'MKD',
        address: 'Stadium Way West Milton Keynes MK 1ST',
        website: 'http://www.mkdons.com',
        founded: '1889',
        clubColors: 'White / Red',
        venue: 'Stadium mk',
      },
      {
        id: 563,
        areaId: 2072,
        name: 'West Ham United FC',
        shortName: 'West Ham',
        tla: 'WHU',
        address: 'Queen Elizabeth Olympic Park, London London E20 2ST',
        website: 'http://www.whufc.com',
        founded: '1895',
        clubColors: 'Claret / Sky Blue',
        venue: 'London Stadium',
      },
      {
        id: 770,
        areaId: 2072,
        name: 'England',
        shortName: 'England',
        tla: 'ENG',
        address: 'Wembley Stadium, PO Box 1966 London SW1P 9EQ',
        website: 'http://www.thefa.com',
        founded: '1863',
        clubColors: 'White / Red / Navy Blue',
        venue: 'Wembley Stadium',
      },
      {
        id: 1044,
        areaId: 2072,
        name: 'AFC Bournemouth',
        shortName: 'Bournemouth',
        tla: 'BOU',
        address: 'Dean Court, Kings Park Bournemouth BH7 7AF',
        website: 'http://www.afcb.co.uk',
        founded: '1890',
        clubColors: 'Red / Black',
        venue: 'Vitality Stadium',
      },
      {
        id: 1067,
        areaId: 2072,
        name: 'Bradford City AFC',
        shortName: 'Bradford City',
        tla: 'BRA',
        address: 'Valley Parade Bradford BD8 7DY',
        website: 'http://www.bradfordcityfc.co.uk',
        founded: '1876',
        clubColors: 'Claret / Orange',
        venue: 'Northern Commercials Stadium',
      },
      {
        id: 1068,
        areaId: 2072,
        name: 'Bury FC',
        shortName: 'Bury',
        tla: 'BUR',
        address: 'Gigg Lane Bury, Lancashire BL9 9HR',
        website: 'http://www.buryfc.co.uk',
        founded: '1885',
        clubColors: 'White / Blue',
        venue: '',
      },
      {
        id: 1072,
        areaId: 2072,
        name: 'Burton Albion FC',
        shortName: 'Burton Albion',
        tla: 'BUR',
        address: 'Princess Way Burton-on-Trent DE13 0AR',
        website: 'http://www.burtonalbionfc.co.uk',
        founded: '1950',
        clubColors: 'Yellow / Black',
        venue: 'Pirelli Stadium',
      },
      {
        id: 1075,
        areaId: 2072,
        name: 'Oldham Athletic AFC',
        shortName: 'Oldham Athl',
        tla: 'OLD',
        address: 'SportsDirect.com Park Oldham OL1 2PB',
        website: 'http://www.oldhamathletic.co.uk',
        founded: '1895',
        clubColors: 'Blue / White',
        venue: 'Boundary Park',
      },
      {
        id: 1076,
        areaId: 2072,
        name: 'Coventry City FC',
        shortName: 'Coventry City',
        tla: 'COV',
        address: 'Gallagher Retail Park, Stoney Stanton Road Coventry CV6 5QE',
        website: 'http://www.ccfc.co.uk',
        founded: '1883',
        clubColors: 'Sky Blue / White',
        venue: "St Andrew's Trillion Trophy Stadium",
      },
      {
        id: 1077,
        areaId: 2072,
        name: 'Peterborough United FC',
        shortName: 'Peterborough',
        tla: 'PET',
        address: 'London Road Peterborough PE2 8AL',
        website: 'http://www.theposh.com',
        founded: '1934',
        clubColors: 'Blue / White',
        venue: 'Weston Homes Stadium',
      },
      {
        id: 1079,
        areaId: 2072,
        name: 'Swindon Town FC',
        shortName: 'Swindon Town',
        tla: '',
        address: 'The County Ground, County Road Swindon SN1 2ED',
        website: 'http://www.swindontownfc.co.uk',
        founded: '1879',
        clubColors: 'Red / White',
        venue: 'The Energy Check County Ground',
      },
      {
        id: 1081,
        areaId: 2072,
        name: 'Preston North End FC',
        shortName: 'Preston NE',
        tla: 'PNE',
        address: 'Sir Tom Finney Way Preston PR1 6RU',
        website: 'http://www.pnefc.net',
        founded: '1863',
        clubColors: 'White / Navy Blue',
        venue: 'Deepdale Stadium',
      },
      {
        id: 1082,
        areaId: 2072,
        name: 'Oxford United FC',
        shortName: 'Oxford United',
        tla: 'OXF',
        address: 'Grenoble Road Oxford OX4 4XP',
        website: 'http://www.oufc.co.uk',
        founded: '1893',
        clubColors: 'Yellow / Blue',
        venue: 'The Kassam Stadium',
      },
      {
        id: 1136,
        areaId: 2072,
        name: 'Carlisle United FC',
        shortName: 'Carlisle Utd',
        tla: 'CAR',
        address: 'Warwick Road Carlisle CA1 1LL',
        website: 'http://www.carlisleunited.premiumtv.co.uk',
        founded: '1903',
        clubColors: 'Blue / Red / White',
        venue: 'Brunton Park',
      },
      {
        id: 1137,
        areaId: 2072,
        name: 'Grimsby Town FC',
        shortName: 'Grimsby Town',
        tla: 'GRI',
        address: 'Cleethorpes Cleethorpes DN35 7PY',
        website: 'http://www.gtfc.co.uk',
        founded: '1878',
        clubColors: 'Black / White',
        venue: 'Blundell Park',
      },
      {
        id: 1145,
        areaId: 2072,
        name: 'Accrington Stanley FC',
        shortName: 'Accrington',
        tla: 'ACC',
        address: 'Livingstone Road Accrington BB5 5BX',
        website: 'http://www.accringtonstanley.co.uk',
        founded: '1891',
        clubColors: 'Red',
        venue: 'Wham Stadium',
      },
      {
        id: 1146,
        areaId: 2072,
        name: 'Wycombe Wanderers FC',
        shortName: 'Wycombe',
        tla: 'WYC',
        address: 'Hillbottom Road High Wycombe HP12 4HJ',
        website: 'http://www.wycombewanderers.co.uk',
        founded: '1887',
        clubColors: 'Blue',
        venue: 'Adams Park',
      },
      {
        id: 4578,
        areaId: 2072,
        name: 'Bradford Park Avenue FC',
        shortName: 'Bradford PA',
        tla: 'BPA',
        address: 'Bradford',
        website: 'http://www.bpafc.com',
        founded: '1863',
        clubColors: '',
        venue: 'Horsfall Stadium',
      },
      {
        id: 4595,
        areaId: 2072,
        name: 'Charnock Richard FC',
        shortName: 'Charnock',
        tla: 'CHA',
        address: 'Charnock Richard',
        website: 'http://charnockrichardfc.co.uk/',
        founded: '1933',
        clubColors: '',
        venue: '',
      },
      {
        id: 4629,
        areaId: 2072,
        name: 'Glossop North End AFC',
        shortName: 'Glossop NE',
        tla: 'GLO',
        address: 'Glossop',
        website: 'http://www.pitchero.com/clubs/glossopnorthend/',
        founded: '1886',
        clubColors: '',
        venue: '',
      },
    ])
  }
}
