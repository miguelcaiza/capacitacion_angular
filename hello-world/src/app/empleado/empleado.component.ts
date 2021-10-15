import { Component } from "@angular/core";
import { Empleado } from "./empleado";
import { CommonModule } from "@angular/common";

@Component({
    selector:'empleado-tag',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'componente empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string; //two way data-binding

    constructor()
    {
        this.empleado = new Empleado("Miguel Caiza",34,"Ingeniero",false)
        this.trabajadores = [new Empleado("Miguel Caiza",34,"Ingeniero",false),
        new Empleado("Alejandro",37,"Ingeniero",false),
        new Empleado("Raul",56,"Ingeniero",true),
        new Empleado("Cris",23,"Arquitecta",true)];

        this.trabajador_externo = true;
        this.color = "green";
        this.color_seleccionado = "#ccc";
    }

    ngOnInit()
    {
        //this.empleado = new Empleado("Miguel Caiza",34,"Ingeniero",true)
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor:boolean)
    {
        this.trabajador_externo = valor

    }

    logColorSelector()
    {
        console.log(this.color_seleccionado);
    }
}