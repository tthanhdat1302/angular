import { Component, OnInit } from '@angular/core';
import {Recipe} from '../repice.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[new Recipe('A Test Recipe','This is simply a test','https://assets.bonappetit.com/photos/5c2f8fe2558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg')];
  
  constructor() { }

  ngOnInit(): void {
  }

}
