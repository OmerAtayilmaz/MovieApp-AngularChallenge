import {AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators,FormArray} from "@angular/forms";
import { forbiddenNameValidator } from 'src/app/validators/cv-form.validators';
@Component({
  selector: 'app-reactive-cv',
  templateUrl: './reactive-cv.component.html',
  styleUrls: ['./reactive-cv.component.scss']
})
export class ReactiveCvComponent implements OnInit,OnDestroy,AfterViewInit,DoCheck {

  cvForm=this.formBuilder.group({
    name:["",[Validators.minLength(25),forbiddenNameValidator]],
    title:[""],
    about:[""],
    email:[""],
    address:this.formBuilder.group({
      city:[""],
      state:[""],
      country:[""]
    }),
    education:this.formBuilder.group({
      firstSchool:[""],
      highSchool:[""],
      licence:[""],
      mastery:[""]
    }),
    alternativeEmails:this.formBuilder.array([])
  });
 /* cvForm=new FormGroup({
    name:new FormControl(),
    title:new FormControl(),
    about:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      country:new FormControl()
    }),
    education:new FormGroup({
      firstSchool:new FormControl("First school"),
      highSchool:new FormControl("Kadri Şaman MTSO"),
      licence:new FormControl("Karabuk University"),
      mastery:new FormControl(null)
    })
  });
  */

  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {}
  ngOnDestroy():void{
    //teardown
  }
  ngAfterViewInit():void{
    //child views loaded
  }
  ngDoCheck():void{} //change detection


  onSubmit(){
    console.log(this.cvForm.value);
  }
  loadData(){
    this.cvForm.setValue({
      name:"Ahmet",
      title:"Full Stack Developer",
      about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum maxime totam aut neque saepe consequuntur quibusdam, quisquam quasi voluptatum quis rerum! Debitis quae laboriosam culpa soluta iste aliquid assumenda? Beatae, quos quia! Aperiam debitis mollitia voluptates provident quidem recusandae officia similique, ex eveniet itaque iure consequatur fugiat ea incidunt aliquid!",
      address:{
        city:"Karabük",
        state:"Ohio",
        country:"The United State of America"
      },
      education:{
        firstSchool:"Unknown",
        highSchool:"Kadri Şaman MTSO",
        licence:"Karabük Üniversity",
        mastery:null
      }
    });
  }


  get name(){
    return this.cvForm.get("name");
  }
  get title(){
    return this.cvForm.get("title");
  }

  get about(){
    return this.cvForm.get("about");
  }
  get alternativeEmails(){
    return this.cvForm.get("alternativeEmails")  as FormArray;
  }

  get email(){
    return this.cvForm.get("email");
  }
  addAlternativeEmail(){
    this.alternativeEmails.push(this.formBuilder.control(''));
  }
}
