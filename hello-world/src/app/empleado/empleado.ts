export class Empleado{
    

    /*public nombre;
    public edad;

    constructor(nombre:string, edad:number)
    {
        this.nombre = nombre;
        this.edad = edad;
    }*/

    constructor(
        public nombre:string, 
        public edad:number, 
        public cargo:string, 
        public contratado:boolean)
    {}
}