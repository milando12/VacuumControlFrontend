// example of class
export class PostClass {
  constructor(public userId: number,
              public id: number,
              public title: string,
              public body: string) {
  }

  getTitle(){
    return this.title.toUpperCase();
  }
}
export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  permissions: string;
}
export interface UserNoPassword {
  id: number;
  name: string;
  surname: string;
  email: string;
  permissions: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
}
// models.ts

export interface FilterRequest {
  name?: string;
  statuses?: string[];
  dateFrom?: string;
  dateTo?: string;
}
// models.ts

export interface VacuumRequest {
  id: number;
  name: string;
  status: string;
  creationTime: string;
}

export interface VacuumError {
  // Define VacuumError properties as needed
}

export interface ScheduleResponse {
  scheduledTime:string; // "yyyy-MM-dd HH:mm:ss"
  operation:string;
}

export interface Error {
  id: number;
  message: string;
  operation: string;
  date: string;
}
// {
//   "id": 1,
//   "message": "Vacuum was busy.",
//   "operation": "START",
//   "date": "2024-01-10"
// }
;


