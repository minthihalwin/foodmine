import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, smaple_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return smaple_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(foodId:string) : Food{
    return this.getAll().find(food=> food.id == foodId) ?? new Food();
  }
}