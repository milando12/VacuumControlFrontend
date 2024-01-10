import { Component, OnInit } from '@angular/core';
import { VacuumService } from "../../services/vacuum.service";
import { Error } from "../../model";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errors: Error[] = [];

  constructor(private vacuumService: VacuumService) {}

  ngOnInit(): void {
    this.fetchErrors();
  }

  fetchErrors(): void {
    this.vacuumService.getAllVacuumErrors()
      .subscribe(
        (result) => {
          this.errors = result;
        },
        (error) => {
          console.error('Error fetching vacuum errors:', error);
        }
      );
  }
}
