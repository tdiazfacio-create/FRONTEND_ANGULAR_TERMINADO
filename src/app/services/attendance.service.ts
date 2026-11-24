import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = environment.apiUrl;   


  constructor(private http: HttpClient) { }

  requestAttendance(data: { control_number: string, conference_id: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/attendance/request`, data);
  }

  confirmAttendance(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/confirm/${token}`);
  }
  
registerExit(data: { control_number: string, conference_id: number }): Observable<any> {
  return this.http.post(`${this.apiUrl}/attendance/exit`, data);
}

}