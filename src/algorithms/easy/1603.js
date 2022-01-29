// 1603. Design Parking System
// https://leetcode.com/problems/design-parking-system/

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.bigLeft = big
  this.mediumLeft = medium
  this.smallLeft = small
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1) {
    if (this.bigLeft > 0) {
      this.bigLeft--
      return true
    } else return false
  }

  if (carType === 2) {
    if (this.mediumLeft > 0) {
      this.mediumLeft--
      return true
    } else return false
  }

  if (carType === 3) {
    if (this.smallLeft > 0) {
      this.smallLeft--
      return true
    } else return false
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
