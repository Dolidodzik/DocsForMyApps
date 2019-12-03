import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubpageComponent } from './subpage/subpage.component';

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'project/:project_name/:category', component: SubpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
