import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioThreeComponent } from './scenario-three.component';

describe('ScenarioThreeComponent', () => {
  let component: ScenarioThreeComponent;
  let fixture: ComponentFixture<ScenarioThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
