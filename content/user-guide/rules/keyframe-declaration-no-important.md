# keyframe-declaration-no-important

Disallow `!important` within keyframe declarations.

禁止在 keyframe 声明中使用 `!important`。

```css
@keyframes important2 {
  from { margin: 10px }
  to { margin: 20px !important }
}                /* ↑ */
/**                 ↑
*     This !important */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px !important;
  }
}
```

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px!important;
  }
}
```

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px ! important;
  }
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: pink !important; }
```

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px;
  }
}
```
