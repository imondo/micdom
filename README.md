# micdom

一个微小的 DOM 操作库，为解决单页应用 DOM 操作

## 使用

直接引入 `index.js` 文件

## API

```js

<div class="test">
  <div class="child" data-id="ass">child</div>
</div>
 <div class="test1">test1</div>

$m('.test').css({height: '100px', 'border': '1px solid red'})
$m('.test1').css('border', '1px solid red')

console.log($m('.child').css('border', '1px solid red').parent())
console.log($m('.child').attr('data-id'))
console.log($m('.child').dom())
```

## 自定义方法

```js
$m.fn.add = function() {
  console.log('add 方法')
}

$m('.test').add()
```