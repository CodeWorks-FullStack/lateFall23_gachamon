import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";




export class GachamonsController{
  constructor(){
    console.log('🪨Gacha, Gacha, Gachamon!🦧');
    this.drawGachamonIcons()
    // NOTE creating observers
    // observers WATCH something in the AppState, and when it changes, performs it's given instructions
    AppState.on('activeGachamon', this.drawActiveGachamonCard)
    AppState.on('gachamonCollection', this.drawGachamonCollection)
  }

  drawGachamonIcons(){
    const gachamons = AppState.gachamons
    let content = ''
    gachamons.forEach(gachamon => content += gachamon.gachamonIcon)
    document.getElementById('gachamon-icons').innerHTML = content
  }

  drawActiveGachamonCard(){
    const activeGachamon = AppState.activeGachamon
    let content = activeGachamon.ActiveGachmonCard
    document.getElementById('active-gachamon').innerHTML = content
  }

  drawGachamonCollection(){
    const collection = AppState.gachamonCollection
    let content = ''
    collection.forEach(gachamon => content += gachamon.gachamonIcon)
    document.getElementById('gachamon-collection').innerHTML = content
  }

  selectActiveGachamon(gachamonId){
    console.log('selected', gachamonId);
    gachamonsService.selectActiveGachamon(gachamonId)
    // this.drawActiveGachamonCard() now taken care of by the observer in constructor
  }

  rollRandomGachamon(){
    console.log('gacha gacha gachamon!🎲');
    gachamonsService.rollRandomGachamon()
    // this.drawActiveGachamonCard() now taken care of by the observer in constructor
  }

  trashGachamon(gachamonId){
    // NOTE anytime the user is given the power to destroy data, you should always use a confirm
    if(window.confirm('are you sure you want to do that? this is un-reversible')){
      console.log('trashing', gachamonId)
      gachamonsService.trashGachamon(gachamonId)
    }
  }
}