# Quiz App NodeJS CLI - [DEMO](https://replit.com/@VineetDubey/QuizAppJSCli?lite=1&outputonly=1)

This a command-line based multiple-choice quiz application.

The source questions for the quiz is separated out in a JSON file, so that the JSON URL can be just replaced with a new one and we will get a completely new quiz with the same code, as long as the expected json structure is followed.
```javascript
{
    "title": "Geography Quiz",
    "description": "Test your knowledge of Capital Cities of the World!",
    "questions": [
        {
            "question": "What is the capital of Turkmenistan?",
            "options": {
                "1": "Dushanbe",
                "2": "Ashgabat",
                "3": "Kabul",
                "4": "Tajikistan"
            },
            "answer": "2"
        }
    ]
}
```

This app also makes use of common JS concepts including de-structuring assignment, arrow notations, try catch exception handling, template literals etc.  

[Airbnb JS Style Guidelines](https://airbnb.io/javascript/#table-of-contents) is used as reference.

The code demo is available on repl.it [here.](https://replit.com/@VineetDubey/QuizAppJSCli?lite=1&outputonly=1)
