const gutterWidth = '1rem'
const outerMargin = '2rem'
const gutterCompensation = '-0.5rem'
const halfGutterWidth = '0.5rem'
const TOTAL_COLUMNS = 12

const smMin = '48em'
const mdMin = '64em'
const lgMin = '75em'

const containerSm = `calc(${smMin} + ${gutterWidth})`
const containerMd = `calc(${mdMin} + ${gutterWidth})`
const containerLg = `calc(${lgMin} + ${gutterWidth})`

const phone = `@media only screen and (min-width: ${smMin})`
const tablet = `@media only screen and (min-width: ${mdMin})`
const desktop = `@media only screen and (min-width: ${lgMin})`

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

const colBase = {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  paddingRight: halfGutterWidth,
  paddingLeft: halfGutterWidth
}

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

export function colPhone (columnSize) {
  const res = col(columnSize)
  return {
    [phone]: res
  }
}

export function colTablet (columnSize) {
  const res = col(columnSize)
  return {
    [tablet]: res
  }
}

export function colDesktop (columnSize) {
  const res = col(columnSize)
  return {
    [desktop]: res
  }
}

export function colOffset (offset) {
  if (offset == null || isNaN(offset)) {
    throw new Error('Column offset must be a number')
  } else if (offset < 0 || offset > 12) {
    throw new Error('Column offset must be a number within the range 1-12')
  }

  const baseWidth = 100 / TOTAL_COLUMNS
  const marginLeftNum = baseWidth * offset
  const marginLeft = `${marginLeftNum}%`
  const result = {
    ...colBase,
    marginLeft
  }

  return result
}

export function colOffsetPhone (offset) {
  const res = colOffset(offset)
  return {
    [phone]: res
  }
}

export function colOffsetTablet (offset) {
  const res = colOffset(offset)
  return {
    [tablet]: res
  }
}

export function colOffsetDesktop (offset) {
  const res = colOffset(offset)
  return {
    [desktop]: res
  }
}

export const first = {
  order: 1
}

export const firstPhone = {
  [phone]: first
}

export const firstTablet = {
  [tablet]: first
}

export const firstDesktop = {
  [desktop]: first
}

export const last = {
  order: -1
}

export const lastPhone = {
  [phone]: last
}

export const lastTablet = {
  [tablet]: last
}

export const lastDesktop = {
  [desktop]: last
}

export const top = {
  alignItems: 'flex-start'
}

export const topPhone = {
  [phone]: top
}

export const topTablet = {
  [tablet]: top
}

export const topDesktop = {
  [desktop]: top
}

export const middle = {
  alignItems: 'center'
}

export const middlePhone = {
  [phone]: middle
}

export const middleTablet = {
  [tablet]: middle
}

export const middleDesktop = {
  [desktop]: middle
}

export const bottom = {
  alignItems: 'flex-end'
}

export const bottomPhone = {
  [phone]: bottom
}

export const bottomTablet = {
  [tablet]: bottom
}

export const bottomDesktop = {
  [desktop]: bottom
}

export const start = {
  justifyContent: 'flex-start',
  textAlign: 'start'
}

export const startPhone = {
  [phone]: start
}

export const startTablet = {
  [tablet]: start
}

export const startDesktop = {
  [desktop]: start
}

export const center = {
  justifyContent: 'center',
  textAlign: 'center'
}

export const centerPhone = {
  [phone]: center
}

export const centerTablet = {
  [tablet]: center
}

export const centerDesktop = {
  [desktop]: center
}

export const end = {
  justifyContent: 'flex-end',
  textAlign: 'end'
}

export const endPhone = {
  [phone]: end
}

export const endTablet = {
  [tablet]: end
}

export const endDesktop = {
  [desktop]: end
}

export const around = {
  justifyContent: 'space-around'
}

export const between = {
  justifyContent: 'space-between'
}
