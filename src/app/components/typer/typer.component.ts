import { Component,OnInit } from "@angular/core";
import text from "src/assets/text";
@Component({
    "selector":"app-typer",
    "templateUrl":"./typer.component.html",
    "styleUrls":["./typer.component.scss"]
})
export class TyperComponent implements OnInit {
    myText:string=text;

    correctWords:number=0;
    mistakes:number=0;
    sentences:number=0;
    constructor(){}
    ngOnInit():void{

    }
    onUpdateText($e:any){
        let text:any=$e.target.value[$e.target.value.length-1];
        console.log(text);
        console.log(this.myText[$e.target.value.length-1]);
        if(text==this.myText[$e.target.value.length-1]){
            this.correctWords++;
            text=="."&&this.sentences++;
            
        }else
        {
            this.mistakes++;
        }
    }
}
