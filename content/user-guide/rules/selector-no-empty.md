# selector-no-empty

Disallow empty selectors.

禁止出现空选择器。

```css
  a, , b {}
/** ↑ 
 * An empty selector */
```

Empty selectors (by themselves or within a selector list) invalidate a rule. This rule splits the selector list on `,`. Any part that has zero length or containing only whitespace is deemed empty.

空选择器(它们本身或在选择器列表内)会使一个规则失效。该规则使用 `,` 把选择器列表分开。任何长度为 0 的 或只包含空白的部分被认为是空的。


## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
{}
```

```css
, .a, .b {}
```

```css
.a, .b,  {}
```

```css
.a, , .b {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {}
```

```css
a, b {}
```

```css
a.foo {}
```
