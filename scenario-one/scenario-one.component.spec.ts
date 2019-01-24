import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioOneComponent } from './scenario-one.component';

describe('ScenarioOneComponent', () => {
  let component: ScenarioOneComponent;
  let fixture: ComponentFixture<ScenarioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
