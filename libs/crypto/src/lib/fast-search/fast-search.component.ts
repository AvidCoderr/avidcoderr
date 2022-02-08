import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { CryptoInfo } from '../crypto.model';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'ac-crypto-fast-search',
  templateUrl: './fast-search.component.html',
  styleUrls: ['./fast-search.component.scss'],
})
export class CryptoFastSearchComponent implements OnInit, OnDestroy {
  query = new FormControl('');
  info = {} as CryptoInfo;
  private destroy$ = new Subject<void>();

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.query.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((symbol) => this.cryptoService.searchAPI(symbol, 'fast')),
        takeUntil(this.destroy$)
      )
      .subscribe((info) => {
        this.cryptoService.setState(info);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
