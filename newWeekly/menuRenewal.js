// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  let sortedOrders = orders.reduce((sortedOrder, order) => {
    sortedOrder.push(order.split("").sort().join(""));
    return sortedOrder;
  }, []);
  let answer = [];
  // orders.forEach((order) => {
  //   course.forEach((courseNum) => {});
  // });

  // const a = (arr, getNum) => {
  //   if (getNum > 0) {
  //     arr.forEach((element) => {
  //       if (element in answer) {
  //         answer.push(element);
  //       }
  //     });
  //   }
  // };

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두 다 push
    });

    return results; // 결과가 담긴 results를 return
  };

  course.forEach((num) => {
    let courseMenus = [];
    // console.log("check num: ", sortedOrders);

    sortedOrders.forEach((order) => {
      let orderList = getCombinations(order.split(""), num);
      // console.log("orderList", orderList);
      orderList.forEach((courseMenu) => {
        if (courseMenu in courseMenus) {
          courseMenus[courseMenu]++;
        } else {
          courseMenus[courseMenu] = 1;
        }
        // if (courseMenus[courseMenu] > 1) {
        //   answer.push(courseMenu);
        // }
      });
      // console.log("chekc,", order);
      // orderList = getCombinations(order.split(""), num).reduce((courseMenu, combi) => {
      //   if (combi in courseMenu) {
      //     console.log("???????");
      //     courseMenu[combi]++;
      //   } else {
      //     courseMenu[combi] = 1;
      //   }
      //   return courseMenu;
      // }, []);
    });
    // console.log(orderList);
    console.log("courseMenus:  ", courseMenus);
    // for (const courseMenu in courseMenus) {
    //   if (courseMenus[courseMenu] > 1) {
    //     answer.push(courseMenu);
    //   }
    // }
    // console.log("courseMenus:  ", courseMenus.keys());
  });

  return answer;
}

const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const orders2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const orders3 = ["XYZ", "XWY", "WXA"];
const course1 = [2, 3, 4];
const course2 = [2, 3, 5];
const course3 = [2, 3, 4];

console.log(solution(orders1, course1)); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(orders2, course2)); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(orders3, course3)); //	["WX", "XY"]
