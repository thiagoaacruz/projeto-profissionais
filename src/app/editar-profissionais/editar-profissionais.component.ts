import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-editar-profissionais',
  templateUrl: './editar-profissionais.component.html',
  styleUrls: ['./editar-profissionais.component.css']
})
export class EditarProfissionaisComponent implements OnInit {
  //atributo
  mensagem: string = '';


  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute) { }


  //Função é executada quando a página é aberta
  ngOnInit(): void {
  //capturar o id enviado pela URL

  const idProfissionais = this.activatedRoute.snapshot.paramMap.get('id') as string;

  //consultar o profissional na API através do id
  this.httpClient.get(environment.apiUrl + "/profissionais/" + idProfissionais).subscribe(

    (data:any) =>{

      //preenchendo os campos do formulário com os dados do profissional
      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }
//montando a estrutura do formulário
formEdicao = new FormGroup({
  //campos do formulário...seerão os mesmo campos
  //que temos na consulta....

  idProfissionais: new FormControl(''),
  nome: new FormControl('',[Validators.required]),
  salario: new FormControl('',[Validators.required]),
  profissao: new FormControl('',[Validators.required]),

});

get form():any{

  return this.formEdicao.controls;

}

//função para fazer a camada do edição na API
onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/profissionais', this.formEdicao.value,
  {responseType: 'text'})
  .subscribe(
    data => {
      this.mensagem = data;
    },
    e =>{

      this.mensagem = "Ocorreu um erro, a edição não foi realizada."
      console.log(e);

    }

  )

}




}
