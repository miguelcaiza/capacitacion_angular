import { Component } from "@angular/core";

@Component({
    selector:'productos',
    templateUrl:'./productos.component.html'
})

export class ProductosComponent{
    public nombre_componente = 'Componente de productos';
    public listado_productos = 'Naranjas, Manzana y Sandia';

    public nombre:string = "Miguel";
    public edad:number = 34;
    public mayorEdad:boolean = true;
    public trabajos:Array<string> = ["Carpintero","Albañil","Ingeniero"]
    public trabajosAny:Array<any> = ['Carpintero',44,'Ingeniero']

    comodin:any = 'Cualquier cosa';
    comodin2:any = 987;

    constructor(){
        this.nombre = "Caiza";
        this.edad = 89;
        this.mayorEdad = false;
        this.comodin = true;
    }

    ngOnInit()
    {
        this.cambiarNombre();
        this.cambiarEdad(35);
        console.log(this.nombre +" - "+this.edad)
        
        //diferencia Let y Var es el alcance
        //VAR es de manera global
        //LET es a nivel de bloque

        var uno = 7;
        var dos = 14;
        if(uno === 7){
            let uno = 2;
            var dos = 5;
            console.log("DENTRO DE IF : "+uno+" "+dos);
        }
        console.log("FUERA DE IF : "+uno+" "+dos);
    }

    cambiarNombre()
    {
        this.nombre = "Alejandro";
    }

    cambiarEdad(edad:number)
    {
        this.edad = edad;
    }
}

