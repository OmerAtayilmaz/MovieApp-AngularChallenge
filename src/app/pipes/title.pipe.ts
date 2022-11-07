import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name:'title'
})
export class TitlePipe implements PipeTransform{
    transform(text:string):string{
        return `${text.toUpperCase()}-${text.toLowerCase()}`;
    }
};
