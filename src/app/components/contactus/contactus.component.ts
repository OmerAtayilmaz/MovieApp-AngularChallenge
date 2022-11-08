import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { ContactMessage } from 'src/app/model/contact-message';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  statusList:string[]=[];
  contactModel:ContactMessage=new ContactMessage("iş başvurusu","CV'm ektedir.","başvuru","example@enoca.io",555555,"open");
 
  constructor() { }

  ngOnInit(): void {
    this.statusList=["important","warning","error","bug"];;
  }

  onSubmit(e:any){
    console.log(e);
  }
}
