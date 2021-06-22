import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeProductsComponent } from './some-products.component';

describe('SomeProductsComponent', () => {
  let component: SomeProductsComponent;
  let fixture: ComponentFixture<SomeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
