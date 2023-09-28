import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceGatitos } from '../interfaces/interface-gatitos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceGatitosService {

  constructor(private http:HttpClient) { }

  listarGatitos():Observable<InterfaceGatitos>{
    return this.http.get<InterfaceGatitos>(`${environment.apiURL}/gatitos`)
  }
}
