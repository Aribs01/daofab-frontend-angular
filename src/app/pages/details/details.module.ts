import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/components/component.module';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [ComponentModule, RouterModule.forChild(routes)],
})
export class DetailsModule {}
