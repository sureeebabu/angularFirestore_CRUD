import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor(private firestore: AngularFirestore) { }
  getEmployees() {
    return this.firestore.collection('employees', ref =>
    ref .orderBy('empCode')
        .limit(10)
        // .startAt('ask')Auto Complete -> https://angularfirebase.com/lessons/typeahead-autocomplete-with-firestore/
        // .endAt('ask\uf8ff')
    ).snapshotChanges();
  }
}
