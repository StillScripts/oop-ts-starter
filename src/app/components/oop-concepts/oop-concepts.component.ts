import { Component, OnInit } from '@angular/core';
import { Shape3 } from 'src/blueprint/OOP/abstraction';
import { shapes } from 'src/blueprint/OOP/polymorphism';

@Component({
  selector: 'app-oop-concepts',
  templateUrl: './oop-concepts.component.html',
  styleUrls: ['./oop-concepts.component.css'],
})
export class OopConceptsComponent implements OnInit {
  private shapes: Shape3[];

  constructor() {
    this.shapes = shapes;
  }

  public getShapes(): Shape3[] {
    return this.shapes;
  }

  ngOnInit(): void {}
}
