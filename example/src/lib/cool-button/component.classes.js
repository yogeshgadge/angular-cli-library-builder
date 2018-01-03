"use strict";
exports.__esModule = true;
var ModelChild = /** @class */ (function () {
    function ModelChild() {
    }
    return ModelChild;
}());
exports.ModelChild = ModelChild;
var ModelParent = /** @class */ (function () {
    function ModelParent() {
    }
    return ModelParent;
}());
exports.ModelParent = ModelParent;
var MyAbstractClass = /** @class */ (function () {
    function MyAbstractClass() {
        this.value = new ModelParent();
    }
    MyAbstractClass.prototype.getValue = function () {
        return this.value;
    };
    return MyAbstractClass;
}());
exports.MyAbstractClass = MyAbstractClass;
