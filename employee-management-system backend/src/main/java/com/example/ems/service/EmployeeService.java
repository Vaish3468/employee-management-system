package com.example.ems.service;

import com.example.ems.model.Employee;
import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee saveEmployee(Employee employee);
    void deleteEmployee(Long id);
}
