import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Foglalas } from '../Foglalas';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  
  foglalasok:any

  columns:any

  constructor(private base:BaseService){
    this.base.getReservations().subscribe((res:any)=>this.foglalasok=this.sortByDateDesc(res))
    this.columns=base.getColumns()
  }

  sortByDateDesc(myList:Array<Foglalas>){
    return myList.sort((a,b)=>{
      return new Date(b.datum).getTime() - new Date(a.datum).getTime()
    })
  }


}
