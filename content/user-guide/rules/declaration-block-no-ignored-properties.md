# declaration-block-no-ignored-properties

Disallow property values that are ignored due to another property value in the same rule.

禁止使用由于其他属性的原因而被忽略的属性。

```css
a { display: inline; width: 100px; }
/**                  ↑
 *       This property */
```

Certain property value pairs rule out other property value pairs, causing them to be ignored by the browser. For example, when an element has display: inline, any further declarations about width, height and margin-top properties will be ignored. Sometimes this is confusing: maybe you forgot that your margin-top will have no effect because the element has display: inline, so you spend a while struggling to figure out what you've done wrong. This rule protects against that confusion by ensuring that within a single rule you don't use property values that are ruled out by other property values in that same rule.

某些属性会导致其他属性被浏览器忽略。比如，一个内联元素会忽略 width，height 和 margin-top 等。有时，这很令人感到困惑：可能你忘记了 margin-top 在内联元素上没有任何效果，因此你花了一段时间找出你哪里出了问题。该规则防止出现这种困惑，确保你不会再使用某个属性时被其他属性排除掉。

The rule warns when it finds:

当发现以下情况时，该规则将发出警告：

-   `display: inline` used with `width`, `height`, `margin`, `margin-top`, `margin-bottom`, `overflow` (and all variants).
-   `display: inline` 和 `width`，`height`，`margin`，`margin-top`，`margin-bottom`，`overflow` (和所有的变量)一起使用。
-   `display: list-item` used with `vertical-align`.
-   `display: list-item` 和 `vertical-align` 一起使用。
-   `display: block` used with `vertical-align`.
-   `display: block` 和 `vertical-align` 一起使用。
-   `display: flex` used with `vertical-align`.
-   `display: flex` 和 `vertical-align` 一起使用。
-   `display: table` used with `vertical-align`.
-   `display: table` 和 `vertical-align` 一起使用。
-   `display: table-*` used with `margin` (and all variants).
-   `display: table-*` 和 `margin` (和所有的变量) 一起使用。
-   `display: table-*` (except `table-cell`) used with `vertical-align`.
-   `display: table-*` (除了 `table-cell`) 和 `vertical-align` 一起使用。
-   `display: table-(row|row-group)` used with `width`, `min-width` or `max-width`.
-   `display: table-(row|row-group)` 和 `width`，`min-width` 或 `max-width` 一起使用。
-   `display: table-(column|column-group)` used with `height`, `min-height` or `max-height`.
-   `display: table-(column|column-group)` 和 `height`，`min-height` 或 `max-height` 一起使用。
-   `float: left` and `float: right` used with `vertical-align`.
-   `float: left` 、`float: right` 和 `vertical-align` 一起使用。
-   `position: static` used with `top`, `right`, `bottom`, or `left`.
-   `position: static` 和 `top`，`right`，`bottom` 或 `left` 一起使用。
-   `position: absolute` used with `float`, `clear` or `vertical-align`.
-   `position: absolute` 和 `float`，`clear` 或 `vertical-align` 一起使用。
-   `position: fixed` used with `float`, `clear` or `vertical-align`.
-   `position: fixed` 和 `float`，`clear` 或 `vertical-align` 一起使用。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { display: inline; width: 100px; }
```

`display: inline` causes `width` to be ignored.

`display: inline` 导致 `width` 被忽略。

```css
a { display: inline; height: 100px; }
```

`display: inline` causes `height` to be ignored.

`display: inline` 导致 `height` 被忽略。

```css
a { display: inline; margin: 10px; }
```

`display: inline` causes `margin` to be ignored.

`display: inline` 导致 `margin` 被忽略。

```css
a { display: block; vertical-align: baseline; }
```

`display: block` causes `vertical-align` to be ignored.

`display: block` 导致 `vertical-align` 被忽略。

```css
a { display: flex; vertical-align: baseline; }
```

`display: flex` causes `vertical-align` to be ignored.

`display: flex` 导致 `vertical-align` 被忽略。

```css
a { position: absolute; vertical-align: baseline; }
```

`position: absolute` causes `vertical-align` to be ignored.

`position: absolute` 导致 `vertical-align` 被忽略。

```css
a { float: left; vertical-align: baseline; }
```

`float: left` causes `vertical-align` to be ignored.

`float: left` 导致 `vertical-align` 被忽略。

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { display: inline: margin-left: 10px; }
```

```css
a { display: inline: margin-right: 10px; }
```

```css
a { display: inline: padding: 10px; }
```

```css
a { display: inline-block; width: 100px; }
```

Although `display: inline` causes `width` to be ignored, `inline-block` works with `width`.

虽然 `display: inline` 导致 `width` 被忽略，但 `inline-block` 可以和 `width` 一起使用。

```css
a { display: table-cell; vertical-align: baseline; }
```

Although `display: block` causes `vertical-align` to be ignored, `table-cell` works with `vertical-align`.

虽然 `display: block` 导致 `vertical-align`  被忽略，但 `table-cell` 可以和 `vertical-align` 一起使用。

```css
a { position: relative; vertical-align: baseline; }
```

Although `position: absolute` causes `vertical-align` to be ignored, `relative` works with `vertical-align`.

虽然 `position: absolute` 导致 `vertical-align`  被忽略，但 `relative` 可以和 `vertical-align` 一起使用。
