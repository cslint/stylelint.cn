# root-no-standard-properties

Disallow standard properties inside `:root` rules.

禁止在 `:root` 中出现标准属性。

```css
    :root { color: #333 }
/** ↑       ↑
 * This selector and these types of standard properties */
```

This rule ignores `$sass` and `@less` variables.

该规则忽略 `$sass` 和 `@less` 变量。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
:root { color: pink; }
```

```css
a, :root { top: 0; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
:root { --foo: 0; }
```

```css
a, :root { --foo: 0; }
```
