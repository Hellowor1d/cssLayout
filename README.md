# CSS-Layout
旨在打造详尽的前端布局代码学习库（自从用了框架开发，CSS生疏了不少，所以开这个库练练手）

## 常见布局

### 两栏布局
1.一列定宽，一列自适应宽度
[预览](https://hellowor1d.github.io/cssLayout/app/two-column-layout/specific-width%2Bresponsing-column/float%2Bmargin.html)    [源码]()

## 常见定位方法
### 水平居中

子元素为行内元素还是块状元素，宽度一定还是宽度未定，采取的布局方案不同。

方案选择基本思路：
子元素为

> * 行内元素：对父元素设置text-align:center;
> * 定宽块状元素: 设置左右margin值为auto;
> * 不定宽块状元素: 设置子元素为display:inline,然后在父元素上设置text-align:center;
> * 通用方案: flex布局，对父元素设置display:flex;justify-content:center;

常用方法举例：
---
> **NOTE**:为了统一展示效果，在以下实例代码中对父子元素设置了固定宽高，实际可以不设置，由子元素内容来控制其宽度

>1. 方法一：[text-align + inline-block](https://hellowor1d.github.io/cssLayout/app/居中布局/居中布局-水平居中（text-align%20%2B%20inline-block）.html)

**设置**：对父元素设置`text-align:center`(将会对行内元素起作用)，子元素设置`display:inline-block`（兼容IE6、7 时，替换为`display:inline;zoom:1;`）;

**优点**：兼容性良好

**缺点**： 需要额外代码修复因继承父元素的`text-align:center`对子元素内容排列造成的影响，如需要添加`.child{text-align:left}`


>2. 方法二：[table + margiin](https://hellowor1d.github.io/cssLayout/app/居中布局/居中布局-水平居中（table%20%2B%20margin）.html)

**设置**：对子元素设置`display:table`(此元素会作为块级表格来显示，元素表现类似block，但是宽度跟随内容宽度)（兼容IE6、7 时，替换`div`结构为`table`结构即可）;

**优点**： 只需要对子元素进行设置

**缺点**： 向下兼容IE6、7时，需要更改html结构

>3. 方法三：[absolute + transform](https://hellowor1d.github.io/cssLayout/app/居中布局/居中布局-水平居中（absolute%20%2B%20transform）.html)

**设置**：对父元素设置`position:realatve`(使其作为参照物)，对子元素设置`position:absolute;left:50%`(绝对定位元素的宽度也随内容而定)，然后对子元素设置`transform:translateX(-50%)`（兼容IE6、7 时，替换`div`结构为`table`结构即可）;

**优点**： 居中元素不会对其他元素造成影响

**缺点**：`transform`不兼容低版本IE

>4. 方法四：[flex + justify-content](https://hellowor1d.github.io/cssLayout/app/居中布局/居中布局-水平居中（flex%20%2B%20justify-content）.html)

**设置**：对父元素设置`display:flex;justify-content:center`(这样其内部的元素会变为`flex-item`)，`flex-item`的宽度默认为`auto`，所以跟随内容宽度变化，继而`justify-content:center`属性会使子元素居中

**优点**：只需要对父元素进行设置

**缺点**：`flex`不兼容低版本IE
