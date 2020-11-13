import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './app/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
	
	http: HttpClient;
	url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(http: HttpClient) { 
  	this.http = http;
  }

  getAllPoke(): Observable<string[]>{
  	return this.http.get<string[]>(this.url+'?limit=2000');
  }
}
