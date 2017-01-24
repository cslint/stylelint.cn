# stylelint-disable-reason

Require a reason comment before or after `stylelint-disable` comments.

要求在 `stylelint-disable` 注释之前或之后有一个原因的描述注释。

```css
a {
  /* stylelint-disable no-browser-hacks */
  /* Need for IE 6 */                      /*←*/
  _display: block;                         /*↑*/
  /* stylelint-enable no-browser-hacks */  /*↑*/
}                                          /*↑*/
/**                                          ↑
*                          This reason comment */
```

## Options

```js
string: "always-before"|"always-after"
```

### `"always-before"`

There *must always* be a reason comment before the `stylelint-disable` comment.

在 `stylelint-disable` 注释之前必须有一个原因的描述注释。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  /* stylelint-disable no-browser-hacks */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {
  /* stylelint-disable no-browser-hacks */
  /* Need for IE 6 */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {} /* stylelint-disable-line block-no-empty */
```

```css
a {
  _display: block; /* stylelint-disable-line block-no-empty */
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  /* Reason for disable */
  /* stylelint-disable no-browser-hacks */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {} /* Reason for disable */ /* stylelint-disable-line block-no-empty */
```

```css
a {
  _display: block; /* Reason for disable */ /* stylelint-disable-line no-browser-hacks */
}
```

```css
a {
  /* Reason for disable */
  _display: block; /* stylelint-disable-line no-browser-hacks */
}
```

### `"always-after"`

There *must always* be a reason comment after the `stylelint-disable` disable comment.

在 `stylelint-disable` 注释之后必须有一个原因的描述注释。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  /* stylelint-disable no-browser-hacks */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {
  /* Need for IE 6 */
  /* stylelint-disable no-browser-hacks */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {} /* stylelint-disable-line block-no-empty */
```

```css
a {
  _display: block; /* stylelint-disable-line no-browser-hacks */
}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  /* stylelint-disable no-browser-hacks */
  /* Need for IE 6 */
  _display: block;
  /* stylelint-enable no-browser-hacks */
}
```

```css
a {} /* stylelint-disable-line block-no-empty */ /* Reason for disable */
```

```css
a {
  _display: block; /* stylelint-disable-line no-browser-hacks */ /* Reason for disable */
}
```

```css
a {
  _display: block; /* stylelint-disable-line no-browser-hacks */
  /* Reason for disable */
}
```
