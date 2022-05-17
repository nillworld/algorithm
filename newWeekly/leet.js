// https://leetcode.com/problems/deepest-leaves-sum/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function (root) {
  let level = 0;
  let lastLevel = 0;
  let answer = 0;
  let lastNodes = [];

  const deepLevelNode = (node, level) => {
    if (node) {
      if (level > lastLevel) lastLevel = level;
      deepLevelNode(node.left, level + 1);
      deepLevelNode(node.right, level + 1);
      if (lastNodes[level]) {
        lastNodes[level] = lastNodes[level] + node.val;
      } else {
        lastNodes[level] = node.val;
      }
    }
  };
  deepLevelNode(root, level);

  answer = lastNodes[lastLevel];

  return answer;
};

/* 
Success
	Details 
		Runtime: 306 ms, faster than 23.23% of JavaScript online submissions for Deepest Leaves Sum.
		Memory Usage: 97.6 MB, less than 23.34% of JavaScript online submissions for Deepest Leaves Sum. 
*/
