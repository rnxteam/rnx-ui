/**
 * 惯性减速构造函数
 * v = cos(t)/π + 0.5       t ≤ π/2
 * v = atan(π/2-t)/π + 0.5  t > π/2
 *
 * v = k * (cos(t/kt)/π + 0.5)      t ≤ kt * π/2
 * v = k * (atan(π/2-t/kt)/π + 0.5) t > kt * π/2
 * k = initalV/(1/π + 0.5)
 */
class InertiallyDecreasingSpead {
  constructor(initalV, kt = 200) {
    this.k = initalV / ((1 / Math.PI) + 0.5);
    this.kt = kt;
    this.demarcation = kt * (Math.PI / 2);
  }
  getV(t) {
    let v;
    if (t <= this.demarcation) {
      v = this.k * ((Math.cos(t / this.kt) / Math.PI) + 0.5);
    } else {
      v = this.k * ((Math.atan((Math.PI / 2) - (t / this.kt)) / Math.PI) + 0.5);
    }
    return v;
  }
}

export default InertiallyDecreasingSpead;
