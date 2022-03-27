import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStudentComponent } from './ajouter-student.component';

describe('AjouterStudentComponent', () => {
  let component: AjouterStudentComponent;
  let fixture: ComponentFixture<AjouterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
