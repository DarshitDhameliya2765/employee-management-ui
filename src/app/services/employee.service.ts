import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getEmployeesByDepartment(deptId: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees/department/${deptId}`);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/employees/department/${emp.departmentId}`, emp);
  }

  deleteEmployee(empId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${empId}`);
  }
}
