import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('src/app/pages/details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
