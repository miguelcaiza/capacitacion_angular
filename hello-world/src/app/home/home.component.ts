import { Component } from "@angular/core";
import { RopaServices } from "../services/ropa.service"; //impoertamos el servicio

@Component({
    selector: 'home',
    templateUrl : './home.component.html',
    providers: [RopaServices] //genera instacia de este objeto
})

export class HomeComponent{
    public titulo = "Pagina Principal";
    public listado_ropa:Array<String>;
    public prenda_a_guardar:string;

    public fecha; //ejemplo pipe fecha

    public nombre = "Miguel Caiza Iza";

    constructor(
        private _ropaService: RopaServices //intancia de ropaService ya esta inyectado en la clase
    )
    {
        this.fecha = new Date(2021,10,14);
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba("camiseta nike"));
        console.log(this.listado_ropa);
    }

    guardarPrenda()
    {
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = ""; //vaciar la variable luego de guardar
    }

    eliminarPrenda(index:number)
    {
        this._ropaService.deleteRopa(index);
    }
}