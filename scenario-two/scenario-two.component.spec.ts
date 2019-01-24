import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTwoComponent } from './scenario-two.component';

describe('ScenarioTwoComponent', () => {
  let component: ScenarioTwoComponent;
  let fixture: ComponentFixture<ScenarioTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
