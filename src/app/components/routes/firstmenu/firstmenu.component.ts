import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-firstmenu',
  templateUrl: './firstmenu.component.html',
  styleUrls: ['./firstmenu.component.scss']
})
export class FirstmenuComponent implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void {}
  onClickEvent(){
    //this.router.navigateByUrl("/reactive-cv");
    this.router.navigate(['sub-menu','here']);
  }
  goToProduct(){
    //this.router.navigate(['product','sIpTrKuD','demir-kapi']);
    
  }

}
