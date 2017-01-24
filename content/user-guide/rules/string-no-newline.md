# string-no-newline

Disallow (unescaped) newlines in strings.

禁止在字符串中使用（非转义的）换行符。

```css
a {
  content: "first
    second";     ↑
}                ↑
/**              ↑
 * The newline here */
```

[The spec](https://www.w3.org/TR/CSS2/syndata.html#strings) says this: "A string cannot directly contain a newline. To include a newline in a string, use an escape representing the line feed character in ISO-10646 (U+000A), such as \"\A\" or \"\00000a\"." And also: "It is possible to break strings over several lines, for aesthetic or other reasons, but in such a case the newline itself has to be escaped with a backslash (\\)."

[w3 标准](https://www.w3.org/TR/CSS2/syndata.html#strings)上说：“一个字符串不能直接包含换行符。为了在字符串中包含一个换行符，用一个转义代表ISO-10646 (U+000A) 中换行字符。如\"\A\" 或 \"\00000a\"”。还有:“为了审美或其它原因，字符串可以多次换行，但在这种情况下，换行符本身必须使用一个一个反斜杠(\\)进行转义。”

## Options

### `true`

The following patterns are considered warnings:

以下模式被认为是个警告：

```css
a {
  content: "first
    second";     
}  
```

```css
[title="something
is probably wrong"] {}  
```

```css
a {
  font-family: "Times
    New
    Roman";
}  
```

The following patterns are *not* considered warnings:

以下模式正常：

```css
a {
  content: "first\Asecond";     
}  
```

```css
a {
  content: "first\\nsecond";     
}  
```

```css
[title="nothing\
  is wrong"] {}  
```

```css
a {
  font-family: "Times New Roman";
}  
```
