class Rectangle{
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area(){
    const area = this.width * this.height;
    return area;
  }
  paint(){
    console.log(`Painting this rectangle with: ${this.color}`)
  }
}

const rect = new Rectangle(2, 3, "black")
const area =  rect.area()
// rect.paint()
// console.log(area);



//Map

const map = new Map();
map.set('name', 'Harsh')
map.set('age', 21)

const first_name = map.get('name')
console.log(first_name);

