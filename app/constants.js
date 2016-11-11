const gutterWidth = '1rem'
const outerMargin = '2rem'
const gutterCompensation = '-0.5rem'
const halfGutterWidth = '0.5rem'

//TODO figure out how to dedup these wierd declarations
const xsMin = 30
const smMin = 48
const mdMin = 64
const lgMin = 75

const screenXsMin = `${xsMin}em`
const screenSmMin = `${smMin}em`
const screenMdMin = `${mdMin}em`
const screenLgMin = `${lgMin}em`

const containerSm = `calc(${smMin} + ${gutterWidth})`
const containerMd = `calc(${mdMin} + ${gutterWidth})`
const containerLg = `calc(${lgMin} + ${gutterWidth})`

//TODO breakpoints are defined in a mediaMap(???)
const phone = '@media only screen and (min-width: 48em)'
const tablet = '@media only screen and (min-width: 64em)'
const desktop = '@media only screen and (min-width: 75em)'

export const containerFluid = {
  paddingRight: outerMargin,
  paddingLeft: outerMargin,
  marginRight: 'auto',
  marginLeft: 'auto'
}

export const container = {
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

export const row = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flex: '0 1 auto',
  marginRight: gutterCompensation,
  marginLeft: gutterCompensation
}

export const rowReverse = {
  ...row,
  flexDirection: 'row-reverse'
}

export const colReverse = {
  flexDirection: 'col-reverse'
}

const baseWidth = 8.33333333333

//TODO find out how col-xs is used with col-xs-1 and col-xs-offset
const colXsBase = {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  paddingRight: halfGutterWidth,
  paddingLeft: halfGutterWidth,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: '100%'
}

//TODO build a single function with columnSize and offsetSize if col-xs, col-xs-size and col-xs-offset are used together
export function colXs (columnSize) {
  const flexBasisNum = baseWidth * columnSize
  const flexBasis = `${flexBasisNum}%`
  const maxWidth = `${flexBasisNum}%`
  return {
    ...colXsBase,
    flexBasis,
    maxWidth
  }
}

export function colXsOffset (columnSize) {
  const marginLeftNum = baseWidth * columnSize
  const marginLeft = `${marginLeftNum}%`
  return {
    ...colXsBase,
    marginLeft
  }
}
