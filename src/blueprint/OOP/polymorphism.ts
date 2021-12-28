/**
 * POLYMORPHISM in Object-Oriented Programming:
 * 	Polymorphism refers to how inheritance enables different objects to be used in similar ways.
 *  Different subclasses of the same superclass can all be treated as the same data type.
 *  - Let's apply polymorphism by creating more shape classes and using an array to hold the different shapes.
 */
import { Shape3 } from "./abstraction";
import { Square } from "./inheritance";

class Oval extends Shape3 { 
	constructor(color: string, x: number, y: number, height: number, width: number) {
		super(color, x, y, height, width, true);
	}

	override area() {
		let radiusX = this.width / 2;
		let radiusY = this.height / 2;
		return Math.round(Math.PI * radiusX * radiusY);
	}
}

class Circle extends Shape3 {
	constructor(color: string, x: number, y: number, sideLength: number) {
		super(color, x, y, sideLength, sideLength, true);
	}

	override area() {
		let radius = this.height / 2;
		return Math.round(Math.PI * radius ** 2);
	}
}

// Create an array of different shapes to place within the shape board
export const shapes: Shape3[] = [
	new Circle("red", 30, 20, 64),
	new Square("purple", 99, 200, 64),
	new Oval("blue", 240, 20, 40, 60),
	new Shape3("blue", 200, 100, 90, 60)
];

