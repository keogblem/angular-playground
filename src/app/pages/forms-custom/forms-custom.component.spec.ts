import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCustomComponent } from './forms-custom.component';

describe('FormsCustomComponent', () => {
  let component: FormsCustomComponent;
  let fixture: ComponentFixture<FormsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
