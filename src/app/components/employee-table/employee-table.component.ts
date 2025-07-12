import { Component, Input, OnChanges } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html'
})
export class EmployeeTableComponent implements OnChanges {
  @Input() departmentId: string = '';
  employees: Employee[] = [];

  constructor(private empService: EmployeeService, private router: Router) {}

  ngOnChanges() {
    if (this.departmentId) {
      this.empService.getEmployeesByDepartment(this.departmentId)
        .subscribe(data => this.employees = data);
    } else {
    this.empService.getAllEmployees()
      .subscribe(data => this.employees = data);
  }
  }

  viewDetails(empId: string) {
    this.router.navigate(['/employee', empId]);
  }

  delete(empId: string) {
    this.empService.deleteEmployee(empId).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== empId);
    });
  }
}
