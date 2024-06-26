const formatArrayRepeated = (array) => {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
}

const formatObjectArrayRepeated = (array) => {
  return array.reduce((accumulator, currentValue) => {
    const existingItem = accumulator.find((item) => {
      return item.nombre === currentValue.nombre
    })
    if (!existingItem) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])
}

module.exports = { formatArrayRepeated, formatObjectArrayRepeated }
