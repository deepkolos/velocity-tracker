# velocity-tracker

速度跟踪器，模仿安卓的，主要用于惯性滚动计算 fling 的时间距离

# 使用

```shell
> npm i -S velocity-tracker
```

```js
import VelocityTracker from 'velocity-tracker';

const tracker = new VelocityTracker();

let x, y;

const onTouchStart = () => {
  tracker.clear();
};
const onTouchMove = e => {
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;

  tracker.addMovement({ x, y });
};
const onTouchEnd = () => {
  const pX = tracker.predictX(parseFloat(this.deceleration));
  const pY = tracker.predictY(parseFloat(this.deceleration));
  const flingT = Math.max(pX.t, pY.t);
  const deltaX = pX.s;
  const deltaY = pY.s;
  const oX = x;
  const oY = y;

  x += deltaX;
  y += deltaY;

  animate({ x: oX, y: oY }, { x, y }, this.flingT, ({ x, y }) => {
    // 设置node style
  });
};

// 使用完毕
tracker.destroy();
```
