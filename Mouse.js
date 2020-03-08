function Mouse(mouse) {
this.mouse = mouse;
this.dead = false;
}
Mouse.prototype.die = function() {
    this.dead = true;
}
module.export = Mouse;