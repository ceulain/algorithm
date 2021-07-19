/**
 * @name binarySearch
 * @description function allows to find a target in sorted array
 * using binary search algorithm
 *
 * @param {number[]} array - array where to find target
 * @param {number} target - target to find
 * @returns {number} index of target
 */

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.round((left + right) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // target does not exist
  return -1;
};

export default binarySearch;
