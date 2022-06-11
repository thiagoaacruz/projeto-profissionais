import { environment } from 'src/environments/environment';;
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-profissionais',
  templateUrl: './consultar-profissionais.component.html',
  styleUrls: ['./consultar-profissionais.component.css']
})
export class ConsultarProfissionaisComponent implements OnInit {

  //injeçao de dependencia
  constructor(private httpClient : HttpClient) { }

  //atributos para armazenas os dados dos profissionais
  profissionais: any[] = [];

  //metodo de execuçao quando componente é aberto
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/profissionais').subscribe(
      (data) => { this.profissionais = data as any[]; },
      (e) => { console.log(e);

      }
    )
  }
  //função para fazer a exclusão do profissional na API
  excluir(idProfissionais:number):void{

    if(window.confirm('Deseja realmente excluir o profissional selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/profissionais/" + idProfissionais,
      {responseType : 'text'})
      .subscribe(
        (data) =>{

          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit(); //recarregar a consulta de profissionais

        },
        (e)=>{
          console.log(e);
        }
      )
    }

  }
}
