import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPredefinedComponent } from './forms-predefined.component';

describe('FormsPredefinedComponent', () => {
  let component: FormsPredefinedComponent;
  let fixture: ComponentFixture<FormsPredefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPredefinedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsPredefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
