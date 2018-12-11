import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './views/news-list/news-list.component';
import { NewsDetailComponent } from './views/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'detail', component: NewsDetailComponent },
  // { path: '',   redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  exports: [
    RouterModule 
  ],
  imports: [
    RouterModule.forRoot(routes) 
  ]
})
export class RoutesModule {}