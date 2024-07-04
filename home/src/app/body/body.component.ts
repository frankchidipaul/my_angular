import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  // public name:any='ike';
 public display:any='';
 public nickName:any='';
 public phoneNumber:any='';

 public info:Array<any> =[]






  addbtn(){
  
  this.info.push(this.info)


  }


  del( i:number){
    this.info.splice(i,1)



  }
  Del_2(i:number){
    this.info.splice(i,1)



  }
  Del_3( i:number){
    this.info.splice(i,1)



  }
  
  edit(i:number){


  }










  // ngOnInit(){
  //   this.addbtn()key
  // }
}
  






  



