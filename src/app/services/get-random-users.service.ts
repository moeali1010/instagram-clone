import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersPosts } from '../model/usersposts';
@Injectable({
  providedIn: 'root'
})
export class GetRandomUsersService {
  baseApiURL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  randomUsers( page , results , seed): Observable<UsersPosts[]> {
    return this.http.get<UsersPosts[]>(this.baseApiURL + '/api/?page='+page+'&results='+results+
    '&seed= '+seed+' ').pipe(map((response: any) => response.results));
  }


}
