export function priceConvert(price) {
  return parseFloat(price).toFixed(2).toString().replace(".", ",")
}
