import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; //two way data-binding

import { routing, appRoutingProviders } from './app.routing';


import { ProductosComponent } from './productos/productos.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe } from './pipes/conversor.pipe'; //Importar mi pipe a nivel global
import { CochesComponent } from './coches/coches.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    EmpleadoComponent,
    ClientesComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule, //two way data-binding
    routing,
    HttpClientModule //importar en imports
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
