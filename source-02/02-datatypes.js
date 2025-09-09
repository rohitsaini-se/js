// ============================================================================
// PRIMITIVE DATATYPES
// ============================================================================

/*
1. number => 123, 123.1
2. null => intentional absence of value
3. boolean => true/false
4. bigInt => 1234567890n
5. string => "Hello World!"
6. symbol => used for unique identification
7. undefined => not defined yet
*/

// ============================================================================
// NON-PRIMITIVE (REFERENCE) DATATYPES
// ============================================================================

/*
1. arrays => ["rat", 1, true]
2. functions => funtion sum(num1, num2){ return num1+ num2 }
3. objects => { name: "JavaScript", type: "dynamic", hasGarbageCollector: true }
*/

console.table([
  typeof null,
  typeof undefined,
  typeof true,
  typeof 123,
  typeof "hi",
]);
