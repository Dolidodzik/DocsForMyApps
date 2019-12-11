import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubpageComponent } from './subpage/subpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project/:project_name/:category', component: SubpageComponent },
    { path: '404', component: NotFoundComponent },
    //{ path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
