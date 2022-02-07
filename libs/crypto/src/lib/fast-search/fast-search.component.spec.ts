import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFastSearchComponent } from './fast-search.component';

describe('CryptoFastSearchComponent', () => {
  let component: CryptoFastSearchComponent;
  let fixture: ComponentFixture<CryptoFastSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoFastSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoFastSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
