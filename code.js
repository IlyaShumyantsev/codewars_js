/*
Кто убийца?

Мы - следователи. Нам удалось сузить список подозреваемых до небольшого числа
людей. К счастью, у нас есть информация о том, кто с кем встречался.

Дан список имен подозреваемых и всех, с кем подозреваемые встречались в этот день.

{
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle'],
}

А также список убитых:

['Lucas', 'Bill']

Найдите имя убийцы. В нашем случае это James, так как он единственный, кто видел
Lucas и Bill.
*/
function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    const coincidence = suspectInfo[name].reduce((sum, current) => dead.indexOf(current) !== -1 ? (sum += 1) : sum, 0);
    if (coincidence === dead.length && coincidence !== 0) return name;
  }
  return null;
}

const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Kyle", "Lucas"];

console.log(killer(suspectInfo, dead));
