import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioFourComponent } from './scenario-four.component';

describe('ScenarioFourComponent', () => {
  let component: ScenarioFourComponent;
  let fixture: ComponentFixture<ScenarioFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
