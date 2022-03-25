import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Celebrity } from 'src/app/shared/interfaces/celebrity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  celebritysKey: string = 'celebritys';

  private celebritys$ = new BehaviorSubject<Celebrity[] | undefined>(undefined);

  getCelebritys(): Observable<Celebrity[] | undefined> {
    return this.celebritys$.asObservable();
  }

  setCelebritys(celebritys: Celebrity[] | undefined) {
    this.celebritys$.next(celebritys);
    localStorage.setItem(this.celebritysKey, JSON.stringify(celebritys))
  }

  constructor(private httpClient: HttpClient) { }

  getOriginalData() {
    return this.httpClient.get(`${environment.dataURL}`).pipe(map((res: any) => { return res.data; }));;
  }

  getAllFromStorage() {
    return localStorage.getItem(this.celebritysKey);
  }

}
