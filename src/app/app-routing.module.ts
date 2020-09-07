import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogListComponent } from './log-list/log-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NeighborsComponent } from './neighbors/neighbors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'neighbors', component: NeighborsComponent },
  { path: 'incident', component: LogListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
