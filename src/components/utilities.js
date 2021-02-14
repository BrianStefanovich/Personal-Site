export function gridPlacement({ max, xlg, lg, md, sm }, optClassName = "") {
  return `bx--offset-max-${max.offset} bx--col-max-${max.col} bx--offset-xlg-${xlg.offset} bx--col-xlg-${xlg.col} bx--offset-lg-${lg.offset} bx--col-lg-${lg.col} bx--offset-md-${md.offset} bx--col-md-${md.col} bx--offset-sm-${sm.offset} bx--col-sm-${sm.col} ${optClassName}`
}

export function gridOffset({ max, xlg, lg, md, sm }, optClassName = "") {
  let tmp = ""

  if (max.offset !== 0) {
    tmp = tmp + `bx--offset-max-${max.offset} `
  }
  if (xlg.offset !== 0) {
    tmp = tmp + `bx--offset-xlg-${xlg.offset} `
  }
  if (lg.offset !== 0) {
    tmp = tmp + `bx--offset-lg-${lg.offset} `
  }
  if (md.offset !== 0) {
    tmp = tmp + `bx--offset-md-${lg.offset} `
  }
  if (sm.offset !== 0) {
    tmp = tmp + `bx--offset-sm-${lg.offset} `
  }

  return `${tmp} ${optClassName}`
}
