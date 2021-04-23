export default function dispatchUpdateCheckoutEvent(basket) {
  const updateBasketEvent = new CustomEvent('update:basket', {
    detail: { items: basket.items },
  })

  window.dispatchEvent(updateBasketEvent)
}
