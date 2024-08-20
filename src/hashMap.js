import { linkedList } from "./linkedList.js";
function hashMap() {
  let buckets = new Array(16);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }

    return hashCode;
  };

  const set = (key, value) => {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined) {
      buckets[index] = linkedList();
      buckets[index].append(key, value);
    } else {
      buckets[index].append(key, value);
    }
  };

  const get = (key) => {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if(buckets[index] === undefined){
        throw new Error("key doesn't exist");        
    }else{
        return buckets[index].find(key)
    }
    
  };

  return { set, get };
}

export default hashMap;
