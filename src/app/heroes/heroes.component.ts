import { Component, OnInit } from '@angular/core';
import {Hero, Villain} from '../hero';
import { HEROES, VILLAINS} from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
 selectedHero: Hero; 
 selectedVillain: Villain; 
 
 onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

onVillainSelect(villain: Villain): void {
 this.selectedVillain = villain;
}

  heroes = HEROES;
  villains = VILLAINS; 

  constructor() { }

  ngOnInit(): void {
  }

}
