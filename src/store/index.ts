const _data = {
  ctx: {} as CanvasRenderingContext2D,
}

const Store = {
  setContext: (item: CanvasRenderingContext2D) => _data.ctx = item,
  getContext: () => _data.ctx,
}

Object.freeze(Store)
export default Store
