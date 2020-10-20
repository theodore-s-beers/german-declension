//
// WORD LISTS
//

const mascNouns = [
  { noun: 'Teppich', suffix: 's', weak: false },
  { noun: 'Sittich', suffix: 's', weak: false },
  { noun: 'Abgleich', suffix: 's', weak: false },
  { noun: 'Bereich', suffix: 's', weak: false },
  { noun: 'Teich', suffix: 'es', weak: false },
  { noun: 'Ventilator', suffix: 's', weak: false },
  { noun: 'Motor', suffix: 's', weak: false },
  { noun: 'Marmor', suffix: 's', weak: false },
  { noun: 'König', suffix: 's', weak: false },
  { noun: 'Honig', suffix: 's', weak: false },
  { noun: 'Essig', suffix: 's', weak: false },
  { noun: 'Schmetterling', suffix: 's', weak: false },
  { noun: 'Frühling', suffix: 's', weak: false },
  { noun: 'Lehrling', suffix: 's', weak: false },
  { noun: 'Zwilling', suffix: 's', weak: false },
  { noun: 'Optimismus', suffix: '', weak: false },
  { noun: 'Magnetismus', suffix: '', weak: false },
  { noun: 'Expressionismus', suffix: '', weak: false },
  { noun: 'Feudalismus', suffix: '', weak: false },
  { noun: 'Kapitalismus', suffix: '', weak: false },
  { noun: 'Bär', suffix: 'en', weak: true },
  { noun: 'Veterinär', suffix: 's', weak: false },
  { noun: 'Aktionär', suffix: 's', weak: false },
  { noun: 'Sekretär', suffix: 's', weak: false },
  { noun: 'Diamant', suffix: 'en', weak: true },
  { noun: 'Fabrikant', suffix: 'en', weak: true },
  { noun: 'Elefant', suffix: 'en', weak: true },
  { noun: 'Lieferant', suffix: 'en', weak: true },
  { noun: 'Schlüssel', suffix: 's', weak: false },
  { noun: 'Löffel', suffix: 's', weak: false },
  { noun: 'Mantel', suffix: 's', weak: false },
  { noun: 'Montag', suffix: 's', weak: false },
  { noun: 'Mittwoch', suffix: 's', weak: false },
  { noun: 'Oktober', suffix: 's', weak: false },
  { noun: 'Dezember', suffix: 's', weak: false },
  { noun: 'Sommer', suffix: 's', weak: false },
  { noun: 'Herbst', suffix: 'es', weak: false },
  { noun: 'Winter', suffix: 's', weak: false },
  { noun: 'Onkel', suffix: 's', weak: false },
  { noun: 'Vater', suffix: 's', weak: false },
  { noun: 'Junge', suffix: 'n', weak: true },
  { noun: 'Prinz', suffix: 'en', weak: true },
  { noun: 'Held', suffix: 'en', weak: true },
  { noun: 'Sänger', suffix: 's', weak: false },
  { noun: 'Koch', suffix: 'es', weak: false },
  { noun: 'Lehrer', suffix: 's', weak: false },
  { noun: 'Norden', suffix: 's', weak: false },
  { noun: 'Süden', suffix: 's', weak: false },
  { noun: 'Westen', suffix: 's', weak: false },
  { noun: 'Osten', suffix: 's', weak: false },
  { noun: 'Regen', suffix: 's', weak: false },
  { noun: 'Schnee', suffix: 's', weak: false },
  { noun: 'Wind', suffix: 'es', weak: false },
  { noun: 'Blitz', suffix: 'es', weak: false }
]

const femNouns = [
  { noun: 'Polizei' },
  { noun: 'Abtei' },
  { noun: 'Konditorei' },
  { noun: 'Leckerei' },
  { noun: 'Datei' },
  { noun: 'Zeitung' },
  { noun: 'Dichtung' },
  { noun: 'Empfehlung' },
  { noun: 'Erfahrung' },
  { noun: 'Lehrerin' },
  { noun: 'Darstellerin' },
  { noun: 'Eignerin' },
  { noun: 'Australierin' },
  { noun: 'Chefin' },
  { noun: 'Freiheit' },
  { noun: 'Neuheit' },
  { noun: 'Sicherheit' },
  { noun: 'Trägheit' },
  { noun: 'Gefährlichkeit' },
  { noun: 'Höflichkeit' },
  { noun: 'Langsamkeit' },
  { noun: 'Häufigkeit' },
  { noun: 'Produktion' },
  { noun: 'Funktion' },
  { noun: 'Kanalisation' },
  { noun: 'Nation' },
  { noun: 'Geografie' },
  { noun: 'Garantie' },
  { noun: 'Fantasie' },
  { noun: 'Galerie' },
  { noun: 'Astronomie' },
  { noun: 'Freundschaft' },
  { noun: 'Gemeinschaft' },
  { noun: 'Wirtschaft' },
  { noun: 'Wissenschaft' },
  { noun: 'Kultur' },
  { noun: 'Natur' },
  { noun: 'Diktatur' },
  { noun: 'Agentur' },
  { noun: 'Marmelade' },
  { noun: 'Limonade' },
  { noun: 'Schokolade' },
  { noun: 'Schublade' },
  { noun: 'Frau' },
  { noun: 'Mutter' },
  { noun: 'Schwester' },
  { noun: 'Tanne' },
  { noun: 'Eiche' },
  { noun: 'Linde' },
  { noun: 'Rose' },
  { noun: 'Tulpe' },
  { noun: 'Orchidee' },
  { noun: 'Birne' },
  { noun: 'Banane' },
  { noun: 'Pflaume' },
  { noun: 'Zahl' }
]

const neutNouns = [
  { noun: 'Mädchen', suffix: 's' },
  { noun: 'Pfännchen', suffix: 's' },
  { noun: 'Maskottchen', suffix: 's' },
  { noun: 'Märchen', suffix: 's' },
  { noun: 'Päckchen', suffix: 's' },
  { noun: 'Häuslein', suffix: 's' },
  { noun: 'Vöglein', suffix: 's' },
  { noun: 'Bächlein', suffix: 's' },
  { noun: 'Büchlein', suffix: 's' },
  { noun: 'Bett', suffix: 'es' },
  { noun: 'Ballett', suffix: 's' },
  { noun: 'Buffet', suffix: 's' },
  { noun: 'Omelett', suffix: 's' },
  { noun: 'Brett', suffix: 'es' },
  { noun: 'Medikament', suffix: 's' },
  { noun: 'Testament', suffix: 's' },
  { noun: 'Element', suffix: 's' },
  { noun: 'Instrument', suffix: 's' },
  { noun: 'Fragment', suffix: 's' },
  { noun: 'Datum', suffix: 's' },
  { noun: 'Wachstum', suffix: 's' },
  { noun: 'Ultimatum', suffix: 's' },
  { noun: 'Heiligtum', suffix: 's' },
  { noun: 'Votum', suffix: 's' },
  { noun: 'Niveau', suffix: 's' },
  { noun: 'Plateau', suffix: 's' },
  { noun: 'Kind', suffix: 'es' },
  { noun: 'Lamm', suffix: 'es' },
  { noun: 'Grün', suffix: 's' },
  { noun: 'Blau', suffix: 's' },
  { noun: 'Deutsch', suffix: '' },
  { noun: 'Französisch', suffix: '' },
  { noun: 'Spanisch', suffix: '' },
  { noun: 'Baby', suffix: 's' },
  { noun: 'Handy', suffix: 's' },
  { noun: 'Image', suffix: 's' },
  { noun: 'Gold', suffix: 'es' },
  { noun: 'Kupfer', suffix: 's' },
  { noun: 'Gebirge', suffix: 's' },
  { noun: 'Gemüse', suffix: 's' }
]

const plurNouns = [
  { noun: 'Ängste', suffix: 'n' },
  { noun: 'Äpfel', suffix: 'n' },
  { noun: 'Ärzte', suffix: 'n' },
  { noun: 'Bäume', suffix: 'n' },
  { noun: 'Besuche', suffix: 'n' },
  { noun: 'Bilder', suffix: 'n' },
  { noun: 'Bücher', suffix: 'n' },
  { noun: 'Eier', suffix: 'n' },
  { noun: 'Ergebnisse', suffix: 'n' },
  { noun: 'Erlaubnisse', suffix: 'n' },
  { noun: 'Flöße', suffix: 'n' },
  { noun: 'Flüchtlinge', suffix: 'n' },
  { noun: 'Friseure', suffix: 'n' },
  { noun: 'Früchte', suffix: 'n' },
  { noun: 'Gedichte', suffix: 'n' },
  { noun: 'Geister', suffix: 'n' },
  { noun: 'Geschwister', suffix: 'n' },
  { noun: 'Häuser', suffix: 'n' },
  { noun: 'Jahre', suffix: 'n' },
  { noun: 'Kenntnisse', suffix: 'n' },
  { noun: 'Kinder', suffix: 'n' },
  { noun: 'Klöster', suffix: 'n' },
  { noun: 'Länder', suffix: 'n' },
  { noun: 'Leiber', suffix: 'n' },
  { noun: 'Leute', suffix: 'n' },
  { noun: 'Lieder', suffix: 'n' },
  { noun: 'Mächte', suffix: 'n' },
  { noun: 'Männer', suffix: 'n' },
  { noun: 'Münder', suffix: 'n' },
  { noun: 'Mütter', suffix: 'n' },
  { noun: 'Reichtümer', suffix: 'n' },
  { noun: 'Rufe', suffix: 'n' },
  { noun: 'Schicksale', suffix: 'n' },
  { noun: 'Skier', suffix: 'n' },
  { noun: 'Söhne', suffix: 'n' },
  { noun: 'Städte', suffix: 'n' },
  { noun: 'Töchter', suffix: 'n' },
  { noun: 'Väter', suffix: 'n' },
  { noun: 'Wälder', suffix: 'n' },
  { noun: 'Wörter', suffix: 'n' },
  { noun: 'Züge', suffix: 'n' }
]

const adjectives = [
  'groß',
  'gut',
  'klein',
  'schön',
  'einfach',
  'schlecht',
  'kalt',
  'stark',
  'freundlich',
  'wichtig',
  'heiß',
  'alt',
  'neu',
  'spät',
  'lebhaft',
  'breit',
  'kurz',
  'lang',
  'schmal',
  'niedrig',
  'berühmt',
  'still',
  'gleich',
  'jung',
  'früh'
]

//
// GLOBAL VARIABLES
//

// These represent the correct answer, for validation
let articleAnswer, adjSuffixAnswer, nounSuffixAnswer

//
// PURE FUNCTIONS
//

function pickNounType () {
  const randomFour = Math.floor(Math.random() * 4)

  if (randomFour === 3) {
    return 'plural'
  } else if (randomFour === 2) {
    return 'neuter'
  } else if (randomFour === 1) {
    return 'feminine'
  } else {
    return 'masculine'
  }
}

function pickCase () {
  const randomFour = Math.floor(Math.random() * 4)

  if (randomFour === 3) {
    return 'accusative'
  } else if (randomFour === 2) {
    return 'dative'
  } else if (randomFour === 1) {
    return 'genitive'
  } else {
    return 'nominative'
  }
}

function pickArticleType () {
  const randomThree = Math.floor(Math.random() * 3)

  if (randomThree === 2) {
    return 'none'
  } else if (randomThree === 1) {
    return 'indef.'
  } else {
    return 'def.'
  }
}

// Generic function to pick an element from a set
function pickElement (set) {
  const randomIndex = Math.floor(Math.random() * set.length)
  return set[randomIndex]
}

// Function to return a noun, given a noun type
// This is called in the generate function
function pickNoun (nounType) {
  if (nounType === 'plural') {
    return pickElement(plurNouns)
  } else if (nounType === 'neuter') {
    return pickElement(neutNouns)
  } else if (nounType === 'feminine') {
    return pickElement(femNouns)
  } else {
    return pickElement(mascNouns)
  }
}

// Ok, here's the big one
// Given the noun type, case, and article, return the correct answer
function setAnswer (
  nounType,
  chosenNounSuffix,
  chosenNounWeakness,
  desiredCase,
  article
) {
  nounSuffixAnswer = ''
  if (nounType === 'plural') {
    if (desiredCase === 'accusative') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'e'
      } else {
        articleAnswer = 'die'
        adjSuffixAnswer = 'en'
      }
    } else if (desiredCase === 'dative') {
      adjSuffixAnswer = 'en'
      nounSuffixAnswer = chosenNounSuffix
      if (article === 'none') {
        articleAnswer = ''
      } else {
        articleAnswer = 'den'
      }
    } else if (desiredCase === 'genitive') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'er'
      } else {
        articleAnswer = 'der'
        adjSuffixAnswer = 'en'
      }
    } else {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'e'
      } else {
        articleAnswer = 'die'
        adjSuffixAnswer = 'en'
      }
    }
  } else if (nounType === 'neuter') {
    if (desiredCase === 'accusative') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'es'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjSuffixAnswer = 'es'
      } else {
        articleAnswer = 'das'
        adjSuffixAnswer = 'e'
      }
    } else if (desiredCase === 'dative') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'em'
      } else if (article === 'indef.') {
        articleAnswer = 'einem'
        adjSuffixAnswer = 'en'
      } else {
        articleAnswer = 'dem'
        adjSuffixAnswer = 'en'
      }
    } else if (desiredCase === 'genitive') {
      adjSuffixAnswer = 'en'
      nounSuffixAnswer = chosenNounSuffix
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'eines'
      } else {
        articleAnswer = 'des'
      }
    } else {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'es'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjSuffixAnswer = 'es'
      } else {
        articleAnswer = 'das'
        adjSuffixAnswer = 'e'
      }
    }
  } else if (nounType === 'feminine') {
    if (desiredCase === 'accusative') {
      adjSuffixAnswer = 'e'
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'eine'
      } else {
        articleAnswer = 'die'
      }
    } else if (desiredCase === 'dative') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'einer'
        adjSuffixAnswer = 'en'
      } else {
        articleAnswer = 'der'
        adjSuffixAnswer = 'en'
      }
    } else if (desiredCase === 'genitive') {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'einer'
        adjSuffixAnswer = 'en'
      } else {
        articleAnswer = 'der'
        adjSuffixAnswer = 'en'
      }
    } else {
      adjSuffixAnswer = 'e'
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'eine'
      } else {
        articleAnswer = 'die'
      }
    }
  } else {
    if (desiredCase === 'accusative') {
      adjSuffixAnswer = 'en'
      if (chosenNounWeakness === true) {
        nounSuffixAnswer = chosenNounSuffix
      }
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'einen'
      } else {
        articleAnswer = 'den'
      }
    } else if (desiredCase === 'dative') {
      if (chosenNounWeakness === true) {
        nounSuffixAnswer = chosenNounSuffix
      }
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'em'
      } else if (article === 'indef.') {
        articleAnswer = 'einem'
        adjSuffixAnswer = 'en'
      } else {
        articleAnswer = 'dem'
        adjSuffixAnswer = 'en'
      }
    } else if (desiredCase === 'genitive') {
      adjSuffixAnswer = 'en'
      nounSuffixAnswer = chosenNounSuffix
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'eines'
      } else {
        articleAnswer = 'des'
      }
    } else {
      if (article === 'none') {
        articleAnswer = ''
        adjSuffixAnswer = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjSuffixAnswer = 'er'
      } else {
        articleAnswer = 'der'
        adjSuffixAnswer = 'e'
      }
    }
  }
}

//
// DOM FUNCTIONS
//

// Generate a new problem
// eslint-disable-next-line no-unused-vars
function generate () {
  const nounType = pickNounType()
  const desiredCase = pickCase()
  const adjective = pickElement(adjectives)

  // This has become a bit convoluted, now that noun arrays contain objects
  const chosenElement = pickNoun(nounType)
  const chosenNoun = chosenElement.noun
  const chosenNounSuffix = chosenElement.suffix
  const chosenNounWeakness = chosenElement.weak

  // This needs to be mutable; see below
  let articleType = pickArticleType()

  // If we get a plural noun and an indefinite article, reset the article
  // Choose between a definite article and none
  if (nounType === 'plural' && articleType === 'indef.') {
    const randomTwo = Math.floor(Math.random() * 2)

    if (randomTwo === 1) {
      articleType = 'none'
    } else {
      articleType = 'def.'
    }
  }

  // Set the correct answer
  setAnswer(
    nounType,
    chosenNounSuffix,
    chosenNounWeakness,
    desiredCase,
    articleType
  )

  // Reset the result text
  document.getElementById('result').innerText = 'N/A'
  document.getElementById('result').classList.remove('text-success')
  document.getElementById('result').classList.remove('text-danger')

  // Populate noun type field
  document.getElementById('noun-type').value = nounType

  // Populate desired case field
  document.getElementById('desired-case').value = desiredCase

  // Set placeholder for desired article type
  // Also clear field of any prior input
  document.getElementById('desired-article').placeholder = articleType
  document.getElementById('desired-article').value = ''

  // Make article field readonly if desired type is "none"
  if (articleType === 'none') {
    document.getElementById('desired-article').readOnly = true
  } else {
    document.getElementById('desired-article').readOnly = false
  }

  // Populate adjective field
  // Clear suffix field of any prior input
  document.getElementById('chosen-adj').value = adjective
  document.getElementById('adj-suffix').value = ''

  // Populate noun field
  // Clear suffix field of any prior input
  document.getElementById('chosen-noun').value = chosenNoun
  document.getElementById('noun-suffix').value = ''
}

// Handle the checkbox to hide or show noun type
// eslint-disable-next-line no-unused-vars
function handleCheckbox () {
  const checkbox = document.getElementById('noun-type-check')
  const nounTypeField = document.getElementById('noun-type')

  if (checkbox.checked) {
    // This is the default color in Bootstrap
    nounTypeField.style.color = '#495057'
  } else {
    nounTypeField.style.color = 'transparent'
  }
}

// Validate the submitted answer
// eslint-disable-next-line no-unused-vars
function validateAnswer () {
  // Do nothing before a problem has been generated
  if (adjSuffixAnswer) {
    const articleSubmission = document.getElementById('desired-article').value
    const adjSuffixSubmission = document.getElementById('adj-suffix').value
    const nounSuffixSubmission = document.getElementById('noun-suffix').value

    if (
      articleSubmission === articleAnswer &&
      adjSuffixSubmission === adjSuffixAnswer &&
      nounSuffixSubmission === nounSuffixAnswer
    ) {
      document.getElementById('result').innerText = 'Correct'
      document.getElementById('result').classList.remove('text-danger')
      document.getElementById('result').classList.add('text-success')
    } else {
      document.getElementById('result').innerText = 'Incorrect'
      document.getElementById('result').classList.remove('text-success')
      document.getElementById('result').classList.add('text-danger')
    }
  }
}

// Handle answer submission with Enter key
// eslint-disable-next-line no-unused-vars
function submitOnEnter (event) {
  if (event.key === 'Enter') {
    validateAnswer()
    document.activeElement.blur()
    event.preventDefault()
  }
}
