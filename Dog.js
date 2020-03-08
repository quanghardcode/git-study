function Dog() {
    this.stomach =[];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
}
Dog.prototype.run = function() {
    
}
module.export = Dog