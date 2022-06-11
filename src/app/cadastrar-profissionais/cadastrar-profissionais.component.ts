import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-profissionais',
  templateUrl: './cadastrar-profissionais.component.html',
  styleUrls: ['./cadastrar-profissionais.component.css']
})
export class CadastrarProfissionaisComponent implements OnInit {

  //atributo
  mensagem: string = '';

  constructor(private httpCliente: HttpClient) { }

  ngOnInit(): void {
  }

  //estrutura do formulario
  formCadastro = new FormGroup ({
    //campos formulario
    nome: new FormControl('',[Validators.required]),
    salario: new FormControl('',[Validators.required]),
    profissao: new FormControl('',[Validators.required])

  })

  //acessando o formulario/pagina HTML pegando dados tela
  get form():any{
    return this.formCadastro.controls;
  }

//fazer chamada de cadastro na API
onSubmit(): void{
  this.httpCliente.post(environment.apiUrl+'/profissionais',
  this.formCadastro.value,{responseType: 'text'}).subscribe(
    data =>{
      this.mensagem = data;
      this.formCadastro.reset();
    },
    e => {
      this.mensagem = "Cadastro nao realizado";
      console.log(e);
    }
  )
}
}
