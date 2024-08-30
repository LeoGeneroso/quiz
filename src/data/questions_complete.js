const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Which tag creates a paragraph?",
        alternatives: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "It's an one letter tag",
      },
      {
        question: "Which attribute adds a link to the 'a' tag?",
        alternatives: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "Unordered lists are tagged as:",
        alternatives: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which attribute makes the input mandatory?",
        alternatives: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "The semantic tag indicated for footers is:",
        alternatives: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which rule changes the color of an element?",
        alternatives: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "It's intuitive",
      },
      {
        question: "To increase the font of an element we use:",
        alternatives: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "The position that leaves an element fixed is:",
        alternatives: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is Vanilla JavaScript?",
        alternatives: [
          "Pure JavaScript",
          "A JavaScript library",
          "A JavaScript component",
          "A JavaScript compiler",
        ],
        answer: "Pure JavaScript",
      },
      {
        question: "With which statement do we declare a constant in JavaScript?",
        alternatives: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Which of the following data types does not exist in JavaScript?",
        alternatives: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Which of the following methods selects an element?",
        alternatives: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question: "Which of these properties gives the number of elements in an array?",
        alternatives: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
