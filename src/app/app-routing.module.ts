import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'overview', component: OverviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
