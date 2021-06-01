import { Component, OnInit,Input } from '@angular/core';
import {faEdit,faAddressBook} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  faEdit=faEdit;
  fafaAddressBook=faAddressBook;
  @Input() property:any;
  constructor() { }

  ngOnInit(): void {
  }

}
