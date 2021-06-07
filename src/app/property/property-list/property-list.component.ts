import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProterty } from './Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProterty>;
  BuyRent: string = null;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    this.housingService.getProperties().subscribe((data) => {
      console.log(data);
      this.BuyRent = this.route.snapshot.url.toString();
      if (this.BuyRent == 'rent-property') {
        this.properties = data.filter((data) => data.RentBuy == 1);
      } else if (this.BuyRent == 'buy-property') {
        this.properties = data.filter((data) => data.RentBuy == 2);
      } else {
        this.properties = data;
      }
    });
  }
}
