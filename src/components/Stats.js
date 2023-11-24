export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀🧳</p>
    );

  const numItems = items.length;

  // METHOD #001
  const numPacked = items.filter((item) => item.packed).length;

  // // METHOD #002
  // // 🟢 MINE ✅🏌🏾‍♂️
  // const numPacked = items.reduce((accumulator, item) => {
  //   if (item.packed) return accumulator + 1;
  //   else return accumulator;
  // }, 0);
  // console.log(numPacked);
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything! You're set to fly ✅🛩️🌉"
        : `👜 You have ${numItems} ${
            numItems === 1 ? "item" : "items"
          } on your list, and you ${
            numPacked > 0
              ? `have already packed ${numPacked} `
              : "haven't yet packed any "
          } of them (${percentage}% prepared)`}
    </footer>
  );
}
