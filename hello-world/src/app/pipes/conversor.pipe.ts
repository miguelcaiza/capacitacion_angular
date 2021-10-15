import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(value, por){ //siempre viene como string a un pipe
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicacion : "+ value_one +" X "+value_two+" = "+(value_one * value_two);

        return result;
    }
}