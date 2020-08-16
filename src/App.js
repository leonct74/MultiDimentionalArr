import React, { Fragment, useEffect, useState } from "react";

//INTIAL ARRAY
const sortList = [
  ["44444", "Pastas"],
  ["1111", "Pizzas"],
  ["3333", "Pastas"],
  ["2222", "Pizzas"],
  ["55555", "Desserts"]
];

// TEST
const updateCatArr = async (arr, dimension, catOld, catNew) => {
  //dimension is 0 for ID and 1 for CATEGORY
  //const dim = parseInt(dimension,10);
  const newArr = arr.map((elem, i) => {
    console.log("arr[i]  : ", arr[i][1]);
    if (elem[dimension] === catOld) {
      const updated = [
        ...elem.slice(0, dimension),
        catNew,
        ...elem.slice(dimension + 1)
      ];
      return updated;
      //elem[i][1] = "test"
    }
    return elem;
  });
  console.log("index: ", newArr);
  return newArr;
};

// MODIFY CATEGORY
console.log("Sortlist [1][2]: ", sortList[1][0]);

export default function App() {
  const [sortedItems, setSortedItems] = useState(sortList);

  useEffect(() => {
    async function fetchData() {
      const result = await updateCatArr(sortedItems, 1, "Pizzas", "Pizzetta");
      console.log(":@rener: ", result);
      setSortedItems(result);
    }

    fetchData();
  }, [sortList]);

  console.log("SORTED ARRAY: ", sortedItems);
  return (
    <div>
      {/* <div>{sortList}</div> */}
      {sortedItems.map((item, i) => (
        <div
          key={i}
          style={{
            width: 150,
            paddingLeft: 10,
            paddingRight: 10,
            borderStyle: "solid",
            borderWidth: 0.5,
            maxWidth: 250,
            margin: 5
          }}
        >
          CAT: {item[1]} <br></br>
          ID: {item[0]}
        </div>
      ))}
    </div>
  );
}
