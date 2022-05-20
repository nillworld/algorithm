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

/* =================================  first  ================================== */

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

/* =================================  second  ================================== */

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
      if (lastLevel === level) {
        if (lastNodes[level]) {
          lastNodes[level] = lastNodes[level] + node.val;
        } else {
          lastNodes[level] = node.val;
        }
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
		Runtime: 190 ms, faster than 88.83% of JavaScript online submissions for Deepest Leaves Sum.
		Memory Usage: 66.1 MB, less than 85.87% of JavaScript online submissions for Deepest Leaves Sum. 
*/

/* =================================  third  ================================== */

var deepestLeavesSum = function (root) {
  let level = 0;
  let lastLevel = 0;
  let answer = 0;
  let lastNodes = 0;

  const deepLevelNode = (node, level) => {
    if (node) {
      if (level > lastLevel) {
        lastLevel = level;
        lastNodes = 0;
      }
      deepLevelNode(node.left, level + 1);
      deepLevelNode(node.right, level + 1);
      if (lastLevel === level) {
        lastNodes += node.val;
      }
    }
  };
  deepLevelNode(root, level);

  answer = lastNodes;

  return answer;
};
/* 
Success
	Details 
		Runtime: 176 ms, faster than 95.03% of JavaScript online submissions for Deepest Leaves Sum.
		Memory Usage: 65.3 MB, less than 90.50% of JavaScript online submissions for Deepest Leaves Sum. 
*/

// Runtime and Memory usage is inaccurate. even I typed same code, differ greatly...
