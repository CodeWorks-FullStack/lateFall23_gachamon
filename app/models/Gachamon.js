import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"
// NOTE to import this you will need to open the file, otherwise vscode doesn't know this file exists
// generateId is located in the utils folder



export class Gachamon{
  // TODO mick is being suspicion
  name
  type
  rarity
  color
  constructor(name, type, imgUrl, rarity, color){
    this.id = generateId()
    this.name = name
    this.type = type
    this.imageUrl = imgUrl
    this.rarity = rarity
    this.color = color || 'normal' // NOTE this allows you to create 'default' values that can be overwritten
    
  }

  // NOTE getters work just like functions, but are invoked when accessed. They looked like properties on the class.
  get gachamonIcon(){
    // return `<span>${this.name}</span>` 
    // REVIEW start with a small template to test your draw, then move to a complex one
    return `
<div class="col">
  <button class="btn fs-3 ${this.color}" title="${this.name}" onclick="app.GachamonsController.selectActiveGachamon('${this.id}')">${this.type}</button>
</div>`
  }


  get ActiveGachmonCard(){
    // return `${this.type} ${this.rarity}`
    return `
<div class="col-4 text-center">
  <section class="p-2 border border-dark shadow bg-white rounded">
  <h5 class="text-capitalize">${this.ColorAndName}</h5>
  <img class="img-fluid border border-success rounded bg-jungle ${this.color}" src="${this.imageUrl}" alt="image of ${this.rarity} ${this.name}">
    <p>${this.rarity}</p>
    ${this.InCollectionTemplate}
  </section>
</div>
`
  }

  get ColorAndName(){
    if(this.color == 'normal'){
      return this.name
    } else {
      return `${this.color} ${this.name}`
    }
  }

  get InCollectionTemplate(){
    // const isInCollection = AppState.gachamonCollection.includes(this) works well when objects are tightly referenced with each other.
    const isInCollection = AppState.gachamonCollection.find(gachamon => this.id == gachamon.id)
    if(isInCollection){
      return `<button class="btn btn-danger" onclick="app.GachamonsController.trashGachamon('${this.id}')">trash 1 ${this.ColorAndName}</button>`
    } else{
      return `<p>You don't own any ${this.ColorAndName}'s 😿</p>`
    }
  }
}