/**
 *  PURPOSE of Object-Oriented Programming:
 *  Think of a basic rectangle shape on a web page, what sort of details might be associated with it?
 * 	-	Color, Location (x and y coordinates), Size (width and height)...
 * 	Also, what sort of actions might be associated with it?
 * 	-	Move and Calculate Area...
 */

// Attempt 1 (Bad) - Using variables
let color = 'blue';
let x = 40;
let y = 40;
let height = 64;
let width = 64;

let color2 = 'red';
let x2 = 188;
let y2 = 20;
let height2 = 50;
let width2 = 80;
x = x + 10; // For first shape, x is now 50
y2 = y2 + 10; // For second shape, y is now 30
let area1 = height * width; // Area is 64*64 = 4,096
let area2 = height2 * width2; // Area is 50*80 = 4,000

// Attempt 2 (Better) - Using a single object
const shape1 = {
  color: 'blue',
  x: 40,
  y: 40,
  height: 64,
  width: 64,
};
const shape2 = {
  color: 'red',
  x: 188,
  y: 20,
  height: 50,
  width: 80,
};
function moveObject(dx: number, dy: number, object: Record<string, any>) {
  object['x'] = object['x'] + dx;
  object['y'] = object['y'] + dy;
}
function area(h: number, w: number) {
  return h * w;
}
moveObject(10, 20, shape1); // For first shape, x is now 50 and y is now 60
moveObject(0, 10, shape2); // For second shape, x is still 188 but y is now 30
area1 = area(shape1.height, shape1.width); // Area is 64*64 = 4,096
area2 = area(shape2.height, shape2.width); // Area is 50*80 = 4,000

// Attempt 3 (Best) - Using a Class as a blueprint for objects
export class Shape {
  color: string;
  x: number;
  y: number;
  height: number;
  width: number;

  constructor(
    color: string,
    x: number,
    y: number,
    height: number,
    width: number
  ) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}

export const shapeInstance1 = new Shape('blue', 40, 40, 64, 64);
export const shapeInstance2 = new Shape('red', 188, 20, 80, 50);
area1 = shapeInstance1.area(); // Area is 64*64 = 4,096
area2 = shapeInstance2.area(); // Area is 50*80 = 4,000
