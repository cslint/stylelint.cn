# selector-no-type

Disallow type selectors.

禁用类型选择器。

```css
    a {}
/** ↑
 * This type of selector */
```

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {}
```

```css
a, .foo {}
```

```css
a > [foo] {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo {}
```

```css
[foo] {}
```

```css
#foo {}
```

```css
.bar > #foo {}
```

```css
#foo.bar {}
```

## Optional secondary options

### `ignore: ["compounded", "descendant"]`

#### `"compounded"`

Allow compounded type selectors -- i.e. type selectors chained with other selectors.

允许复合类型选择器 -- 如，类型选择器后面跟着一系列其他选择器。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a.foo {}
```

```css
a#bar {}
```

#### `"descendant"`

Allow descendant type selectors.

允许子类型选择器。

The following patterns are *not* considered warnings:

以下模式正常：

```css
.foo a {}
```

```css
#bar a.foo {}
```

### `ignoreTypes: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
custom {}
```

```css
my-type {}
```

```css
my-other-type {}
```
