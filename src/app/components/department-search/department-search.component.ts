import { Component } from '@angular/core';

@Component({
  selector: 'app-department-search',
  templateUrl: './department-search.component.html'
})
export class DepartmentSearchComponent {
	
  departmentId = '';
  searchedDeptId = '';

  search() {
    this.searchedDeptId = this.departmentId.trim();
  }
}
