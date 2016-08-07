//set up basic classes
function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.add = function(another_vector)  {
  return new Vector(this.x + another_vector.x, this.y + another_vector.y);
};

Vector.prototype.sub = function(another_vector) {
  return new Vector(this.x - another_vector.x, this.y - another_vector.y);
};

Vector.prototype.mult = function(another_vector) {
  return new Vector(this.x * another_vector.x, this.y * another_vector.y);
}

Vector.prototype.dist = function(another_vector) {
  return Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(another_vector.x, 2)) +
                   (Math.pow(this.y, 2)) + (Math.pow(another_vector.y, 2))
                    );
};

function BouncyBall(x, y, radius, color, speed) {
  var pos = new Vector(x, y);
  this.pos = pos;
  this.radius = radius;
  this.color = color;
  this.speed = speed;
};

BouncyBall.prototype.updatePos = function(x, y) {
  this.pos = new Vector(x, y);
};

//silly unit tests
var ball = new Vector(0, 0);
var result = ball.add(new Vector(3, 4));
result;

var distance = result.dist(new Vector(0, 0));
distance;