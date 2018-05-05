class Colors {
  constructor() {
    this.colors = 'black' // default color
  }

  set(color = this.colors) {
    this.colors = color
  }

  get() {
    return this.colors
  }

  pick() {
    return {
      set: (color = this.colors) => {
        this.colors = color
      },
      get: () => { return this.colors }
    }
  }


}

export default Colors
