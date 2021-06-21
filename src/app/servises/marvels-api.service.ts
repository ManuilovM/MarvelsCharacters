import { Injectable } from '@angular/core';
import { ApiKey } from './apikey';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelsApiService {

  apiKey: string = ApiKey;
  constructor(private http: HttpClient ) { }

  getMarvelCharacters(indexFrom:number, count: number){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    
    const url :string = "https://gateway.marvel.com:443/v1/public/characters?limit="+ count +"&offset="+ indexFrom+"&apikey="+ this.apiKey;
    return this.http.get(url, { headers: headers });
  }


  getCharacterById(id:number){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    
    const url :string = "https://gateway.marvel.com:443/v1/public/characters/"+id+"?apikey="+this.apiKey;
    return this.http.get(url, { headers: headers });
  }

}
