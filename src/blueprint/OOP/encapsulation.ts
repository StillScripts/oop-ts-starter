/**
 *  ENCAPSULATION in Object-Oriented Programming:
 * 	Encapsulation is accomplished by controlling how the variables in a class are accessed and modified.
 *  - Let's apply encapsulation to our Shape class using the following rules:
 * 		"All of the variables of the object can be accessed. The height and width values cannot be modified
 *    and the x and y values can only be modified by move() function."
 */

class Shape2 {
  private _color: string;
  private _x: number;
  private _y: number;
  readonly height: number;
  readonly width: number;

  constructor(
    color: string,
    x: number,
    y: number,
    height: number,
    width: number
  ) {
    this._color = color;
    this._x = x;
    this._y = y;
    this.height = height;
    this.width = width;
  }

	get color() {
		return this._color;
	}

  set color(color: string) {
		this._color = color;
	}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  area() {
    return this.height * this.width;
  }

	move(dx: number, dy: number) {
		this._x += dx;
		this._y += dy;
	}
}

const shape = new Shape2("green", 400, 200, 60, 60);
let color = shape.color;
shape.move(50, 0);