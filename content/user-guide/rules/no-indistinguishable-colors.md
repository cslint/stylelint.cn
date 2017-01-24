# no-indistinguishable-colors

Disallow colors that are suspiciously close to being identical.

禁用相似的颜色。

```css
a { color: black; background: #010101; }
/**        ↑                  ↑
 *         Colors like these two */
```

This rule uses [css-colorguard](https://github.com/SlexAxton/css-colorguard), which itself uses [the CIEDE2000 algorithm](http://en.wikipedia.org/wiki/Color_difference#CIEDE2000) behind-the-scenes, to determine when colors are so close that they probably *should* be the same.

该规则使用 [css-colorguard](https://github.com/SlexAxton/css-colorguard)，其本身使用[CIEDE2000 算法](http://en.wikipedia.org/wiki/Color_difference#CIEDE2000)，来决定什么时候颜色是相似的，以至于它们应该是相同的。

In CSS, nearly identical colors often occur because that color was guessed at or eye-dropped at different times, by different people, with different software, etc.; and the intent was always to use the same color, but unfortunately things didn't turn out that way. Instead of having 5 shades of pale light blue, for example, you probably wanted just one,

在 CSS 中，经常出现几乎相似的颜色，因为颜色在不同的时间，不同的人，使用不同的软件等，或猜测或目测，而意图是想使用相同的颜色，但事与愿违。例如，你可能只想使用 1 个苍白的淡蓝色的阴影，而不是 5 个。

For more details about how [css-colorguard](https://github.com/SlexAxton/css-colorguard) works, please read [that module's documentation](https://github.com/SlexAxton/css-colorguard).

更多关于 [css-colorguard](https://github.com/SlexAxton/css-colorguard) 是如何工作的详细信息，请阅读 [that module's documentation](https://github.com/SlexAxton/css-colorguard)。

Bugs and feature requests should be reported on the [css-colorguard issue tracker](https://github.com/SlexAxton/css-colorguard/issues).

bug 和 新特性请求，请发[css-colorguard issue tracker](https://github.com/SlexAxton/css-colorguard/issues)。

## Options

### `true`

Defaults to css-colorguard's default threshold of `3`.

默认为 css-colorguard 的默认阈值 `3`。

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: black; background: #010101; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: black; background: #FFF; }
```

## Optional secondary options

The options below directly correspond to the css-colorguard options.

以下选项直接对应 css-colorguard 的选项。

### `threshold: number`

Number can be between `0` and `100`. The default is `3`.

数值可以在 `0` 和 `100` 之间。默认为 `3`。

The lower the threshold, the more similar colors have to be to trigger a warning. The higher the threshold, the more warnings you will get.

阈值越低就越精确，越相似的颜色必会触发警告。阈值越高精确度越低，你将收到越多的警告。

### `ignore: ["array", "of", "hexes", "to", "ignore"]`

Given:

给出：

```js
ignore: ["black"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #020202; background: #010101; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: black; background: #010101; }
```

### `whitelist: [ [ "#colorA", "#colorB" ], [ "#colorA", "#colorB" ] ]`

An array of color pairs to ignore. Each pair is an array with two items.

要忽略的颜色对列表。每对颜色是个有两个选项的数组。

Given:

给出：

```js
whitelist: [ [ "black", "#010101" ] ]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a { color: #020202; background: #010101; }
```

```css
a { color: black; background: #020202; }
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a { color: black; background: #010101; }
```
