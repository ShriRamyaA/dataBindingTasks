import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioFiveComponent } from './scenario-five.component';

describe('ScenarioFiveComponent', () => {
  let component: ScenarioFiveComponent;
  let fixture: ComponentFixture<ScenarioFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
