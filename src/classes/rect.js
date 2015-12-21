"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import CollisionMethods from "../libs/collisionmethods.js";


class Rect extends Entity {


    constructor (x, y, width, height, color) {

        super(x, y);

        this.size = new Vector2D(width, height);
        this.color = color;

    }


    isColliding (entity) {

        if (entity instanceof Rect) {
            return CollisionMethods.AABB(this, entity);
        }

    }


    render () {

        this._recalculatePos();

        if (this._game) {

            this._game.context.fillStyle = this.color;
            this._game.context.fillRect(this._calculatedPos.x, this._calculatedPos.y, this.size.x, this.size.y);

            return true;

        } else {
            return false;
        }

    }


}


export default Rect;