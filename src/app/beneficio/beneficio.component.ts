import { Component, OnInit } from '@angular/core';
import { Beneficio } from './model/beneficio';
import { BeneficioService } from '../services/beneficio.service';
import { BeneficioTransferenciaDTO } from './model/beneficio-transferenciaDTO';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})

export class BeneficioComponent implements OnInit{

  beneficio!: Beneficio;
  beneficioTrensferencia!: BeneficioTransferenciaDTO;
  listaBeneficio: Beneficio[] =[];
  indexSelecionado!: number;
  exibirMsgSuccess: boolean =false;
  exibirMsgError: boolean =false;
  strMensagemRetorno! : string;
  colunas  =['acao', 'id', 'nome', 'descricao', 'valor'];


  constructor(
    private  beneficioService: BeneficioService
  ){
    this.beneficio = new Beneficio();
    this.beneficio.id = '0';
    this.beneficioTrensferencia = new BeneficioTransferenciaDTO();
  }

  ngOnInit(): void{
    this.iniciarLista();
  }

  newBeneficio(){
    this.beneficio = new Beneficio();
    this.beneficio.id = '0';
    this.exibirMsgError =false;
    this.exibirMsgSuccess = false;
    this.indexSelecionado = 1;
}

  iniciarLista(){
    this.beneficioService.getListaBeneficio().subscribe(response =>{
      this.listaBeneficio = response;
    });
  }

  transferirBeneficio(){
     this.beneficioService.transferirBeneficio(this.beneficioTrensferencia).subscribe( response => {
        this.exibirMsgSuccess = true;
        this.exibirMsgError =false;
      this.formatarMensagemRetornoSucesso(response);
     }, errorResponse =>{
          this.formatarMensagemRetornoError(errorResponse);
        this.exibirMsgSuccess = false;
        this.exibirMsgError =true;
     });

     this.iniciarLista();
  }

  cancelarTransferencia(){
    this.exibirMsgError =false;
    this.exibirMsgSuccess = false;
    this.strMensagemRetorno = '';
    this.beneficioTrensferencia  = new BeneficioTransferenciaDTO();
  }


  onSubmit(){
    console.log(this.beneficio);
  }

  create(){
    console.log(this.beneficio);
    this.beneficio.id = 'null';
    this.beneficio.ativo='true';
    this.beneficioService.create(this.beneficio).subscribe( response => {
      this.formatarMensagemRetornoSucesso(response);
      this.iniciarLista();
      this.indexSelecionado = 0;
    }, errorResponse =>{
              this.formatarMensagemRetornoError(errorResponse);
         });
      }

  update(){
    console.log('###############VRS: UPDATE ');
    console.log(this.beneficio);
    this.beneficioService.update(this.beneficio).subscribe( response => {
      this.iniciarLista();
      this.indexSelecionado = 0;
      this.formatarMensagemRetornoSucesso(response);
      console.log(response);
     }, errorResponse =>{
          this.formatarMensagemRetornoError(errorResponse);
     });
  }

  moveToSelectedTab(tabName: string, beleficioSelecionado:Beneficio) {
    this.indexSelecionado = 1;
    this.beneficio = beleficioSelecionado;
    this.exibirMsgError =false;
    this.exibirMsgSuccess = false;
    this.beneficioTrensferencia= new BeneficioTransferenciaDTO();
  }

  moveToSelectedTabCancel(tabName: string) {
    this.indexSelecionado = 0;
    this.exibirMsgError =false;
    this.exibirMsgSuccess = false;
    this.beneficioTrensferencia= new BeneficioTransferenciaDTO();
  }

  aoMudarAba(event: MatTabChangeEvent) {
    console.log('Índice selecionado:', event.index);
    console.log('Rótulo da aba:', event.tab.textLabel);

    this.exibirMsgError =false;
    this.exibirMsgSuccess = false;
    this.strMensagemRetorno = '';
  }

  formatarMensagemRetornoError(errorResponse: any){
        this.exibirMsgSuccess = false;
        this.exibirMsgError =true;
        this.strMensagemRetorno = errorResponse.error.message;
        this.strMensagemRetorno +=", "+errorResponse.error.codigoError;
        console.log(errorResponse.error)
        console.log(errorResponse.error.message)
        console.log(errorResponse.error.codigoError)
  }

  formatarMensagemRetornoSucesso(retornoSucesso: any){
          console.log(retornoSucesso)
          this.exibirMsgSuccess = true;
          this.exibirMsgError =false;
          this.beneficio.id = retornoSucesso.id;
          this.strMensagemRetorno = 'Benefício gravado com sucesso';
          console.log(retornoSucesso)
    }

}
