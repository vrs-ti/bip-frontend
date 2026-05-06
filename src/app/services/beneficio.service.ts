import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficio } from '../beneficio/model/beneficio';
import { BeneficioTransferenciaDTO } from '../beneficio/model/beneficio-transferenciaDTO';
import { environment } from '@env';


@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  constructor(private http: HttpClient) { }

  urlbase:string = environment.urlBase;

  getBeneficio(): Beneficio {
    let beneficio = new Beneficio();
    return beneficio;
  }

  transferirBeneficio(beneficio: BeneficioTransferenciaDTO){
    return this.http.post(this.urlbase+'/transfer', beneficio);
  }

  create(beneficio: Beneficio){
    return this.http.post(this.urlbase+'/create', beneficio);
  }

    update(beneficio: Beneficio){
    return this.http.patch(this.urlbase, beneficio);
  }


  getListaBeneficio(): Observable<Beneficio[]>{
    return this.http.get<Beneficio[]>(this.urlbase);
  }


}
