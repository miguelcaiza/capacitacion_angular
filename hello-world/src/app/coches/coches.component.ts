import { Component } from "@angular/core";
import { Coche } from "./coche";
import { PeticionesService } from "../services/peticiones.service";


@Component ({

    selector:'coches',
    templateUrl:'./coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent
{
    public coche:Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(private _peticionesService: PeticionesService){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat","120","Blanco"),
            new Coche("Renault","150","Azul")
        ];
    }

    ngOnInit()
    {
        this._peticionesService.getArticulos().subscribe((data: any)=>{
            console.log(data);
            this.articulos = data;

            if(!this.articulos){
                console.log("Error en el servicio");
            }
        },
        error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
        }
        )

    }

    onSubmit()
    {
        this.coches.push(this.coche);

        console.log(this.coche);
        this.coche = new Coche("","",""); 
    }
}