import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsByActorComponent } from './films-by-actor.component';

describe('FilmsByActorComponent', () => {
  let component: FilmsByActorComponent;
  let fixture: ComponentFixture<FilmsByActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsByActorComponent]
    });
    fixture = TestBed.createComponent(FilmsByActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
