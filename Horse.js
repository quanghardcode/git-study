function Horse(name) {
    this.name = name;
}
Horse.prototype.speed = function() {
    console.log(this.name +' run is ...');
    
}
module.export = Horse;