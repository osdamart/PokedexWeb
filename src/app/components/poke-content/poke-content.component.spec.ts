import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeContentComponent } from './poke-content.component';

describe('PokeContentComponent', () => {
  let component: PokeContentComponent;
  let fixture: ComponentFixture<PokeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
