import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduireStockComponent } from './reduire-stock.component';

describe('ReduireStockComponent', () => {
  let component: ReduireStockComponent;
  let fixture: ComponentFixture<ReduireStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduireStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduireStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
