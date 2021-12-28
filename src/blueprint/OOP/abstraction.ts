/**
 *  ABSTRACTION in Object-Oriented Programming:
 * 	Abstraction is about minimising the amount of work involved when interacting with objects.
 *  We've already applied abstraction in our Shape class by creating the area() and move() methods 
 *  which enable us to easily get the area or move the shape any time we want.
 *  - Let's apply further abstraction by using an interface as the blueprint for the methods.
 */

type Movement = {
	dx?: number;
	dy?: number;
}

interface Shape {
	area: () => number; // Get the area of the shape
	move: (movement: Movement) => void; // Change the location of the shape
}

// Note Shape3 is the completed version of the shape class
export class Shape3 implements Shape {
  private _color: string;
  private _x: number;
  private _y: number;
  readonly height: number;
  readonly width: number;
  readonly round: boolean;

  constructor(
    color: string,
    x: number,
    y: number,
    height: number,
    width: number,
    round: boolean = false
  ) {
    this._color = color;
    this._x = x;
    this._y = y;
    this.height = height;
    this.width = width;
    this.round = round;
  }

	get color() {
		return this._color;
	}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set color(color: string) {
		this._color = color;
	}


  area() {
    return this.height * this.width;
  }

	move(movement: Movement) {
		if (movement.dx) this._x += movement.dx;
		if (movement.dy) this._y += movement.dy;
	}
}

const bigShape = new Shape3("red", 10, 10, 200, 300);
const movement1: Movement = {dx: 20};
const movement2: Movement = {dy: -10};
const movement3: Movement = {dx: -8, dy:30};
bigShape.move(movement1); // Move object 20 to the right
bigShape.move(movement2); // Move object 10 up
bigShape.move(movement3); // Move object 8 to the left and 30 down.