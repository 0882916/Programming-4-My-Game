///<reference path="bird.ts"/>
// flying sheep with disk properties, but clicking it is bad

class BirdRight extends Bird 
{
    constructor(g:PlayScreen) 
    {
        super(g, "bird-right")

        this._speed = 3 + Math.random() * 5
    }
}