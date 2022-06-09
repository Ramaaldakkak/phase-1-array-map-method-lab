const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  // The first letter of each word should be capitalized.
  const mappingTutorials = tutorials.map(el => {
    // iterating over each word
    const words = el.split(' ')

    const upperCaseWords = words.map(word => word[0].toUpperCase + word.slice(1))

    const tutorial = upperCaseWords.join(' ')

    return tutorial

  })

  return mappingTutorials
  
}