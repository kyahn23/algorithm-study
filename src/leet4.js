/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  console.log(prefix);
  for (let word of strs) {
    console.log(word.indexOf(prefix));
    console.log("배열중에", word);
    while (word.indexOf(prefix) != 0) {
      console.log("indexOf", word.indexOf(prefix));
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
    }
  }

  //   return prefix;
  console.log(prefix);
};

longestCommonPrefix(["flower", "flow", "flight"]);
