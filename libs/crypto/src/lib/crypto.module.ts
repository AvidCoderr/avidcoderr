import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoFastSearchComponent } from './fast-search/fast-search.component';
import { CryptoSlowSearchComponent } from './slow-search/slow-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CryptoFastSearchComponent, CryptoSlowSearchComponent],
})
export class CryptoModule {}
