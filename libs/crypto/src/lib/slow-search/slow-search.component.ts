import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { CryptoInfo } from '../crypto.model';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'ac-crypto-slow-search',
  templateUrl: './slow-search.component.html',
  styleUrls: ['./slow-search.component.scss'],
})
export class CryptoSlowSearchComponent implements OnInit, OnDestroy {
  query = new FormControl('');
  info = {} as CryptoInfo;
  private destroy$ = new Subject<void>();

  constructor(public cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.query.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((symbol) => this.cryptoService.searchAPI(symbol, 'slow')),
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
