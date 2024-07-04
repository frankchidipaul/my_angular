import { CommonModule } from '@angular/common';
import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
 public display:any=' frank';
 public show:any=' ';
 public nickName:any='';
 public phone:any='';
 public info:Array <any>=[]
 public editindex:any= null;
 public editname:any={name:' '}

 constructor() {}
 
  
    

  
    


  

Addbtn(){
this.info.push(this.show)
this.info.push(this.nickName) 
this.info.push(this.phone)

try {
  localStorage.setItem('info', JSON.stringify(this.info));
  console.log('Array saved to local storage');
} catch (e) {
  console.error('Failed to save array to local storage', e);

}


 


}

del(i:number){
  this.info.splice(i,1)
  

}

edit(i:number){
  this.editindex=i;
  alert()
}

update(){

  if (this.editname !==null) {
    this.info[this.editindex]=this.editname.name;
    
    //  this.Cancel()
  }
  this.Cancel()

}


Cancel(){

  this.editindex=null;
}


}
