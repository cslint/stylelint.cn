# no-unsupported-browser-features

Disallow features that are unsupported by the browsers that you are targeting.

禁止使用浏览器不支持的特性。

```css
.foo { opacity: 1; }
/**    ↑                 
 * Features like this, which is unsupported in IE 8 */
```

This rule uses [doiuse](https://github.com/anandthakker/doiuse) to detect browser support. doiuse itself checks your code against the ["Can I use"](http://caniuse.com/) database.

该规则使用 [doiuse](https://github.com/anandthakker/doiuse) 检测浏览器支持情况。doiuse 使用["Can I use"](http://caniuse.com/)数据库检查你的代码。

**This is a good rule to use with "warning"-level severity**, because its primary purpose is to warn you that you are using features not all browsers fully support *and therefore ought to provide fallbacks*. But the warning will continue even if you have a fallback in place (it doesn't know); so you probably do not want this rule to break your build. Instead, consider it a friendly reminder to double-check certain spots for fallbacks.

**这是一个很好的规则，它使用 "warning"级别**，因为它的主要目的是警告你使用的特性不是所有的浏览器都支持的，因此应该提供兼容支持。但是，即使你有兼容方案，仍然会发出警告；因此你可能不希望该规则打破你的构建。有些人认为它是个友好的提醒，以仔细检查兼容情况。

Bugs and feature requests should be reported on the [doiuse issue tracker](https://github.com/anandthakker/doiuse/issues).

bug 和新特性请发[doiuse issue tracker](https://github.com/anandthakker/doiuse/issues)。

## Options

### `true`

Defaults to the doiuse default, which is `"> 1%, last 2 versions, Firefox ESR, Opera 12.1"`.

默认为 doiuse 的默认值， `"> 1%, last 2 versions, Firefox ESR, Opera 12.1"`。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { opacity: 0.5; }
```

As IE8 (which as of this writing had *just over* 1% global usage) does not support `opacity`:

因为 IE8(在撰写本文时，全球只有超过 1% 在使用)不支持 `opacity`：

## Optional secondary options

These options are passed directly to doiuse.

这些选项直接对应 doiuse 的选项。

### `browsers: "browserslist string"`

A string interpreted by [browserslist](https://github.com/ai/browserslist) that designates precisely which browsers you wish to support. Something like `"> 1%, last 2 versions, ie >= 8"`. For details about the syntax (which is the same as when using Autoprefixer, by the way), please read [the browserslist documentation](https://github.com/ai/browserslist).

这是一个 [browserslist](https://github.com/ai/browserslist) 解释的字符串，用来精确指定你想支持哪些浏览器。比如 `"> 1%, last 2 versions, ie >= 8"`。更多详细语法信息(顺便说一下，同使用 Autoprefixer 是一样的)，请阅读[the browserslist 文档](https://github.com/ai/browserslist)。

If you set `browsers: "last 2 versions, ie >=9"` the declaration above is allowed.

如果你设置 `browsers: "last 2 versions, ie >=9"`，上述声明时允许的。

### `ignore: [ "array", "of", "features", "to", "ignore" ]`

If you no longer want to be warned about, say, your use of `rem`, you can use `ignore: ["rem"]`.

如果你不想你使用的 `rem` 被警告，你可以用 `ignore: ["rem"]`。
