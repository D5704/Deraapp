import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeraComponent } from './dera.component';

describe('DeraComponent', () => {
  let component: DeraComponent;
  let fixture: ComponentFixture<DeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
