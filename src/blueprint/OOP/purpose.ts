/**
 *  PURPOSE of Object-Oriented Programming:
 *  Think of a basic rectangle shape on a web page, what sort of details might be associated with it?
 * 	-	Color, Location (x and y coordinates), Size (width and height)...
 * 	Also, what sort of actions might be associated with it?
 * 	-	Move and Calculate Area...
 */

// Attempt 1 (Bad) - Using variables
let color1 = 'blue';
let x1 = 100;
let y1 = 20;
let height1 = 60;
let width1 = 80;

let color2 = 'red';
let x2 = 40;
let y2 = 200;
let height2 = 60;
let width2 = 100;

x1 += 40; // Moving first rectangle 40 to the right
y2 += 60; // Moving second rentangle 60 down
let area1 = height1 * width1; // First rectangle has area of 4,800
let area2 = height2 * width2; // Second rectangle has area of 6,000
// DRY - Don't repeat yourself

// Attempt 2 (Better) - Using a single object
const rectangle1 = {
  color: 'blue',
  x: 100,
  y: 20,
  height: 60,
  width: 80,
};

const rectangle2 = {
  color: 'red',
  x: 40,
  y: 200,
  height: 60,
  width: 100,
};

function moveObject(dx: number, dy: number, obj: Record<string, any>) {
  obj['x'] += dx;
  obj['y'] += dy;
}

function getArea(height: number, width: number) {
  return height * width;
}

moveObject(40, 0, rectangle1); // Moving first rectangle 40 to the right
moveObject(0, 60, rectangle2); // Moving second rentangle 60 down
area1 = getArea(rectangle1.height, rectangle1.width); // First rectangle has area of 4,800
area2 = getArea(rectangle2.height, rectangle2.width); // Second rectangle has area of 6,000

// Attempt 3 (Best) - Using a Class as a blueprint for objects
class Shape {
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

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  area() {
    return this.height * this.width;
  }
}

const rectObj1 = new Shape("blue", 100, 20, 60, 80);
const rectObj2 = new Shape("red", 40, 200, 60, 100);
