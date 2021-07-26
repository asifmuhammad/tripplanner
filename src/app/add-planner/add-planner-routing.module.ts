import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlannerPage } from './add-planner.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlannerPageRoutingModule {}
