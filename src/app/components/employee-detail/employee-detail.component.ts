import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.empService.getEmployee(id).subscribe(emp => this.employee = emp);
  }

  save() {
    this.empService.updateEmployee(this.employee).subscribe();
  }
}
