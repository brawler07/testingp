import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag:boolean=false;
  fg=new FormGroup({
    username: new FormControl({value:'',disabled:false},[Validators.required]),
    email: new FormControl('@gmail.com',[Validators.required])
  })
  constructor() { 
    this.fg.valueChanges.subscribe(formdata=>{
      console.log(formdata);
    })
  }

  ngOnInit(): void {
  }
  addField(){
    this.flag=true;
    this.fg.addControl('age',new FormControl('age'));
  }
  remField(){
    this.flag=false;
    this.fg.removeControl('age'); 
  }
  

}
