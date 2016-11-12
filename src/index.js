const gutterWidth = '1rem'
const outerMargin = '2rem'
const gutterCompensation = '-0.5rem'
const halfGutterWidth = '0.5rem'

const smMin = '48em'
const mdMin = '64em'
const lgMin = '75em'

const containerSm = `calc(${smMin} + ${gutterWidth})`
const containerMd = `calc(${mdMin} + ${gutterWidth})`
const containerLg = `calc(${lgMin} + ${gutterWidth})`

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

  const flexBasisNum = baseWidth * columnSize
  const flexBasis = `${flexBasisNum}%`
  const maxWidth = `${flexBasisNum}%`
  const result = {
    ...colBase,
    flexBasis,
    maxWidth
  }

  return {
    ...result,
    [phone]: result,
    [tablet]: result,
    [desktop]: result
  }
}

export function colOffset (offset) {
  if (offset == null || isNaN(offset)) {
    throw new Error('Column offset must be a number')
  } else if (offset < 0 || offset > 12) {
    throw new Error('Column offset must be a number within the range 1-12')
  }

  const marginLeftNum = baseWidth * offset
  const marginLeft = `${marginLeftNum}%`
  const result = {
    ...colBase,
    marginLeft
  }

  return {
    ...result,
    [phone]: result,
    [tablet]: result,
    [desktop]: result
  }
}

export const top = {
  alignItems: 'flex-start'
}

export const middle = {
  alignItems: 'center'
}

export const bottom = {
  alignItems: 'flex-end'
}

export const around = {
  justifyContent: 'space-around'
}

export const between = {
  justifyContent: 'space-between'
}

export const first = {
  order: 1
}

export const last = {
  order: -1
}
