import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PugBgComponent } from './pug-bg-component';

describe('PugBgComponent', () => {
  let component: PugBgComponent;
  let fixture: ComponentFixture<PugBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PugBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PugBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
