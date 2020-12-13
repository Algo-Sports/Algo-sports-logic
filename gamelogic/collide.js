const flatten = require("@flatten-js/core");

class Collide{
    constructor(){
        this.segments = [];
    }

    isCollide(laser){
        let collide = new flatten.Point();
        let dist = Number.MAX_SAFE_INTEGER;
        let segment = new flatten.Segment();
        for(let i = 0;i<this.segments.length;i++){
            let tmp = laser.ray.intersect(this.segments[i]);
            for(let c of tmp){
                let [d, shortest_segment] = laser.point.distanceTo(c);
                if(d < dist && d > 0.1){    // 충돌 threshold 0.1. 0.1미만의 거리는 충돌취급 X
                    dist = d;
                    collide = c;
                    segment = this.segments[i];
                }
            }
        }
        return [dist, collide, segment];
    }
}

module.exports = Collide;