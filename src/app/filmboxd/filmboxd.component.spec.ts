import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmboxdComponent } from './filmboxd.component';

describe('FilmboxdComponent', () => {
  let component: FilmboxdComponent;
  let fixture: ComponentFixture<FilmboxdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmboxdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmboxdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
