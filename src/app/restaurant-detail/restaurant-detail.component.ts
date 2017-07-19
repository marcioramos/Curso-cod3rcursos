import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from './../restaurants/restaurants.service';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  resturant: Restaurant;

  constructor(
    private restaurantService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.restaurantService.restaurantById(id)
    .subscribe(restaurant => this.resturant = restaurant);
  }

}
