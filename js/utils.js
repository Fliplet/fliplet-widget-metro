/**
 * Checks if a value is undefined
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is undefined, else false
 */
function isUndefined(value) {
  return value === undefined;
}

/**
 * Iterates over elements of collection and invokes iteratee for each element
 * @param {Array|Object} collection - The collection to iterate over
 * @param {Function} iteratee - The function invoked per iteration
 * @returns {void}
 */
function forEach(collection, iteratee) {
  if (!collection || typeof iteratee !== 'function') {
    return;
  }

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        iteratee(collection[key], key, collection);
      }
    }
  }
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} The debounced function
 */
function debounce(func, wait) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  const waitTime = Math.max(0, wait) || 0;
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, waitTime);
  };
}

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for
 * @param {Array} collection - The collection to inspect
 * @param {Function|Object} predicate - The function invoked per iteration or object to match
 * @returns {*} Returns the matched element, else undefined
 */
function find(collection, predicate) {
  if (!Array.isArray(collection) || !predicate) {
    return undefined;
  }

  let predicateFunc = predicate;

  if (typeof predicate === 'object' && predicate !== null) {
    predicateFunc = function(item) {
      for (let key in predicate) {
        if (predicate.hasOwnProperty(key) && item[key] !== predicate[key]) {
          return false;
        }
      }

      return true;
    };
  } else if (typeof predicate !== 'function') {
    return undefined;
  }

  for (let i = 0; i < collection.length; i++) {
    if (predicateFunc(collection[i], i, collection)) {
      return collection[i];
    }
  }

  return undefined;
}

/**
 * Removes all elements from array that predicate returns truthy for
 * @param {Array} array - The array to modify
 * @param {Function|Object} predicate - The function invoked per iteration or object to match
 * @returns {Array} Returns an array of removed elements
 */
function remove(array, predicate) {
  if (!Array.isArray(array) || !predicate) {
    return [];
  }

  const removed = [];
  let predicateFunc = predicate;

  if (typeof predicate === 'object' && predicate !== null) {
    predicateFunc = function(item) {
      for (let key in predicate) {
        if (predicate.hasOwnProperty(key) && item[key] !== predicate[key]) {
          return false;
        }
      }

      return true;
    };
  } else if (typeof predicate !== 'function') {
    return [];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (predicateFunc(array[i], i, array)) {
      removed.unshift(array.splice(i, 1)[0]);
    }
  }

  return removed;
}

/**
 * Creates an array of elements, sorted in ascending order by the results of running each element through iteratee
 * @param {Array} collection - The collection to iterate over
 * @param {Function|string} iteratee - The iteratee to sort by
 * @returns {Array} Returns the new sorted array
 */
function sortBy(collection, iteratee) {
  if (!Array.isArray(collection) || !iteratee) {
    return [];
  }

  let iterateeFunc = iteratee;

  if (typeof iteratee === 'string') {
    iterateeFunc = function(item) {
      return item && item[iteratee];
    };
  } else if (typeof iteratee !== 'function') {
    return [];
  }

  return collection.slice().sort(function(a, b) {
    const aVal = iterateeFunc(a);
    const bVal = iterateeFunc(b);

    if (aVal < bVal) return -1;
    if (aVal > bVal) return 1;

    return 0;
  });
}

/**
 * Checks if value is an empty object, collection, map, or set
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is empty, else false
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}

/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned
 * @param {Object} object - The object to query
 * @param {Array|string} path - The path of the property to get
 * @param {*} defaultValue - The value returned for undefined resolved values
 * @returns {*} Returns the resolved value
 */
function get(object, path, defaultValue) {
  if (object === null || object === undefined || (!path && path !== 0)) {
    return defaultValue;
  }

  if (typeof path !== 'string' && !Array.isArray(path)) {
    return defaultValue;
  }

  const keys = Array.isArray(path) ? path : path.split('.');
  let result = object;

  for (let i = 0; i < keys.length; i++) {
    if (result === null || result === undefined || typeof result !== 'object') {
      return defaultValue;
    }

    result = result[keys[i]];
  }

  return result === undefined ? defaultValue : result;
}

window.FlipletMetroUtils = {
  isUndefined,
  forEach,
  debounce,
  find,
  remove,
  sortBy,
  isEmpty,
  get
};
