# media-feature-parentheses-space-inside

Require a single space or disallow whitespace on the inside of the parentheses within media features.

在media 特性的括号内要求有一个空格或禁止有空格。

```css
@media ( max-width: 300px ) {}
/**    ↑                  ↑
 * The space inside these two parentheses */
```

## Options

```js
string: "always"|"never"
```

### `"always"`

There *must always* be a single space inside the parentheses.

在括号内必须有一个空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media (max-width: 300px) {}
```

```css
@media (max-width: 300px ) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media ( max-width: 300px ) {}
```

### `"never"`

There *must never* be whitespace on the inside the parentheses.

在括号内禁止有空格。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@media ( max-width: 300px ) {}
```

```css
@media ( max-width: 300px) {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@media (max-width: 300px) {}
```
