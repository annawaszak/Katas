// 12.01.2021 -5 kyu
// https://www.codewars.com/kata/52ae6b6623b443d9090002c8

// You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)
// You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}
// Your task is to create a list of all possible presents you might get.


function guessGifts(wishlist, presents) {
  const matches = presents.map(present => {
    return wishlist.filter(gift => {
      if (gift.size === present.size && gift.clatters === present.clatters && gift.weight === present.weight) return gift
    }).map(gift => gift.name)
  })
  const matchesFormatted = [].concat.apply([], matches)
  return matchesFormatted.filter((gift, i, arr) => arr.indexOf(gift) === i)
}