import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProterty } from '../property/property-list/Iproperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getProperties():Observable<IProterty[]> {
    return this.http.get('data/property.json').pipe(
      map((data) => {
        const propertyArray: Array<IProterty> = [];
        for (let id in data) {
          propertyArray.push(data[id]);
        }
        return propertyArray;
      })
    );
  }
}
