import { Component, OnInit,Input } from '@angular/core';
import {faEdit,faAddressBook} from '@fortawesome/free-regular-svg-icons'
import { IProterty } from '../property-list/Iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  faEdit=faEdit;
  fafaAddressBook=faAddressBook;
  @Input() property:IProterty;
  constructor() { }

  ngOnInit(): void {
  }

}
