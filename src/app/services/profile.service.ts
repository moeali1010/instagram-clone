import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersPosts } from '../model/usersposts';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseApiURL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getProfileData( idName , idValue): Observable<UsersPosts[]> {
    return this.http.get<UsersPosts[]>(this.baseApiURL + '/api').pipe(map((response: any) => response.results[0]));
  }
}
