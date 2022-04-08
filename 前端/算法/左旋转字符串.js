/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  //   return s.substring(n, s.length) + s.substring(0, n);
  let res = [];
  for (let i = n; i < s.length; i++) {
    res.push(s[i])
  }
  for (let i = 0; i < n; i++) {
    res.push(s[i])
  }
  return res.join("")
};