import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstroUsuarioComponent } from './regstro-usuario.component';

describe('RegstroUsuarioComponent', () => {
  let component: RegstroUsuarioComponent;
  let fixture: ComponentFixture<RegstroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegstroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegstroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
