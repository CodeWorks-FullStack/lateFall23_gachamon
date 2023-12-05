import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  gachamons =[
    new Gachamon('Oslo', '🦧' , 'https://em-content.zobj.net/source/microsoft-teams/363/orangutan_1f9a7.png', 'common'),
    new Gachamon('Rick', '🐍', 'https://em-content.zobj.net/source/microsoft-teams/363/snake_1f40d.png', 'common'),
    new Gachamon('Petey', '🐁', 'https://em-content.zobj.net/source/microsoft-teams/363/mouse_1f401.png', 'common'),
    new Gachamon('Tara', '🦈', 'https://em-content.zobj.net/source/microsoft-teams/363/shark_1f988.png', 'common'),
    new Gachamon( 'Casper', '🐂', 'https://em-content.zobj.net/source/microsoft-teams/363/ox_1f402.png', 'uncommon'),
    new Gachamon('Gumdrop', '🦓', 'https://em-content.zobj.net/source/microsoft-teams/363/zebra_1f993.png', 'uncommon'),
    new Gachamon('Lucas', '🐊', 'https://em-content.zobj.net/source/microsoft-teams/363/crocodile_1f40a.png', 'uncommon'),
    new Gachamon('Moses', '🐡', 'https://em-content.zobj.net/source/microsoft-teams/363/blowfish_1f421.png', 'uncommon'),
    new Gachamon('Shrent', '🦖', 'https://em-content.zobj.net/source/microsoft-teams/363/t-rex_1f996.png', 'rare'),
    new Gachamon ('Dev', '🕷️', 'https://em-content.zobj.net/source/microsoft-teams/363/spider_1f577-fe0f.png', 'rare'),
    new Gachamon('Rick', '🐍', 'https://em-content.zobj.net/source/microsoft-teams/363/snake_1f40d.png', 'rare', 'shiny'),
    new Gachamon('Roxi', '🪨', 'https://em-content.zobj.net/source/microsoft-teams/363/rock_1faa8.png', 'rare', 'shiny'),
    new Gachamon('Oslo', '🦧', 'https://em-content.zobj.net/source/microsoft-teams/363/orangutan_1f9a7.png', 'ultra-rare', 'negative') // FIXME double oslo?
  ]

  /** @type {Gachamon} */
  activeGachamon = null

  /**@type {Gachamon[]} */
  gachamonCollection = []



}

export const AppState = createObservableProxy(new ObservableAppState())
console.log('Initial State', AppState);