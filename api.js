const router = require('express').Router()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

/**
 * http://localhost:3005/api/assessments/questions?assessmentId=Backend%20Test%204&sectionId=0&type=coding
 * http://localhost:3005/api/assessments/questions?assessmentId=Backend%20Test%204&sectionId=0&type=mcq
 */
router.get('/assessments/questions', (req, res) => {
  const { assessmentId, sectionId, type } = req.query
  // if (sectionId == 0) {
  if (type === 'mcq') {
    // mcq qsns ids
    res.json({
      // backend - questions are fetched from db using ids and array of objects is returned
      data: [
        {
          id: 1,
          question:
            '1. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          code: `This is code\nimport sys\n\ndef main():\n  print('Hello World')`,
          image: 'https://kottke.org/plus/misc/images/bitcoin-code.jpg',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
        // {
        //   id: 2,
        //   question:
        //     '2. Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        //   code: `This is code\nimport sys\n\ndef main():\n  print('Hello World')`,
        //   options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        // },
        // {
        //   id: 3,
        //   question:
        //     '3. Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        //   image: 'https://kottke.org/plus/misc/images/bitcoin-code.jpg',
        //   options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        // },
        // {
        //   id: 4,
        //   question:
        //     '4. Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        //   code: `This is code\nimport sys\n\ndef main():\n  print('Hello World')`,
        //   options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        // },
      ],
      message: 'Success',
    })
  } else if (type === 'coding') {
    // coding qsns ids
    res.json({
      data: [
        {
          id: 'c-1',
          desc: '1. Given an integer *n*, return a list of integers from 1 to n as strings except for multiples of <b>3</b> use <b>"Fizz"</b> instead of the integer and for the multiples of <b>5</b> use <b>"Buzz"</b>. For integers which are multiples of both <b>3</b> and <b>5</b> use <b>"FizzBuzz"</b>',
          testcases: [
            {
              input: 'n = 15',
              output:
                '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]',
            },
            {
              input: 'n = 14',
              output:
                '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14"]',
            },
          ],
          additionalNotes:
            '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p><p><strong>Problem</strong></p><p>Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem <strong><em>Ipsum Dipsum</em></strong> Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum </p><p></p><p><strong>Input</strong></p>',
          executionParameters: {
            executionTime: 200, // (ms)
            languages: [
              {
                name: 'python',
                codeSnippet: 'import os\n\n',
                id: 25,
              },
              {
                name: 'cpp',
                codeSnippet: '#include <iostream>\n\nvoid main {\n\n}',
                id: 26,
              },
              {
                name: 'javascript',
                codeSnippet: 'function main() {\n}',
                id: 27,
              },
              {
                name: 'java',
                codeSnippet:
                  'import java.utils.lang;\n\nclass Hello {\n  public static void main(String args[]) { \n\n  } \n}',
                id: 28,
              },
            ],
          },
        },
        {
          id: 'c-2',
          desc: '2. Given an integer *n*, return a list of integers from 1 to n as strings except for multiples of <b>3</b> use <b>"Fizz"</b> instead of the integer and for the multiples of <b>5</b> use <b>"Buzz"</b>. For integers which are multiples of both <b>3</b> and <b>5</b> use <b>"FizzBuzz"</b>',
          testcases: [
            {
              input: 'n = 13',
              output:
                '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13"]',
            },
            {
              input: 'n = 14',
              output:
                '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14"]',
            },
          ],
          additionalNotes:
            '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p><p><strong>Problem</strong></p><p>Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem <strong><em>Ipsum Dipsum</em></strong> Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum Lorem Ipsum Dipsum </p><p></p><p><strong>Input</strong></p>',
          executionParameters: {
            executionTime: 200, // (ms)
            languages: [
              {
                name: 'python',
                codeSnippet: 'import os\n\n\n\n\n',
                id: 25,
              },
            ],
          },
        },
      ],
      message: 'Success',
    })
  }
})

router.post(
  '/assessments/questions/coding-questions/run-all-tests',
  async (req, res) => {
    // because question is nested in the assessment document as of now.
    const { code, questionId, languageId, assessmentId } = req.body
    console.log({ code, questionId, languageId })
    await sleep(1000)
    // return result based onf question id and user code
    res.json({
      data: [
        {
          passed: true,
          output: '1 2 3',
          expectedOutput: '1 2 3',
        },
        {
          passed: false,
          output: '1 2 3',
          expectedOutput: '2 3 4',
        },
      ],
      message: 'Success',
    })
  }
)

router.post(
  '/assessments/questions/coding-questions/run-test',
  async (req, res) => {
    const { code, questionId, languageId, assessmentId, customTestcase } =
      req.body
    console.log(customTestcase)
    await sleep(1000)
    // return result based onf question id and user code
    res.json({
      data: {
        passed: false,
        output: '1 2 3',
        expectedOutput: '2 3 4',
        input: customTestcase,
      },
      message: 'Success',
    })
  }
)

// questions in the test and summary of test
router.get('/assessments/:testid', (req, res) => {
  res.send({
    data: {
      id: 'Backend Test 4',
      jobId: '1234',
      mcqQuestions: ['100', '101'], // ids of questions
      codingQuestions: ['30', '31'], // ids of questions
      instructions: [
        'Ensure that you are attempting the test using the correct email ID.',
        'You must click Submit after you answer each question.',
        'If you need assistance during the test, click the question mark (?) in the lower-right corner of the page to raise a ticket.',
        'Once the test has started, the timer cannot be paused. You have to complete the test in one attempt.',
        'Do not close the browser window or tab of the test interface before you submit your final answers.',
        'It is recommended that you ensure that your system meets our compatibility requirements and check your Internet connection before starting the test.',
        'It is recommended that you attempt the test in an incognito or private window so that any extensions installed do not interfere with the test environment.',
        'We recommend that you close all other windows and tabs to ensure that there are no distractions.',
      ],
      sections: [
        {
          id: 0,
          name: 'mcq questions',
        },
        {
          id: 1,
          name: 'coding questions',
        },
      ],
    },
    message: 'Success',
  })
})

router.get('/jobs/:jobid', (req, res) => {
  res.send({
    data: {
      title: 'Product Developer',
      description: 'manage the ingage product and team of 5 peeps',
      qualifications: ['B.E', 'M.E'],
      technologies: ['Angular', 'Firebase', 'Nodejs', 'RedisDB'],
      experience: '4+',
      type: 'Full Time',
      assessmentId: 'Backend Test 4',
    },
    message: 'Success',
  })
})

router.get('/verify-token/:token', (req, res) => {
  // req.params.token
  const token = 'asdfa.dfasd.fasdf'
  return res.json({
    data: {
      email: 'jerub@gmail.com',
      // ... in future full test details
    },
    message: 'Success',
  })
})

router.put('/candidate', (req, res) => {
  console.log(req.body)
  return res.send({
    data: {},
    message: 'Success',
  })
})

module.exports = router
