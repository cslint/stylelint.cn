# comment-word-blacklist

Specify a blacklist of disallowed words within comments.

指定一个不允许出现在注释中的单词的黑名单。

```css
 /* words within comments */
/** ↑     ↑      ↑
 * These three words */
```

**Caveat:** Comments within *selector and value lists* are currently ignored.

**警告：**选择器和值列表中的注释目前是被忽略的。

## Options

```js
array|string: ["array", "of", "words", "or", "/regex/"]|"word"|"/regex/"
```

If a string is surrounded with `"/"` (e.g. `"/^TODO:/"`), it is interpreted as a regular expression.

如果一个字符串被 `"/"` (如`"/^TODO:/"`) 包围着，它将被解释为一个正则表达式。

Given:

给出：

```js
["/^TODO:/", "badword"]
```

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
/* TODO: */
```

```css
/* TODO: add fallback */
```

```css
/* some badword */
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
/* comment */
```
