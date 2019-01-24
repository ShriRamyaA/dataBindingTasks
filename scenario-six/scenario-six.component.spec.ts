import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioSixComponent } from './scenario-six.component';

describe('ScenarioSixComponent', () => {
  let component: ScenarioSixComponent;
  let fixture: ComponentFixture<ScenarioSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
