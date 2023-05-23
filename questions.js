// creating an array and passing the number, questions, options, and answers
let python = [
    {
    numb: 1,
    question: "Which of the following is NOT a valid way to open a file in Python?",
    answer: "f = open('filename.txt')",
    options: [
      "f = open('filename.txt', 'r)",
      "f = open('filename.txt')",
      "f = open('filename.txt', mode='r')",
      "f = open('filename.txt', 'w')"
    ]
  },
    {
    numb: 2,
    question: "Which of the following is NOT a valid way to create a dictionary in Python?",
    answer: "d = {(1, 2): 'value'}",
    options: [
      "d = {}",
      "d = dict()",
      "d = {'key1': 'value1', 'key2': 'value2'}",
      "d = {(1, 2): 'value'}"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is NOT a Python data type?",
    answer: "Double",
    options: [
      "Integer",
        "Float",
        "String",
        "Double"
    ]
  },
    {
    numb: 4,
    question: "What is the difference between append and extend methods of a list in Python?",
    answer: "Append adds a list as a single element to the end of a list, while extend adds each element of a list to the end of a list.",
    options: [
      "Append adds a single element to the end of a list, while extend adds multiple elements to the end of a list.",
       "Append adds a list as a single element to the end of a list, while extend adds each element of a list to the end of a list",
    "Append and extend are synonyms and can be used interchangeably.",
 "Extend adds a single element to the end of a list, while append adds multiple elements to the end of a list."
    ]
  },
    {
    numb: 5,
    question: "What is the output of the following code snippet? x = Hello, World! print(x[7:12])",
    answer: "Worl",
    options: [
      "World",
      " o, Wor",
      "Worl",
      "llo, W"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
]; 


let cpp = [
  {
  numb: 1,
  question: "Which of the following is NOT a valid C++ data type?",
  answer: "string",
  options: [
    "int",
    "char",
    "double",
    "string"
  ]
},
  {
  numb: 2,
  question: "Which of the following is used to declare a pointer variable in C++?",
  answer: "*",
  options: [
    "&",
    "*",
    "$",
    "#"
  ]
},
  {
  numb: 3,
  question: "Which of the following is a pass by value parameter passing mechanism in C++?",
  answer: " Call by value",
  options: [
    " Call by value",
    " Call by reference",
    " Call by pointer",
    " Call by name"
  ]
},
  {
  numb: 4,
  question: "What is the purpose of the static keyword in C++?",
  answer: "To declare a variable with static storage duration",
  options: [
    "To declare a global variable",
    "To declare a variable with a fixed value",
    " To declare a variable with block scope",
    "To declare a variable with static storage duration"
  ]
},
  {
  numb: 5,
  question: "Which of the following is NOT a C++ control structure?",
  answer: "repeat-until loop",
  options: [
    " if-else",
    "switch-case",
    " while loop",
    "repeat-until loop"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
]; 

let java = [
  {
  numb: 1,
  question: " Which of the following is NOT a primitive data type in Java?",
  answer: "string",
  options: [
    "int",
    "double",
    "boolean",
    "string"
  ]
},
  {
  numb: 2,
  question: "Which keyword is used to create a subclass in Java?",
  answer: "extends",
  options: [
    "extends",
    "implements",
    "class",
    "this"
  ]
},
  {
  numb: 3,
  question: "Which of the following access modifiers makes a method or variable accessible only within its own class and any inner classes?",
  answer: "private",
  options: [
    "public",
    "private",
    "protected",
    "package-private"
  ]
},
  {
  numb: 4,
  question: "Which of the following is NOT a looping construct in Java?",
  answer: "repeat-until loop",
  options: [
    " for loop",
    "while",
    "do-while loop",
    "repeat-until loop"
  ]
},
  {
  numb: 5,
  question: "Which of the following statements is true about interfaces in Java?",
  answer: "A class can implement multiple interfaces.",
  options: [
    "Interfaces can be instantiated.",
    "Interfaces can only contain abstract methods.",
    "A class can implement multiple interfaces.",
    "Interfaces can have constructors."
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
]; 

let javascript = [
  {
  numb: 1,
  question: "Which of the following is NOT a JavaScript data type?",
  answer: "array",
  options: [
    "string",
    "number",
    "boolean",
    "array"
  ]
},
  {
  numb: 2,
  question: "Which of the following is used to declare a variable in JavaScript?",
  answer: "All of the above",
  options: [
    "let",
    "var",
    "const",
    "All of the above"
  ]
},
  {
  numb: 3,
  question: "Which of the following is NOT a comparison operator in JavaScript?",
  answer: "<>",
  options: [
    "==",
    "!=",
    "<>",
    "==="
  ]
},
  {
  numb: 4,
  question: "Which of the following is NOT a way to create a function in JavaScript?",
  answer: "object literal",
  options: [
    "function declaration ",
    "function expression",
    "arrow function",
    "object literal"
  ]
},
  {
  numb: 5,
  question: "Which of the following is used to add a new element to the end of an array in JavaScript?",
  answer: "push()",
  options: [
    "push()",
    "pop()",
    "shift()",
    "unshift()"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
]; 