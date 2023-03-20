import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private location: Location) {}
  url!:string;

  ngOnInit(): void {
    this.styleNavOnLocation();
  }

  styleNavOnLocation(){
    this.location.onUrlChange(() =>{
      if(this.location.path().includes('historique')){
        this.url = "historique";
      }
      else if(this.location.path().includes('tache')){
        this.url = "ajout";
      }
      else{
        this.url ="home";
      }
    })
  }
}
