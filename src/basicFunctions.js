export function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function isInArr(arr, value) {
  for (const item of arr) {
    if ((item = value)) {
      return true;
    }
  }
  return false;
}
