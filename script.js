const flashCards = [
    {
      "question": "What will the following code output?\n\n```javascript\nconsole.log(typeof null);\n```",
      "answer": "The output will be 'object'. This is a known quirk in JavaScript where null is considered an object due to legacy implementation details.",
      "category": "JavaScript"
    },
    {
      "question": "What does the following code print?\n\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n```",
      "answer": "It prints [1, 2, 3, 4]. In Python, lists are mutable and passed by reference, so 'a' and 'b' refer to the same list.",
      "category": "Python"
    },
    {
      "question": "What will this C code output?\n\n```c\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf(\"%d\\n\", a++);\n    return 0;\n}\n```",
      "answer": "It prints 5. The post-increment operator returns the current value and then increments it.",
      "category": "C"
    },
    {
      "question": "What will the following C++ code output?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << ++x << endl;\n    return 0;\n}\n```",
      "answer": "It prints 11. The pre-increment operator increments the value before returning it.",
      "category": "C++"
    },
    {
      "question": "What does the following code log?\n\n```javascript\nlet x = 0.1 + 0.2;\nconsole.log(x === 0.3);\n```",
      "answer": "It prints false due to floating-point precision errors. 0.1 + 0.2 results in 0.30000000000000004.",
      "category": "JavaScript"
    },
    {
      "question": "What is the output of this Python function?\n\n```python\ndef func():\n    return 'Hello'\n\nprint(func.__name__)\n```",
      "answer": "It prints 'func'. The '__name__' attribute of a function gives its identifier.",
      "category": "Python"
    },
    {
      "question": "What does the following C code print?\n\n```c\n#include <stdio.h>\nint main() {\n    int a = 10, b = 3;\n    printf(\"%d\", a / b);\n    return 0;\n}\n```",
      "answer": "It prints 3. Integer division truncates the result in C.",
      "category": "C"
    },
    {
      "question": "What does this C++ code output?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    string s = \"abc\";\n    s += 'd';\n    cout << s;\n    return 0;\n}\n```",
      "answer": "It prints 'abcd'. The '+=' operator appends characters to strings in C++.",
      "category": "C++"
    },
    {
      "question": "What does this JavaScript function return?\n\n```javascript\nfunction isEven(num) {\n  return num % 2 === 0;\n}\nconsole.log(isEven(4));\n```",
      "answer": "It prints true because 4 is divisible by 2 with no remainder.",
      "category": "JavaScript"
    },
    {
      "question": "What will this Python code output?\n\n```python\nprint(bool(0), bool(1), bool(-1))\n```",
      "answer": "It prints False True True. In Python, 0 is considered False, and any non-zero number is True.",
      "category": "Python"
    },
    {
      "question": "What is the output of this C++ code?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 2;\n    float c = (float)a / b;\n    cout << c;\n    return 0;\n}\n```",
      "answer": "It prints 2.5. The cast to float ensures floating-point division instead of integer division.",
      "category": "C++"
    },
    {
      "question": "What will this Python code print?\n\n```python\nx = [1, 2, 3]\nprint(x[::-1])\n```",
      "answer": "It prints [3, 2, 1]. The slicing syntax [::-1] reverses the list.",
      "category": "Python"
    },
    {
      "question": "What is the output of this JavaScript snippet?\n\n```javascript\nconst obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));\n```",
      "answer": "It prints ['a', 'b']. Object.keys returns an array of the object's own enumerable property names.",
      "category": "JavaScript"
    },
    {
      "question": "What is the result of this C code?\n\n```c\n#include <stdio.h>\nint main() {\n    int x = 5, y = 2;\n    printf(\"%d\", x % y);\n    return 0;\n}\n```",
      "answer": "It prints 1. The modulus operator returns the remainder of integer division.",
      "category": "C"
    },
    {
      "question": "What does this Python function return?\n\n```python\ndef greet(name='World'):\n    return f'Hello, {name}!'\n\nprint(greet())\n```",
      "answer": "It prints 'Hello, World!'. The function uses a default argument when none is provided.",
      "category": "Python"
    },
    {
      "question": "What is the output of the following JavaScript code?\n\n```javascript\nconsole.log('5' - 2);\n```",
      "answer": "It prints 3. JavaScript performs type coercion and treats '5' as a number.",
      "category": "JavaScript"
    },
    {
      "question": "What will the following C++ code print?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3};\n    cout << *(arr + 1);\n    return 0;\n}\n```",
      "answer": "It prints 2. Pointer arithmetic accesses the second element of the array.",
      "category": "C++"
    },
    {
      "question": "What is the output of this Python code?\n\n```python\na = {1, 2, 3}\na.add(4)\nprint(a)\n```",
      "answer": "It prints {1, 2, 3, 4}. The 'add' method inserts a new element into a set.",
      "category": "Python"
    },
    {
      "question": "What will this JavaScript expression evaluate to?\n\n```javascript\ntypeof NaN\n```",
      "answer": "It returns 'number'. In JavaScript, NaN is considered of type 'number'.",
      "category": "JavaScript"
    },
    {
      "question": "What does this C program print?\n\n```c\n#include <stdio.h>\nint main() {\n    char c = 'A';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
      "answer": "It prints 65. The character 'A' has an ASCII value of 65.",
      "category": "C"
    },
    {
      "question": "What is the output of this JavaScript code?\n\n```javascript\nconsole.log([1, 2, 3] + [4, 5, 6]);\n```",
      "answer": "It prints '1,2,34,5,6'. Arrays are converted to strings and concatenated.",
      "category": "JavaScript"
    },
    {
      "question": "What does this Python code output?\n\n```python\ndef add(x, y=10):\n    return x + y\n\nprint(add(5))\n```",
      "answer": "It prints 15. The function uses the default value 10 for y.",
      "category": "Python"
    },
    {
      "question": "What will this C++ code print?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 3;\n    cout << (x << 1);\n    return 0;\n}\n```",
      "answer": "It prints 6. The left shift operator multiplies by 2.",
      "category": "C++"
    },
    {
      "question": "What is the output of this C code?\n\n```c\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf(\"%d\", a == 5);\n    return 0;\n}\n```",
      "answer": "It prints 1. The comparison a == 5 evaluates to true which is represented by 1.",
      "category": "C"
    },
    {
      "question": "What does this JavaScript code return?\n\n```javascript\nconsole.log(!!'Hello');\n```",
      "answer": "It prints true. Double negation coerces the string into a boolean.",
      "category": "JavaScript"
    },
    {
      "question": "What is printed by this Python code?\n\n```python\nprint(len(set([1, 2, 2, 3])))\n```",
      "answer": "It prints 3. Sets remove duplicates.",
      "category": "Python"
    },
    {
      "question": "What will this C++ code output?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    string str = \"hello\";\n    cout << str.length();\n    return 0;\n}\n```",
      "answer": "It prints 5. The length of the string \"hello\" is 5.",
      "category": "C++"
    },
    {
      "question": "What does this C code display?\n\n```c\n#include <stdio.h>\nint main() {\n    printf(\"%c\", 65);\n    return 0;\n}\n```",
      "answer": "It prints 'A'. The ASCII value 65 corresponds to 'A'.",
      "category": "C"
    },
    {
      "question": "What does this Python code output?\n\n```python\nx = [1, 2, 3]\nprint(sum(x))\n```",
      "answer": "It prints 6. The sum() function adds all elements in the list.",
      "category": "Python"
    },
    {
      "question": "What does this JavaScript snippet print?\n\n```javascript\nconsole.log(0 == '0');\n```",
      "answer": "It prints true. The == operator performs type coercion before comparison.",
      "category": "JavaScript"
    }
  ];
  
  // DOM elements
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const flipBtn = document.getElementById('flip-btn');
  const flashcard = document.getElementById('flashcard');
  const currentCardEl = document.getElementById('current-card');
  const totalCardsEl = document.getElementById('total-cards');
  const progressBar = document.querySelector('.progress-bar');
  
  // State variables
  let currentIndex = 0;
  let remainingCards = [];

  // Initialize flashcards data
  function initializeFlashcards() {
      resetDeck();
      updateCard();
  }

  // Reset and shuffle the deck
  function resetDeck() {
      remainingCards = [...Array(flashCards.length).keys()];
      shuffleArray(remainingCards);
      currentIndex = 0;
      totalCardsEl.textContent = remainingCards.length;
      updateNavigationState();
  }

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // Format code content with syntax highlighting
  function formatCodeContent(content) {
      const codeMatch = content.match(/```([a-zA-Z]+)\n([\s\S]*?)```/);
      if (codeMatch) {
          const language = codeMatch[1];
          const code = codeMatch[2].trim();
          const textContent = content.replace(/```[a-zA-Z]+\n[\s\S]*?```/, '').trim();
          
          return `
              <div class="content-text">${textContent}</div>
              <div class="code-container">
                  <div class="code-header">
                      <span class="code-language">${language}</span>
                  </div>
                  <pre><code class="language-${language}">${code}</code></pre>
              </div>
          `;
      }
      return content;
  }
  
  // Update card
  function updateCard() {
      if (!flashCards || !flashCards.length || remainingCards.length === 0) {
          console.error('No flashcards available');
          return;
      }
      
      const currentCardIndex = remainingCards[currentIndex];
      const currentCard = flashCards[currentCardIndex];
      
      // Update card counter and progress bar
      currentCardEl.textContent = currentIndex + 1;
      const progressPercentage = ((currentIndex + 1) / remainingCards.length) * 100;
      progressBar.style.width = `${progressPercentage}%`;
      
      // Update front and back of card
      const frontContent = document.querySelector('.front .card-content');
      const backContent = document.querySelector('.back .card-content');
      
      frontContent.innerHTML = formatCodeContent(currentCard.question);
      backContent.innerHTML = formatCodeContent(currentCard.answer);
      
      // Reset card to front side
      flashcard.classList.remove('flipped');
  }
  
  // Toggle card flip
  function toggleCard() {
      flashcard.classList.toggle('flipped');
  }
  
  // Navigation functions
  function showNext() {
      if (currentIndex < remainingCards.length - 1) {
          currentIndex++;
          updateCard();
          updateNavigationState();
      }
  }
  
  function showPrevious() {
      if (currentIndex > 0) {
          currentIndex--;
          updateCard();
          updateNavigationState();
      }
  }
  
  function updateNavigationState() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === remainingCards.length - 1;
  }
  
  // Event Listeners
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrevious);
  flipBtn.addEventListener('click', toggleCard);
  flashcard.addEventListener('click', toggleCard);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          toggleCard();
      } else if (e.key === 'ArrowRight') {
          showNext();
      } else if (e.key === 'ArrowLeft') {
          showPrevious();
      } else if (e.key === 'r') {
          resetDeck();
      }
  });
  
  // Initialize the app
  initializeFlashcards();