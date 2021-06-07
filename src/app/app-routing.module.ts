import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PagenotfoundComponent } from './property/pagenotfound/pagenotfound.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {
    path :'add-listing',
    component :AddPropertyComponent
  },
  {
    path: "rent-property",
    component:PropertyListComponent
  },
  {
    path: "property-detail/:id",
    component:PropertyDetailComponent
  },
  {
    path: "buy-property",
    component:PropertyListComponent
  },
  {
    path: "",
    component:PropertyListComponent
  },
  {
    path: "**",
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
