import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
apiURL = '../assets/StrategyHighlights.json';
  constructor(private HttpClient:HttpClient) { }
    getStrategyHighlights(): Observable<any> {     
      return this.HttpClient.get<any>(this.apiURL);  
    }
  }


