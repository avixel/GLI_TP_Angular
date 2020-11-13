import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe.pipe'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

	id: string = '';
	filtre: string ='';

	pokemons: Pokemon[] = [
		{id:'1', name:'Bulbizarre', stats:null},
		{id:'2', name:'Herbizarre', stats:null},
		{id:'3', name:'Florizarre', stats:null},
		{id:'4', name:'Salameche', stats:null},
		{id:'5', name:'Reptincel', stats:null},
		{id:'6', name:'Dracaufeu', stats:null}
	]

  constructor() { }

  ngOnInit(): void {
  }

  pipePoke(): void{
  	console.log(new FilterPokemonPipePipe().transform(this.pokemons, "id", this.filtre));
  }

};