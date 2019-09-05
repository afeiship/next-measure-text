# next-measure-text
> Canvas measure text for next.

## installation
```bash
npm install -S afeiship/next-measure-text --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-measure-text';

nx.measureText({
  canvas: canvas,
  callback: function(ctx) {
    ctx.font = "32px Arial";
  },
  text: "Hello World"
});
```
