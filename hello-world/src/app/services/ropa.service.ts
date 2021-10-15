import { Injectable } from "@angular/core";

@Injectable()
export class RopaServices{
    
    public nombre_prenda = 'Pantalones jeans';
    public coleccion_ropa =['Pnatalones blancos','camiseta roja'];

    prueba(nombre_prenda)
    {
        return nombre_prenda;
    }
            //parametro ingreso  : param salida 
    addRopa(nombre_prenda:string):Array<string>
    {
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa()
    {
        return this.coleccion_ropa;
    }
    deleteRopa(index:number)
    {
        this.coleccion_ropa.splice(index,1)
        return this.getRopa();
    }

}