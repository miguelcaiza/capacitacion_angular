import { Component } from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router" //para enviar parametro por url

@Component({
    selector: 'contacto',
    templateUrl : './contacto.component.html'

})

export class ContactoComponent{
    public titulo = "Pagina de contacto de la web";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) =>{
            this.parametro = params['page'];
            console.log(params);
        });
    }

    reDirigir()
    {
        this._router.navigate(['./contactos','migualweb.es'])
    }
    reDirigirDos()
    {
        this._router.navigate(['./Pagina-Principal'])
    }
}