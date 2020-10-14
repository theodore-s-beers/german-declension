//
// WORD LISTS
//

const mascNouns = [
  'Teppich',
  'Sittich',
  'Abgleich',
  'Bereich',
  'Teich',
  'Ventilator',
  'Motor',
  'Marmor',
  'König',
  'Honig',
  'Essig',
  'Schmetterling',
  'Frühling',
  'Lehrling',
  'Zwilling',
  'Optimismus',
  'Magnetismus',
  'Expressionismus',
  'Feudalismus',
  'Kapitalismus',
  'Bär',
  'Veterinär',
  'Aktionär',
  'Sekretär',
  'Diamant',
  'Fabrikant',
  'Elefant',
  'Lieferant',
  'Schlüssel',
  'Löffel',
  'Mantel',
  'Montag',
  'Mittwoch',
  'Oktober',
  'Dezember',
  'Sommer',
  'Herbst',
  'Winter',
  'Frühling',
  'Onkel',
  'Vater',
  'Junge',
  'Prinz',
  'Held',
  'Sänger',
  'Koch',
  'Lehrer',
  'Norden',
  'Süden',
  'Westen',
  'Osten',
  'Regen',
  'Schnee',
  'Wind',
  'Blitz'
]

const femNouns = [
  'Polizei',
  'Abtei',
  'Konditorei',
  'Leckerei',
  'Datei',
  'Zeitung',
  'Dichtung',
  'Empfehlung',
  'Erfahrung',
  'Lehrerin',
  'Darstellerin',
  'Eignerin',
  'Australierin',
  'Chefin',
  'Freiheit',
  'Neuheit',
  'Sicherheit',
  'Trägheit',
  'Gefährlichkeit',
  'Höflichkeit',
  'Langsamkeit',
  'Häufigkeit',
  'Produktion',
  'Funktion',
  'Kanalisation',
  'Nation',
  'Geografie',
  'Garantie',
  'Fantasie',
  'Galerie',
  'Astronomie',
  'Freundschaft',
  'Gemeinschaft',
  'Wirtschaft',
  'Wissenschaft',
  'Kultur',
  'Natur',
  'Diktatur',
  'Agentur',
  'Marmelade',
  'Limonade',
  'Schokolade',
  'Schublade',
  'Frau',
  'Mutter',
  'Schwester',
  'Tanne',
  'Eiche',
  'Linde',
  'Rose',
  'Tulpe',
  'Orchidee',
  'Birne',
  'Banane',
  'Pflaume',
  'Zahl'
]

const neutNouns = [
  'Mädchen',
  'Pfännchen',
  'Maskottchen',
  'Märchen',
  'Päckchen',
  'Häuslein',
  'Vöglein',
  'Bächlein',
  'Büchlein',
  'Bett',
  'Ballett',
  'Buffet',
  'Omelett',
  'Brett',
  'Medikament',
  'Testament',
  'Element',
  'Instrument',
  'Fragment',
  'Datum',
  'Wachstum',
  'Ultimatum',
  'Heiligtum',
  'Votum',
  'Niveau',
  'Plateau',
  'Kind',
  'Lamm',
  'Grün',
  'Blau',
  'Deutsch',
  'Französisch',
  'Spanisch',
  'Baby',
  'Handy',
  'Image',
  'Gold',
  'Kupfer',
  'Gebirge',
  'Gemüse'
]

const plurNouns = [
  'Ängste',
  'Äpfel',
  'Ärzte',
  'Bäume',
  'Besuche',
  'Bilder',
  'Bücher',
  'Eier',
  'Ergebnisse',
  'Erlaubnisse',
  'Flöße',
  'Flüchtlinge',
  'Friseure',
  'Früchte',
  'Gedichte',
  'Geister',
  'Geschwister',
  'Häuser',
  'Jahre',
  'Kenntnisse',
  'Kinder',
  'Klöster',
  'Länder',
  'Leiber',
  'Leute',
  'Lieder',
  'Mächte',
  'Männer',
  'Münder',
  'Mütter',
  'Reichtümer',
  'Rufe',
  'Schicksale',
  'Skier',
  'Söhne',
  'Städte',
  'Töchter',
  'Väter',
  'Wälder',
  'Wörter',
  'Züge'
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
  'hoch',
  'berühmt',
  'still',
  'wenig',
  'gleich',
  'jung',
  'früh'
]

//
// GLOBAL VARIABLES
//

// These represent the correct answer, for validation
let articleAnswer, adjectiveSuffix, nounSuffix

//
// PURE FUNCTIONS
//

function pickNounType () {
  const randomFour = Math.ceil(Math.random() * 4)

  if (randomFour === 4) {
    return 'plural'
  } else if (randomFour === 3) {
    return 'neuter'
  } else if (randomFour === 2) {
    return 'feminine'
  } else {
    return 'masculine'
  }
}

function pickCase () {
  const randomFour = Math.ceil(Math.random() * 4)

  if (randomFour === 4) {
    return 'accusative'
  } else if (randomFour === 3) {
    return 'dative'
  } else if (randomFour === 2) {
    return 'genitive'
  } else {
    return 'nominative'
  }
}

function pickArticle () {
  const randomThree = Math.ceil(Math.random() * 3)

  if (randomThree === 3) {
    return 'none'
  } else if (randomThree === 2) {
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
function setAnswer (nounType, desiredCase, article) {
  if (nounType === 'plural') {
    if (desiredCase === 'accusative') {
      nounSuffix = ''
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'e'
      } else {
        articleAnswer = 'die'
        adjectiveSuffix = 'en'
      }
    } else if (desiredCase === 'dative') {
      adjectiveSuffix = 'en'
      nounSuffix = 'n'
      if (article === 'none') {
        articleAnswer = ''
      } else {
        articleAnswer = 'den'
      }
    } else if (desiredCase === 'genitive') {
      nounSuffix = ''
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'er'
      } else {
        articleAnswer = 'der'
        adjectiveSuffix = 'en'
      }
    } else {
      nounSuffix = ''
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'e'
      } else {
        articleAnswer = 'die'
        adjectiveSuffix = 'en'
      }
    }
  } else if (nounType === 'neuter') {
    nounSuffix = ''
    if (desiredCase === 'accusative') {
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'es'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjectiveSuffix = 'es'
      } else {
        articleAnswer = 'das'
        adjectiveSuffix = 'e'
      }
    } else if (desiredCase === 'dative') {
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'em'
      } else if (article === 'indef.') {
        articleAnswer = 'einem'
        adjectiveSuffix = 'en'
      } else {
        articleAnswer = 'dem'
        adjectiveSuffix = 'en'
      }
    } else if (desiredCase === 'genitive') {
      adjectiveSuffix = 'en'
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
        adjectiveSuffix = 'es'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjectiveSuffix = 'es'
      } else {
        articleAnswer = 'das'
        adjectiveSuffix = 'e'
      }
    }
  } else if (nounType === 'feminine') {
    nounSuffix = ''
    if (desiredCase === 'accusative') {
      adjectiveSuffix = 'e'
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
        adjectiveSuffix = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'einer'
        adjectiveSuffix = 'en'
      } else {
        articleAnswer = 'der'
        adjectiveSuffix = 'en'
      }
    } else if (desiredCase === 'genitive') {
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'einer'
        adjectiveSuffix = 'en'
      } else {
        articleAnswer = 'der'
        adjectiveSuffix = 'en'
      }
    } else {
      adjectiveSuffix = 'e'
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'eine'
      } else {
        articleAnswer = 'die'
      }
    }
  } else {
    nounSuffix = ''
    if (desiredCase === 'accusative') {
      adjectiveSuffix = 'en'
      if (article === 'none') {
        articleAnswer = ''
      } else if (article === 'indef.') {
        articleAnswer = 'einen'
      } else {
        articleAnswer = 'den'
      }
    } else if (desiredCase === 'dative') {
      if (article === 'none') {
        articleAnswer = ''
        adjectiveSuffix = 'em'
      } else if (article === 'indef.') {
        articleAnswer = 'einem'
        adjectiveSuffix = 'en'
      } else {
        articleAnswer = 'dem'
        adjectiveSuffix = 'en'
      }
    } else if (desiredCase === 'genitive') {
      adjectiveSuffix = 'en'
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
        adjectiveSuffix = 'er'
      } else if (article === 'indef.') {
        articleAnswer = 'ein'
        adjectiveSuffix = 'er'
      } else {
        articleAnswer = 'der'
        adjectiveSuffix = 'e'
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
  const noun = pickNoun(nounType)

  // This needs to be mutable; see below
  let article = pickArticle()

  // If we get a plural noun and an indefinite article, reset the article
  // Choose between a definite article and none
  if (nounType === 'plural' && article === 'indef.') {
    const randomTwo = Math.ceil(Math.random() * 2)

    if (randomTwo === 2) {
      article = 'none'
    } else {
      article = 'def.'
    }
  }

  // Set the correct answer
  setAnswer(nounType, desiredCase, article)

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
  document.getElementById('desired-article').placeholder = article
  document.getElementById('desired-article').value = ''

  // Make article field readonly if desired type is "none"
  if (article === 'none') {
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
  document.getElementById('chosen-noun').value = noun
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
  // Do nothing unless a problem (and answer) has been generated
  if (adjectiveSuffix) {
    const articleSubmission = document.getElementById('desired-article').value
    const adjSuffixSubmission = document.getElementById('adj-suffix').value
    const nounSuffixSubmission = document.getElementById('noun-suffix').value

    if (
      articleSubmission === articleAnswer &&
      adjSuffixSubmission === adjectiveSuffix &&
      nounSuffixSubmission === nounSuffix
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
