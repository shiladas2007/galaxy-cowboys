module ui {
    export function centreHorizontal(parent:createjs.DisplayObject, child:createjs.DisplayObject) {
        child.x = parent.x + parent.getBounds().width * 0.5 - child.getBounds().width * 0.5;
    }

    export function centreVertical(parent:createjs.DisplayObject, child:createjs.DisplayObject) {
        child.y = parent.y + parent.getBounds().height * 0.5 - child.getBounds().height * 0.5;
    }
}