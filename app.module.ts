import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScenarioOneComponent } from './scenario-one/scenario-one.component';
import { ScenarioTwoComponent } from './scenario-two/scenario-two.component';
import { ScenarioThreeComponent } from './scenario-three/scenario-three.component';
import { ChildComponent } from './scenario-three/child/child.component';
import { ScenarioFourComponent } from './scenario-four/scenario-four.component';
import { ChildFourComponent } from './scenario-four/child-four/child-four.component';
import { ScenarioFiveComponent } from './scenario-five/scenario-five.component';
import { ChildOneComponent } from './scenario-five/child-one/child-one.component';
import { ChildTwoComponent } from './scenario-five/child-one/child-two/child-two.component';
import { ScenarioSixComponent } from './scenario-six/scenario-six.component';
import { SecondChildComponent } from './scenario-six/second-child/second-child.component';
import { WorkChildComponent } from './scenario-six/work-child/work-child.component';




@NgModule({
  declarations: [
    AppComponent,
    ScenarioOneComponent,
    ScenarioTwoComponent,
    ScenarioThreeComponent,
    ChildComponent,
    ScenarioFourComponent,
    ChildFourComponent,
    ScenarioFiveComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ScenarioSixComponent,
    SecondChildComponent,
    WorkChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
