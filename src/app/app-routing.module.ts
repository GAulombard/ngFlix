import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { ShowListComponent } from './pages/show-list/show-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: ShowDetailComponent },
  { path: 'list', component: ShowListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
