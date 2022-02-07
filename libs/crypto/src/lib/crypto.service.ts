import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CryptoInfo, CryptoState, ServerType } from './crypto.model';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  //  Crypto state
  state = {} as CryptoState;

  constructor(private http: HttpClient) {}

  setState(state: CryptoState): void {
    this.state = { ...this.state, ...state };
  }

  searchAPI(symbol: string, speed: ServerType): Observable<CryptoInfo> {
    this.state.inProgress = true;
    return this.http.get<CryptoInfo>(`/${speed}/api/${symbol}`).pipe(
      tap(() => {
        this.state.inProgress = false;
      })
    );
  }
}
