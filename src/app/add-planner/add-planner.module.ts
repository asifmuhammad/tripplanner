import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlannerPageRoutingModule } from './add-planner-routing.module';

import { AddPlannerPage } from './add-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlannerPageRoutingModule
  ],
  declarations: [AddPlannerPage]
})
export class AddPlannerPageModule {}
