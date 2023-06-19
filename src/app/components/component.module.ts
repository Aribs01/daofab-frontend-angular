import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [LoaderComponent, TopbarComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [
    CommonModule,
    LoaderComponent,
    TopbarComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class ComponentModule {}
