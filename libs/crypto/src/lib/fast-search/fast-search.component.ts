import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'ac-crypto-fast-search',
  templateUrl: './fast-search.component.html',
  styleUrls: ['./fast-search.component.scss'],
})
export class CryptoFastSearchComponent {
  private destroy$ = new Subject<void>();
  constructor(private http: HttpClient) {}
}
