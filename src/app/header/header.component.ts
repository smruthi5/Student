import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() menuSelected=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
onSelect(feature:string){
  this.menuSelected.emit(feature);
}
}
