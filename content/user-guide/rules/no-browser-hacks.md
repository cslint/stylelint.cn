# no-browser-hacks

Disallow browser hacks that are irrelevant to the browsers you are targeting.

禁用与你使用的浏览器无关的 browser hacks。

```css
h1 { _color: white; }
/**  ↑                 
 * Hacks like this */
```

If you are uncertain what "browser hacks" are, ["An Introduction to Browser-Specific Hacks"](http://www.sitepoint.com/browser-specific-css-hacks/) explains it well.

如果你不确定什么是 browser hacks，可以去看这篇文章["An Introduction to Browser-Specific Hacks"](http://www.sitepoint.com/browser-specific-css-hacks/)。

This rule uses [stylehacks](https://github.com/ben-eb/stylehacks) to detect the hacks. Then, in the spirit of stylelint, it tells you that you've done something wrong. If instead you would like to automatically remove browser hacks, use [stylehacks](https://github.com/ben-eb/stylehacks) directly.

该规则使用[stylehacks](https://github.com/ben-eb/stylehacks)来检测 hack。然后，stylelint 会告诉你那里出错了。如果你想自动删除 browser hacks，就直接使用[stylehacks](https://github.com/ben-eb/stylehacks)。

[stylehacks](https://github.com/ben-eb/stylehacks) is only compatible with standard CSS syntax, and does not support nested properties nor custom property sets.

[stylehacks](https://github.com/ben-eb/stylehacks)只兼容标准的 CSS 语法，不支持嵌套属性和自定义属性集。

Bugs and feature requests should be reported on the [stylehacks issue tracker](https://github.com/ben-eb/stylehacks/issues).

如果遇到 bug 或要提请新特性，请发[stylehacks issue tracker](https://github.com/ben-eb/stylehacks/issues)。

## Options

### `true`

Defaults to the [browserslist](https://github.com/ai/browserslist) default, which targets modern browsers.

默认为 [browserslist](https://github.com/ai/browserslist) 的默认值，目标是所有现代浏览器。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color/*\**/: pink\9; }
```

As this hack targets IE7-8.

因为这个 hack 是针对 IE7-8 的。

## Optional secondary options

### `browsers: "browserslist string"`

A string interpreted by [browserslist](https://github.com/ai/browserslist) that designates precisely which browsers you wish to support. Something like `"> 1%, last 2 versions, ie >= 8"`. For details about the syntax (which is the same as when using Autoprefixer, by the way), please read [the browserslist documentation](https://github.com/ai/browserslist).

这是一个 [browserslist](https://github.com/ai/browserslist) 解释的字符串，用来精确指定你想支持哪些浏览器。比如 `"> 1%, last 2 versions, ie >= 8"`。更多详细语法信息(顺便说一下，同使用 Autoprefixer 是一样的)，请阅读[the browserslist 文档](https://github.com/ai/browserslist)。

If you set `browsers: [ "last 2 versions", "ie >=7" ]` the hack above is allowed.

如果你设置 `browsers: [ "last 2 versions", "ie >=7" ]`，上面 hack 就可用了。
