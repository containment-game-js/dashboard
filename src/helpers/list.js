const generateColumnsClassName = columns => {
  const length = columns.length
  return `list-columns-template-${length}`
}

const createCorrectCssRule = (ruleIndex, newColumns, oldColumns) => {
  const stylesheet = document.getElementById('injected-styles').sheet
  if (ruleIndex) {
    const oldLength = (oldColumns || []).length
    stylesheet.deleteRule(this.ruleIndex)
  }
  const newLength = newColumns.length
  const className = `.${generateColumnsClassName(newColumns)}`
  const classContent = `grid-template-columns: repeat(${newLength}, 1fr);`
  const finalClass = `${className} { ${classContent} }`
  const index = stylesheet.insertRule(finalClass)
  return index
}

export { generateColumnsClassName, createCorrectCssRule }
