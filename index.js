(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
            this.timeStamp = Date.now();
        }
        return Point;
    }());
    exports.Point = Point;
    var VelocityTracker = /** @class */ (function () {
        function VelocityTracker(len) {
            if (len === void 0) { len = 5; }
            this.pointsLen = len;
            this.clear();
        }
        VelocityTracker.prototype.destroy = function () {
            this.pointsLen = null;
            this.points.length = 0;
        };
        VelocityTracker.prototype.clear = function () {
            this.points = new Array(this.pointsLen);
        };
        VelocityTracker.prototype.addMovement = function (point) {
            this.points.pop();
            this.points.unshift(new Point(point.x, point.y));
        };
        VelocityTracker.prototype.getPoint = function (lastPointCount) {
            if (lastPointCount === void 0) { lastPointCount = 0; }
            return this.points[lastPointCount];
        };
        VelocityTracker.prototype.getXVelocity = function (lastPointCount, predictTime) {
            if (lastPointCount === void 0) { lastPointCount = 1; }
            var endPoint = this.points[0];
            var startPoint = this.points[lastPointCount];
            if (!endPoint || !startPoint)
                return 0;
            if (predictTime && predictTime - startPoint.timeStamp > 80)
                return 0;
            return ((endPoint.x - startPoint.x) / (endPoint.timeStamp - startPoint.timeStamp));
        };
        VelocityTracker.prototype.getYVelocity = function (lastPointCount, predictTime) {
            if (lastPointCount === void 0) { lastPointCount = 1; }
            var endPoint = this.points[0];
            var startPoint = this.points[lastPointCount];
            if (!endPoint || !startPoint)
                return 0;
            if (predictTime && predictTime - startPoint.timeStamp > 80)
                return 0;
            return ((endPoint.y - startPoint.y) / (endPoint.timeStamp - startPoint.timeStamp));
        };
        VelocityTracker.prototype.getXAcceleration = function (lastPointCount) {
            if (lastPointCount === void 0) { lastPointCount = 1; }
            var endPoint = this.points[0];
            var startPoint = this.points[lastPointCount];
            if (!endPoint || !startPoint)
                return 0;
            return ((endPoint.x - startPoint.x) /
                Math.pow(endPoint.timeStamp - startPoint.timeStamp, 2));
        };
        VelocityTracker.prototype.getYAcceleration = function (lastPointCount) {
            if (lastPointCount === void 0) { lastPointCount = 1; }
            var endPoint = this.points[0];
            var startPoint = this.points[lastPointCount];
            if (!endPoint || !startPoint)
                return 0;
            return ((endPoint.y - startPoint.y) /
                Math.pow(endPoint.timeStamp - startPoint.timeStamp, 2));
        };
        VelocityTracker.prototype.predictX = function (a) {
            if (a === void 0) { a = -0.001; }
            var v0 = this.getXVelocity(1, Date.now());
            var d = v0 > 0 ? 1 : -1;
            var t = (-v0 / a) * d;
            var s = (((-1 / 2) * v0 * v0) / a) * d;
            return { s: s, t: t };
        };
        VelocityTracker.prototype.predictY = function (a) {
            if (a === void 0) { a = -0.001; }
            var v0 = this.getYVelocity(1, Date.now());
            var d = v0 > 0 ? 1 : -1;
            var t = (-v0 / a) * d;
            var s = (((-1 / 2) * v0 * v0) / a) * d;
            return { s: s, t: t };
        };
        return VelocityTracker;
    }());
    exports["default"] = VelocityTracker;
});
