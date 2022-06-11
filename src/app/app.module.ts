import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProfissionaisComponent } from './cadastrar-profissionais/cadastrar-profissionais.component';
import { ConsultarProfissionaisComponent } from './consultar-profissionais/consultar-profissionais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProfissionaisComponent } from './editar-profissionais/editar-profissionais.component';


const routes: Routes = [

  {path: 'cadastrar-profissionais', component: CadastrarProfissionaisComponent},
  {path: 'consultar-profissionais', component: ConsultarProfissionaisComponent},
  {path: 'editar-profissionais/:id', component: EditarProfissionaisComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProfissionaisComponent,
    ConsultarProfissionaisComponent,
    EditarProfissionaisComponent,
    AccountComponent,
    LoginComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
