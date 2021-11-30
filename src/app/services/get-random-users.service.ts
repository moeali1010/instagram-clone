import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class GetRandomUsersService {
  baseApiURL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  randomUsers( page , results , seed): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseApiURL + '/api/?page='+page+'&results='+results+
    '&seed= '+seed+' ').pipe(map((response: any) => response.results));
  }


}
