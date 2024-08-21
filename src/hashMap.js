import { linkedList } from "./linkedList.js";
function hashMap() {
  let size = 16;
  let buckets = new Array(size);
  let noOfEntries = 0;
  let loadFactorThreshold = 0.75;

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }

    return hashCode;
  };

  const resize = () => {
    size = size * 2;
    let data = entries();
    clear();
    for (let obj of data) {
      set(obj.key, obj.value);
    }
  };

  const set = (key, value) => {
    if (noOfEntries / size >= loadFactorThreshold) {
      resize(); // Resize the buckets if load factor exceeds the threshold
    }
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined) {
      buckets[index] = linkedList();
      buckets[index].append(key, value);
      noOfEntries++;
    } else {
      if (buckets[index].contains(key)) {
        buckets[index].at(key).value = value;
      } else {
        buckets[index].append(key, value);
        noOfEntries++;
      }
    }
  };

  const get = (key) => {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined) {
      throw new Error("key doesn't exist");
    } else {
      return buckets[index].find(key);
    }
  };

  const has = (key) => {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined) {
      return false;
    } else {
      return buckets[index].contains(key);
    }
  };

  const remove = (key) => {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined || !buckets[index].contains(key)) {
      throw new Error("key doesn't exist");
    } else {
      buckets[index].removeAt(key);
      if (buckets[index].size() === 0) {
        buckets[index] = undefined;
      }
      noOfEntries--;
    }
  };

  const length = () => {
    return noOfEntries;
  };

  const clear = () => {
    buckets = new Array(size);
    noOfEntries = 0;
  };

  const keys = () => {
    let allKeys = [];
    for (let bucket of buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head();
        while (currentNode !== null) {
          allKeys.push(currentNode.key);
          currentNode = currentNode.next;
        }
      }
    }
    return allKeys;
  };

  const values = () => {
    let allValues = [];
    for (let bucket of buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head();
        while (currentNode !== null) {
          allValues.push(currentNode.value);
          currentNode = currentNode.next;
        }
      }
    }
    return allValues;
  };

  const entries = () => {
    let allEntries = [];
    for (let bucket of buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head();
        while (currentNode !== null) {
          allEntries.push({ key: currentNode.key, value: currentNode.value });
          currentNode = currentNode.next;
        }
      }
    }
    return allEntries;
  };

  const noOfBuckets = () => {
    return buckets.length;
  };

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    noOfBuckets,
  };
}

export default hashMap;
