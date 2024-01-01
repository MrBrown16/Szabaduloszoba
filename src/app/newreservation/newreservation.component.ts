import { Component } from '@angular/core';
import { Foglalas } from '../Foglalas';
import { BaseService } from '../base.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-newreservation',
  templateUrl: './newreservation.component.html',
  styleUrls: ['./newreservation.component.css']
})
export class NewreservationComponent {
  actReservation:any
  columns:any
  valid:boolean=false
  constructor(private base:BaseService){
    this.actReservation= new Foglalas()
    this.columns=base.getColumns()
    this.actReservation.datum = formatDate(Date.now(),"yyyy-MM-dd",'en-US')
  }

  check(){
    if ( this.actReservation.cim!="" 
      && this.actReservation.fo >=2 && this.actReservation.fo<=16 
      && this.actReservation.iranyitoszam!="" && this.actReservation.nev!="") {
        this.valid=true
        this.reserve()
      return true
    }else{
      this.valid=false
      return false}
    
  }
  reserve(){
    this.base.postReservations(this.actReservation)
  }
}
