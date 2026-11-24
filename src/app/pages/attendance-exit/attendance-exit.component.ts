
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance-exit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-exit.component.html',
  styleUrls: ['./attendance-exit.component.css']
})
export class AttendanceExitComponent implements OnInit {

  conferenceId: number = 0;
  controlNumber: string = '';
  isLoading: boolean = false;

  message: string = '';
  messageType: 'success' | 'error' | null = null;

  constructor(
    private route: ActivatedRoute,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.conferenceId = Number(params['id']);
    });
  }

  onSubmit(): void {

    if (!this.controlNumber || this.controlNumber.length < 8) {
      this.message = 'Ingresa un número de control válido.';
      this.messageType = 'error';
      return;
    }

    if (!this.conferenceId) {
      this.message = 'No se encontró la conferencia.';
      this.messageType = 'error';
      return;
    }

    this.isLoading = true;
    this.message = '';
    this.messageType = null;

    const data = {
      control_number: this.controlNumber.trim(),
      conference_id: this.conferenceId
    };

    this.attendanceService.registerExit(data).subscribe({
      next: () => {
        this.isLoading = false;
        this.message = '¡Salida registrada correctamente!';
        this.messageType = 'success';
        this.controlNumber = '';
      },
      error: (error) => {
        this.isLoading = false;
        this.message = error.error?.message ||
          'No se pudo registrar la salida.';
        this.messageType = 'error';
      }
    });
  }
}

