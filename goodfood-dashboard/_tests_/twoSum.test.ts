import { twoSum } from '../utils/twoSum'

test('positive case', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('negative values', () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2])
})

test('no solution', () => {
  expect(twoSum([1, 2, 3], 10)).toEqual([])
})
