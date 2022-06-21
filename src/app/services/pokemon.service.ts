import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl='https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  async getPokemons(index: any){
    return await this.http.get<any>(`${this.baseUrl}/pokemon/${index}`).toPromise();
  }

  getPokemonData(offset: number, limit: number = 20){
    return this.http.get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`).pipe(
      map(result => {
        return result['results']
      })    
    );    
  }

  


}
