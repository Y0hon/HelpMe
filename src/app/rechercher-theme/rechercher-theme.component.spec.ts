import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherThemeComponent } from './rechercher-theme.component';

describe('RechercherThemeComponent', () => {
  let component: RechercherThemeComponent;
  let fixture: ComponentFixture<RechercherThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
