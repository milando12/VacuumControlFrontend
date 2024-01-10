import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacuumService } from "../../services/vacuum.service";
import { ScheduleResponse } from "../../model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  vacuumId: number;
  scheduledTime: string;

  constructor(private route: ActivatedRoute, private vacuumService: VacuumService, public auth:AuthService) {
    this.vacuumId = -1;
    this.scheduledTime = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vacuumId = +params.get('id')!;
    });

    // Prefill the scheduledTime with the current time in the required format
    this.scheduledTime = this.getCurrentTimeFormatted();
  }


  getCurrentTimeFormatted(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padZero(now.getMonth() + 1); // Month is 0-based
    const day = this.padZero(now.getDate());
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    const seconds = this.padZero(now.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  scheduleOperation(operation: string): void {
    const scheduleRequest: ScheduleResponse = {
      scheduledTime: this.scheduledTime,
      operation: operation
    };

    this.vacuumService.scheduleOperation(this.vacuumId, scheduleRequest)
      .subscribe(
        (result) => {
          // Handle success if needed
          console.log('Operation scheduled successfully');
        },
        (error) => {
          console.error('Error scheduling operation:', error);
        }
      );
  }
}
