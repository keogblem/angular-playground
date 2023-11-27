import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCustomFormComponent } from './forms-custom-form.component';

describe('FormsCustomFormComponent', () => {
  let component: FormsCustomFormComponent;
  let fixture: ComponentFixture<FormsCustomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCustomFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
