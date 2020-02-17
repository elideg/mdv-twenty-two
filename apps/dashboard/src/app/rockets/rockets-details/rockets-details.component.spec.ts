import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsDetailsComponent } from './rockets-details.component';

describe('RocketsDetailsComponent', () => {
  let component: RocketsDetailsComponent;
  let fixture: ComponentFixture<RocketsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
