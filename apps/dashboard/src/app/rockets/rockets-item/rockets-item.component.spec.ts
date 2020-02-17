import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsItemComponent } from './rockets-item.component';

describe('RocketsItemComponent', () => {
  let component: RocketsItemComponent;
  let fixture: ComponentFixture<RocketsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
