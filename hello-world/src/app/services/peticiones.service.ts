import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
//import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs-compat/operator/map";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()

export class PeticionesService{

    public url: string;

    constructor(private _http:HttpClient)
    {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba()
    {
        return "Hola mundo desde el servicio";
    }

    getArticulos()
    {
        return this._http.get(this.url);
    }


}