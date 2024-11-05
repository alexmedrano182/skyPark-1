// solicitud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = 'http://localhost:3000/api/solicitudes';

  constructor(private http: HttpClient) { }

  guardarSolicitud(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  obtenerSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
