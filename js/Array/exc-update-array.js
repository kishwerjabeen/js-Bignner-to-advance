var newHolder = ["cat", "dog", "rabit", "bird"];
newHolder[10] = "Horse";
newHolder.fill("fish", 3, 10);
newHolder.reverse();

newHolder.pop();
newHolder.push("sheep");



console.log(newHolder);