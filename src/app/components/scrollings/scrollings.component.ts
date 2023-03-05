import { Component, OnInit } from '@angular/core';
interface Product {
  id:number,
  name:string,
  price:number
}

@Component({
  selector: 'app-scrollings',
  templateUrl: './scrollings.component.html',
  styleUrls: ['./scrollings.component.scss']
})
export class ScrollingsComponent implements OnInit {

   products:Product[]=[
    {
      id:1,
      name:"It is a long established fact that a reade",
      price:50
    },{
      id:2,
      name:"The point of using Lorem Ipsum is ",
      price:25
    },{
      id:3,
      name:"'Content here, content here', making it look like readable English. ",
      price:30
    },{
      id:4,
      name:"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      price:55
    },
    {
      id:5,
      name:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessar",
      price:45
    },
    {
      id:6,
      name:" Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word",
      price:67
    }
  ];
  constructor() {
    for(let i:number = 7;i < 100; i++){
      this.products.push({
        id:i,
        name: `Our ${i}. Product`,
        price:(i*10)
      });
    }
  }

  ngOnInit(): void {
  }

}
