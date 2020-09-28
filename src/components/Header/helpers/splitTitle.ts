export const splitTitle = (title: string) => {
  const wordArr = title.toLowerCase().split(" ");
  const newWordArr = [];
  wordArr.forEach(word => {
    switch (word) {
      case "&":
        newWordArr[newWordArr.length - 1] = `${
          newWordArr[newWordArr.length - 1]
        } &`;
        break;
      case "school":
        newWordArr[newWordArr.length - 1] = `${
          newWordArr[newWordArr.length - 1]
        } school`;
        break;
      default:
        newWordArr.push(word);
    }
  });

  return newWordArr;
};
