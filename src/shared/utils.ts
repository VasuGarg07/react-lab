export namespace Utils {
  // COLOR GEN
  export function componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  export function rgbToHex(r: number, g: number, b: number): string {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
}