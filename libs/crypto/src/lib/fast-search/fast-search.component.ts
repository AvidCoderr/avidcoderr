import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime, first } from 'rxjs';
import { CryptoInfo } from '../crypto.model';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'ac-crypto-fast-search',
  templateUrl: './fast-search.component.html',
  styleUrls: ['./fast-search.component.scss'],
})
export class CryptoFastSearchComponent implements OnInit {
  form: FormGroup;
  info = {} as CryptoInfo;

  constructor(private fb: FormBuilder, private cryptoService: CryptoService) {
    this.form = this.fb.group({
      query: [''],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe((symbol) => {
      this.cryptoService
        .searchAPI(symbol, 'fast')
        .pipe(first())
        .subscribe((info) => {
          this.info = info;
        });
    });
  }
}
