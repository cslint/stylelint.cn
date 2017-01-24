# at-rule-no-unknown

Disallow unknown at-rules.

禁止使用未知的 at 规则。

```css
    @unknown (max-width: 960px) {}
/** ↑
 * At-rules like this */
```

This rule considers at-rules defined in the CSS Specifications, up to and including Editor's Drafts, to be known.

该规则只考虑 CSS 规范包括草案中定义的 at 规则。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
@unknown {}
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@charset "UTF-8";
```

```css
@CHARSET "UTF-8";
```

```css
@media (max-width: 960px) {}
```

```css
@font-feature-values Font One {
  @styleset {}
}
```

## Optional secondary options

### `ignoreAtRules: ["/regex/", "string"]`

Given:

给出：

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
@my-at-rule "x.css";
```

```css
@my-other-at-rule {}
```

```css
@custom {}
```
