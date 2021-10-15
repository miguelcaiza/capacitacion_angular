import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, RouterEvent } from "@angular/router";

//Importacion de componentes
import { EmpleadoComponent } from "./empleado/empleado.component";
import { ProductosComponent } from "./productos/productos.component";

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from "./coches/coches.component";

import { PlantillasComponent } from "./plantillas/plantillas.component";

const appRoutes:Routes=[
    {path:'',component:HomeComponent}, //pagina home
    {path: 'empleado',component: EmpleadoComponent},
    {path: 'productos',component: ProductosComponent},
    {path: 'Pagina-Principal',component: HomeComponent},
    {path: 'contactos',component: ContactoComponent},
    {path: 'contactos/:page',component: ContactoComponent},
    {path: 'coches',component: CochesComponent},
    {path: 'plantillas',component: PlantillasComponent},
    {path:'**',component:HomeComponent} //pagina cuando se producce un errores
];

export const appRoutingProviders: any[]=[]; //para poder cargar el provider de la ruta y funcione
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);//que aaray de rutas debe cargar