import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-poke-content',
  templateUrl: './poke-content.component.html',
  styleUrls: ['./poke-content.component.scss']
})
export class PokeContentComponent implements OnInit {

  constructor(private pokeService: PokemonService,) { 

  }

  listaPokemons: any[]=[];
  listaFinal: any[]=[];
  listaFiltrada: any[]=[];
  listaTemp: any[]=[];
  cont = 20;
  filtrando: boolean=false;
  noHay: boolean=false;
  cargando: boolean=true;

  tipos = [
    {name: 'all', route: '/home', color:'gray'},
    {name: 'normal', route: '', color: '#A8A77A'},
    {name: 'fighting', route: '', color:'#C22E28'},
    {name: 'flying', route: '', color:'#A98FF3'},
    {name: 'poison', route: '', color:'#A33EA1'},
    {name: 'ground', route: '', color:'#E2BF65'},
    {name: 'rock', route: '', color:'#B6A136'},
    {name: 'bug', route: '', color:'#A6B91A'},
    {name: 'ghost', route: '', color:'#735797'},
    {name: 'Steel', route: '', color:'#B7B7CE'},
    {name: 'fire', route: '', color: '#EE8130'},
    {name: 'water', route: '', color: '#6390F0'},    
    {name: 'grass', route: '', color: '#7AC74C'},
    {name: 'electric', route: '', color: '#F7D02C'},
    {name: 'psychic', route: '', color:'#F95587'},
    {name: 'ice', route: '', color: '#96D9D6'},
    {name: 'dragon', route: '', color:'#6F35FC'},
    {name: 'dark', route: '', color: '#705746'},
    {name: 'fairy', route: '', color:'#D685AD'},
  ]

  ngOnInit() {
    this.obtenerPokemons();
    
    //this.getPage(this.offset);
  }

  async obtenerPokemons(){
    this.cargando=true;
    for(let i=1; i<=151; i++){
      this.listaTemp.push(await this.pokeService.getPokemons(i));
      this.listaPokemons = this.listaTemp;
    }
    this.cargando=false;
    // this.cont+=20;
    // setTimeout(()=>{
    //   this.filtrar();
    // },2000);
    //console.log(this.listaPokemons);
    //console.log(this.listaTemp)
  }

  obtenerPokemonsTipo(tipo: string){

  }

  // filtrar(){
    
    
  // }

  filtrar(tipo: string){
    console.log('el tipo clickado es: '+tipo);
    if(tipo=='all'){
      this.noHay=false;
      this.refresh();
    }else{
      if(this.listaTemp.length>0){
        for(let pkmn of this.listaTemp){
          for(let t of pkmn.types){
            if(t.type.name==tipo){
              this.listaFiltrada.push(pkmn);
            }else{
              console.log('Este pkmn '+pkmn.name+' no es del tipo: '+tipo);
            }
          }
        }
        if(this.listaFiltrada.length==0){
          this.noHay=true;
        }else{this.noHay=false;}
      }else{
        console.log('Error, la lista esta vacia o no inicializada');
      }
      this.listaPokemons=[];
      if(this.listaPokemons.length==0){
        this.listaPokemons = this.listaFiltrada;
        this.listaFiltrada = []
      }
    }    
  }

  onScroll(event: Event): void {
    // const element: HTMLDivElement = event.target as HTMLDivElement;
    // if(element.scrollHeight - element.scrollTop < 1000) {
    //   console.log('scrolling...');
    //     // this.cont+=20;
    //     // this.obtenerPokemons();    
    // }
  }

  cambiarColor(progress: any){
    if (progress<50){
       return 'warn';
    } else if (progress>=50 && progress<90){
       return 'accent';
    } else{
      return 'primary';
    }
  }

  pasaraMetros(height: number){
    return (height / 10).toFixed(1);
  }

  pasaraKilos(weight: number){
    return (weight * .54).toFixed(1);
  }

  refresh(): void{
    this.cargando=true;
    this.listaPokemons=[];
    
    if(this.listaPokemons.length==0){
      this.listaPokemons =this.listaTemp;
    }
    this.cargando=false;
  }


}
