type ObjectKey = string | number;
type Path = string;

export function getValueByPath(obj: any, path: Path): any {
  // 경로를 '.'으로 분할하여 각 부분을 배열로 변환합니다.
  const keys: ObjectKey[] = path.split('.').reduce<ObjectKey[]>((acc, key) => {
    // 배열 인덱스에 접근하는 경우 (예: someArray[0])를 처리합니다.
    if (key.includes('[')) {
      const [arrayKey, arrayIndex] = key.split('[');
      const index = arrayIndex.slice(0, -1); // 마지막 ']' 제거
      return acc.concat(arrayKey, index);
    } else {
      return acc.concat(key);
    }
  }, []);

  // 주어진 경로에 따라 객체를 순회합니다.
  return keys.reduce((acc, key) => {
    return acc !== null && acc !== undefined ? acc[key] : undefined;
  }, obj);
}

// // 사용 예시
// const obj = {
//   user: {
//     name: "John Doe",
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//     },
//     hobbies: ["reading", "cycling", "hiking"]
//   }
// };
//
// console.log(getValueByPath(obj, "user.name")); // "John Doe"
// console.log(getValueByPath(obj, "user.address.city")); // "Anytown"
// console.log(getValueByPath(obj, "user.hobbies[1]")); // "cycling"
