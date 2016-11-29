Converts the styles defined in [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid) to vanilla javascript for use with various css-in-js libraries such as [glamor](https://github.com/threepointone/glamor) and [aphrodite](https://github.com/Khan/aphrodite).

To install the module use:

```
npm install flexboxgridjs
```

To use the styles with a ibrary such as `glamor`:

```js
import { style, merge } from 'glamor';
import { col, row, between } from 'flexboxgridjs';

const colAuto = style(col());
const dontExpand = style({
  flexGrow: 0,
  flexShrink: 0,
});

const headRoom = style({
  marginTop: '2em',
});

const colFixedWidth = merge(colAuto, dontExpand, headRoom, style(between));
const rowStyle = style(row);
```

The module offers a `12 column grid` that uses the `flexbox` specification to specify columns as flex children with rows as flex parents.

**Media Queries**

|Name|Max-Width|
|:----:|:---:|
|Phone|48em|
|Tablet|64em|
|Desktop|75em|


The `em` units are calculated with respect to the font size of the parent element while the `rem` units are computed using the font-size of the `root` elements. A font size of `16px` is usually
provided for the `root` of the application.

The api consists of two container elements, a full width `container-fluid`  as well as a responsive fixed width container.

The `row` style represents a `flex-parent` with support for wrapping content to the next line, to reverse the order of items within a row, use the rowReverse style. A row will not grow beyond it's usual size but can shrink upto the `width` specified for it.

There are several ways of specifying columns using `flexboxgridjs`, use `col` to specify equal width columns that expand to occupy the width of a `row`. To specify columns with a `flex-basis` (i.e. min-width of the column beyond which it cannot shrink) use `col` function and pass it a column size argument.

There are also modifiers that allow a column to only apply for one of the media queries specified above using the `colPhane`, `colTablet` and `colDesktop` classes. To specify an offset use the `colOffset` function and it's counterparts for each media queries as you did ith `col`. 

flexboxgrid also comes with certain modifiers:

+ reorder elements using `first` and `last`, has additional styles similar to ` col` which apply only for the given media query.

+ align items on the vertical axis using `top`, `middle` and `bottom`

+ align items on the horizontal axis using `start`, `center` and `end`.

+ justify space between columns, maximize it using `between`, minimize it using `around`.

To see examples head over to [flexboxgrid homepage](http://flexboxgrid.com/).

**Additional Information**

All properties for a `style` are camel cased as most styling solutions require/support them.

Most `css-in-js` provide `inline` media queries that are specifiedwithin the style of the element like this:

```js
const container = {
  marginRight: 'auto',
  marginLeft: 'auto',
  [phone]: {
    width: containerSm
  },
  [tablet]: {
    width: containerMd
  },
  [desktop]: {
    width: containerLg
  }
}
```

Preprocessors offer mixins for building `parameter` based style output, we accomplish this using functions:

```js
export function col (columnSize) {
  if (columnSize == null) {
    return {
      ...colBase,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%'
    }
  }

  if (isNaN(columnSize)) {
    throw new Error('Column size must be a number')
  } else if (columnSize < 1 || columnSize > 12) {
    throw new Error('Column size must be a number within the range 1-12')
  }

  const baseWidth = 100 / TOTAL_COLUMNS
    const flexBasisNum = baseWidth * columnSize
    const flexBasis = `${flexBasisNum}%`
    const maxWidth = `${flexBasisNum}%`
    const result = {
      ...colBase,
      flexBasis,
      maxWidth
    }

  return result
}
```

---
