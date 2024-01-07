import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {VacuumService} from "../../services/vacuum.service";
import {VacuumRequest} from "../../model";

@Component({
  selector: 'app-search-vacuums',
  templateUrl: './search-vacuums.component.html',
  styleUrls: ['./search-vacuums.component.css']
})
export class SearchVacuumsComponent implements OnInit {
  vacuums: VacuumRequest[] = [];
  searchName: string = '';
  statusFilters: any = { RUNNING: false, STOPPED: false, DISCHARGING: false };
  dateFrom: string = '';
  dateTo: string = '';
  newVacuumName: string = '';

  constructor(private router: Router, public auth:AuthService,private vacuumService: VacuumService) {}

  ngOnInit(): void {
    this.searchVacuums();
  }

  searchVacuums(): void {
    const statuses = Object.keys(this.statusFilters).filter((key) => this.statusFilters[key]);
    this.vacuumService.searchVacuums(this.searchName, statuses, this.dateFrom, this.dateTo)
      .subscribe(
        (result) => {
          this.vacuums = result;
        },
        (error) => {
          console.error('Error fetching vacuums:', error);
        }
      );
  }

  removeVacuum(vacuumId: number): void {
    this.vacuumService.removeVacuum(vacuumId)
      .subscribe(
        (result) => {
          this.searchVacuums();
        },
        (error) => {
          console.error('Error fetching vacuums:', error);
        }
      );
  }

  addVacuum(): void {
    this.vacuumService.addVacuum(this.newVacuumName)
      .subscribe(
        (result) => {
          this.searchVacuums();
          this.newVacuumName = '';
        },
        (error) => {
          console.error('Error fetching vacuums:', error);
        }
      );
  }


}
