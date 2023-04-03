class CalculateVH {
  constructor(variableName) {
    this.vh = '1vh';
    this.variableName = variableName || '--vh';

    this.init();
  }

  init() {
    this.calculateViewportHeight();
    window.addEventListener('resize', this.calculateViewportHeight());
    window.addEventListener('orientationchange', this.calculateViewportHeight());
  }

  calculateViewportHeight() {
    const newVH = window.innerHeight * 0.01 + 'px';
    this.vh = newVH;
    document.documentElement.style.setProperty(this.variableName, newVH);
  }
}

export default CalculateVH;