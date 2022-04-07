import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecommandationComponent } from './ajouter-recommandation.component';

describe('AjouterRecommandationComponent', () => {
  let component: AjouterRecommandationComponent;
  let fixture: ComponentFixture<AjouterRecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRecommandationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
