# property-no-vendor-prefix

Disallow vendor prefixes for properties.

禁止属性使用浏览器引擎前缀。

```css
a { -webkit-transform: scale(1); }
/**  ↑
 * These prefixes */
```

This rule does not blanketly condemn vendor prefixes. Instead, it uses [Autoprefixer's](https://github.com/postcss/autoprefixer) up-to-date data (from [caniuse.com](http://caniuse.com/)) to know whether a vendor prefix should cause a warning or not. *If you've included a vendor prefixed property that has a standard alternative, one that Autoprefixer could take care of for you, this rule will warn about it*. If, however, you use a non-standard vendor-prefixed property, one that Autoprefixer would ignore and could not provide (such as `-webkit-touch-callout`), this rule will ignore it.

该规则并不全面否定浏览器引擎前缀。相反，它使用 [Autoprefixer's](https://github.com/postcss/autoprefixer) 更新最新数据(从 [caniuse.com](http://caniuse.com/))来查看一个浏览器引擎前缀是否会引起警告。*如果你使用了一个标准的浏览器引擎前缀，Autoprefixer 将会为你处理，该规则将发出警告*，然而，如果你使用了一个非标准的浏览器引擎前缀，Autoprefixer 会忽略它，无法提供处理 (比如 `-webkit-touch-callout`)，该规则将忽略这个属性。

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { -webkit-transform: scale(1); }
```

```css
a { -moz-columns: 2; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { transform: scale(1); }
```

```css
a {
columns: 2; }
```

```css
a { -webkit-touch-callout: none; }
```
