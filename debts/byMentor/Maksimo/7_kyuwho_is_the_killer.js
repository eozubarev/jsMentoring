// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
// Перерешать через Set

function killer(suspectInfo, dead) {
  let killerSet = new Set();

  for (const killerName in suspectInfo) {
    dead.forEach((elem) =>
      killerSet.add(suspectInfo[killerName].includes(elem))
    );

    if (killerSet.size === 1 && killerSet.has(true)) {
      return killerName;
    }
  }
}

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
); // 'James'
