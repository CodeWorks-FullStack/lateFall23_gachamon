import { AppState } from "../AppState.js";





class GachamonsService{
  selectActiveGachamon(gachamonId){
    console.log('🕴️selected', gachamonId);
    const selectedGachamon = AppState.gachamons.find(gachamon => gachamon.id == gachamonId)
    console.log('🫴', selectedGachamon);
    AppState.activeGachamon = selectedGachamon
    console.log('AppState', AppState);
  }

  rollRandomGachamon(){
    let random = AppState.gachamons[Math.floor(Math.random()*AppState.gachamons.length)]
    AppState.gachamonCollection.push(random)
    AppState.activeGachamon = random
    console.log('📦', AppState.gachamonCollection);
  }

  trashGachamon(gachamonId){
    let indexToRemove = AppState.gachamonCollection.findIndex(gachamon => gachamon.id == gachamonId)
    if(indexToRemove >= 0){
      AppState.gachamonCollection.splice(indexToRemove,1)
      AppState.emit('activeGachamon') // force the observer to witness an event, (even though technically one didn't actually occur)
    }
  }

}

export const gachamonsService = new GachamonsService()