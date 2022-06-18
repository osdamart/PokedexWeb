import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-content',
  templateUrl: './poke-content.component.html',
  styleUrls: ['./poke-content.component.scss']
})
export class PokeContentComponent implements OnInit {

  constructor(private pokeService: PokemonService) { }

  listaPokemons: any[]=[];
  tipos = [
    {name: 'All', route: '/home', color:'gray'},
    {name: 'Normal', route: '', color: '#A8A77A'},
    {name: 'Fighting', route: '', color:'#C22E28'},
    {name: 'Flying', route: '', color:'#A98FF3'},
    {name: 'Poison', route: '', color:'#A33EA1'},
    {name: 'Ground', route: '', color:'#E2BF65'},
    {name: 'Rock', route: '', color:'#B6A136'},
    {name: 'Bug', route: '', color:'#A6B91A'},
    {name: 'Ghost', route: '', color:'#735797'},
    {name: 'Steel', route: '', color:'#B7B7CE'},
    {name: 'Fire', route: '', color: '#EE8130'},
    {name: 'Water', route: '', color: '#6390F0'},    
    {name: 'Grass', route: '', color: '#7AC74C'},
    {name: 'Electric', route: '', color: '#F7D02C'},
    {name: 'Psychic', route: '', color:'#F95587'},
    {name: 'Ice', route: '', color: '#96D9D6'},
    {name: 'Dragon', route: '', color:'#6F35FC'},
    {name: 'Dark', route: '', color: '#705746'},
    {name: 'Fairy', route: '', color:'#D685AD'},
  ]

  ngOnInit() {
    this.obtenerPokemons();
  }

  obtenerPokemons(){

    for(let i=1; i<=20; i++){
      this.pokeService.getPokemons(i).subscribe(
        data => {
          console.log(data);
          this.listaPokemons.push(data);
        }
      );
    }
    
    console.log(this.listaPokemons);
    
  }

}
