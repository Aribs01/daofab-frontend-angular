import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ChildInterface } from 'src/app/interfaces/child.interface';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  displayedColumns: string[] = [
    'id',
    'sender',
    'receiver',
    'paidAmount',
  ];

  dataSource: MatTableDataSource<ChildInterface> | null = null;

  getSub!: Subscription;

  constructor(private dataTableService: DataTableService) {}

  ngOnInit(): void {
    this.getChildrenByParentId();
  }

  getChildrenByParentId(
    parentId = 1
  ) {
    this.getSub = this.dataTableService
      .getChildrenByParentId(parentId)
      .subscribe((data: ChildInterface[]) => {
        if (data) {
          console.log(data);
          
          const modifiedCountryList: ChildInterface[] = [...data];
          this.dataSource = new MatTableDataSource(modifiedCountryList);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

}
