import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ParentDataInterface } from '../interfaces/parent.interface';
import { ChildInterface } from '../interfaces/child.interface';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  constructor(private http: HttpClient) {}

  getAllParent(pageNumber: number, pageSize: number) {
    return this.http.get<ParentDataInterface>(
      environment.BackendUrl +
        `parent/getAllParent?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  getChildrenByParentId(parentId: number) {
    return this.http.get<ChildInterface[]>(
      environment.BackendUrl +
        `child/getChildrenByParentId/${parentId}`
    );
  }
}
