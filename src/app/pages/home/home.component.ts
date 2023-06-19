import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DefaultPagination } from 'src/app/enums/defaultPagination';
import {
  ParentInterface,
  ParentDataInterface,
} from 'src/app/interfaces/parent.interface';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'sender',
    'receiver',
    'totalAmount',
    'actions',
  ];

  dataSource: MatTableDataSource<ParentInterface> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getAllSub!: Subscription;
  totalRecords!: number;

  constructor(private dataTableService: DataTableService) {}

  ngOnInit(): void {
    this.getAllParents();
  }

  getAllParents(
    pageNumber = DefaultPagination.pageNumber,
    pageSize = DefaultPagination.pageSize
  ) {
    this.getAllSub = this.dataTableService
      .getAllParent(pageNumber, pageSize)
      .subscribe((data: ParentDataInterface) => {
        if (data) {
          const modifiedCountryList: ParentInterface[] = [...data.parents];
          this.dataSource = new MatTableDataSource(modifiedCountryList);
          this.totalRecords = data.totalNumber;
        }
      });
  }

  onPaginationChange(event: PageEvent) {
    this.getAllParents(event.pageIndex + 1, event.pageSize);
  }

  ngOnDestroy(): void {
    if (this.getAllSub) {
      this.getAllSub.unsubscribe();
    }
  }
}
