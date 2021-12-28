/**
 * INHERITANCE in Object-Oriented Programming:
 * 	Inheritance prevents repetitive code by allowing a class to share the properties of another class.
 *  A subclass or child class will inherit the properties of its superclass or parent. 
 *  - Let's apply inheritance by creating a Square class as a subclass of our Shape class.
 */
import { Shape3 } from './abstraction';

export class Square extends Shape3 {
	constructor(color: string, x: number, y: number, sideLength: number) {
		super(color, x, y, sideLength, sideLength);
	}
}

const square1 = new Square("blue", 20, 100, 64); // Abstraction
const square2 = new Shape3("blue", 20, 20, 64, 64); // Same as above 