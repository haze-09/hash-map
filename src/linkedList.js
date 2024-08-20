function createNode(key, value, prev, next) {
  return {key, value, prev, next };
}

function linkedList() {
  let headNode;
  let length = 0;

  const append = (key, value) => {
    if (headNode === undefined) {
      headNode = createNode(key, value, null, null);
    } else {
      let tailNode = tail();
      tailNode.next = createNode(key, value, tailNode, null);
    }
    length++;
  };

  const prepend = (key, value) => {
    if (headNode === undefined) {
      headNode = createNode(key, value, null, null);
    } else {
      headNode.prev = createNode(key, value, null, headNode);
      headNode = headNode.prev;
    }
    length++;
  };

  const size = () => {
    return length;
  };

  const head = () => {
    if (headNode === undefined) {
      return "list is empty";
    } else {
      return headNode;
    }
  };

  const tail = (currentNode = headNode) => {
    if (currentNode === undefined) {
      return "list is empty";
    } else {
      if (currentNode.next === null) {
        return currentNode;
      }
      return tail(currentNode.next);
    }
  };

  const at = (index, currentNode = headNode) => {
    let result;
    for (let i = 1; i <= index; i++) {
      result = currentNode;
      currentNode = currentNode.next;
    }
    return result;
  };

  const pop = () => {
    let tailNode = tail();
    tailNode.prev.next = null;
    tailNode.prev = null;
    length--;
  };

  const contains = (key, currentNode = headNode) => {
    if (currentNode.key === key) {
      return true;
    } else if (currentNode.next === null) {
      return false;
    } else {
      return contains(key, currentNode.next);
    }
  };

  const find = (key, currentNode = headNode) => {
    while (currentNode.key !== key) {
      if (currentNode.next === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return currentNode.value;
  };

  const toString = (currentNode = headNode) => {
    if (currentNode === undefined) {
      return "List is empty";
    } else if (currentNode.next === null) {
      return currentNode.value;
    } else {
      return currentNode.value + " -> " + toString(currentNode.next);
    }
  };
  const insertAt = (key, value, index) => {
    let nextNode = at(index);
    let prevNode = nextNode.prev;
    let newNode = createNode(key, value, prevNode, nextNode);
    prevNode.next = newNode;
    nextNode.prev = newNode;
    length++;
  };
  const removeAt = (index) => {
    let currentNode = at(index);
    let nextNode = currentNode.next;
    let prevNode = currentNode.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    length--;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
export { linkedList };
