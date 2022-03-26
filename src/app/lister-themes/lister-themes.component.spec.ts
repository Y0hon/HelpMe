import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerThemesComponent } from './lister-themes.component';

describe('ListerThemesComponent', () => {
  let component: ListerThemesComponent;
  let fixture: ComponentFixture<ListerThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
