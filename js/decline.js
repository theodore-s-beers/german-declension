//
// WORD LISTS
//

const mascNouns = [
  { noun: 'Abgleich', suffix: 's', weak: false },
  { noun: 'Aktionär', suffix: 's', weak: false },
  { noun: 'Bär', suffix: 'en', weak: true },
  { noun: 'Bereich', suffix: 'flex', weak: false },
  { noun: 'Blitz', suffix: 'es', weak: false },
  { noun: 'Bodden', suffix: 's', weak: false },
  { noun: 'Buchstabe', suffix: 'n', weak: true },
  { noun: 'Bug', suffix: 's', weak: false },
  { noun: 'Dezember', suffix: 's', weak: false },
  { noun: 'Diamant', suffix: 'en', weak: true },
  { noun: 'Elefant', suffix: 'en', weak: true },
  { noun: 'Essig', suffix: 's', weak: false },
  { noun: 'Expressionismus', suffix: '', weak: false },
  { noun: 'Fabrikant', suffix: 'en', weak: true },
  { noun: 'Feudalismus', suffix: '', weak: false },
  { noun: 'Flug', suffix: 'es', weak: false },
  { noun: 'Frack', suffix: 's', weak: false },
  { noun: 'Frühling', suffix: 's', weak: false },
  { noun: 'Held', suffix: 'en', weak: true },
  { noun: 'Herbst', suffix: 'es', weak: false },
  { noun: 'Honig', suffix: 's', weak: false },
  { noun: 'Junge', suffix: 'n', weak: true },
  { noun: 'Kapitalismus', suffix: '', weak: false },
  { noun: 'Koch', suffix: 's', weak: false },
  { noun: 'König', suffix: 's', weak: false },
  { noun: 'Krug', suffix: 's', weak: false },
  { noun: 'Lehrer', suffix: 's', weak: false },
  { noun: 'Lehrling', suffix: 's', weak: false },
  { noun: 'Lieferant', suffix: 'en', weak: true },
  { noun: 'Löffel', suffix: 's', weak: false },
  { noun: 'Magnetismus', suffix: '', weak: false },
  { noun: 'Mantel', suffix: 's', weak: false },
  { noun: 'Marmor', suffix: 's', weak: false },
  { noun: 'Mittwoch', suffix: 's', weak: false },
  { noun: 'Montag', suffix: 's', weak: false },
  { noun: 'Motor', suffix: 's', weak: false },
  { noun: 'Norden', suffix: 's', weak: false },
  { noun: 'Oktober', suffix: 's', weak: false },
  { noun: 'Onkel', suffix: 's', weak: false },
  { noun: 'Optimismus', suffix: '', weak: false },
  { noun: 'Osten', suffix: 's', weak: false },
  { noun: 'Pflug', suffix: 'es', weak: false },
  { noun: 'Prinz', suffix: 'en', weak: true },
  { noun: 'Redner', suffix: 's', weak: false },
  { noun: 'Regen', suffix: 's', weak: false },
  { noun: 'Sänger', suffix: 's', weak: false },
  { noun: 'Schlüssel', suffix: 's', weak: false },
  { noun: 'Schmetterling', suffix: 's', weak: false },
  { noun: 'Schnee', suffix: 's', weak: false },
  { noun: 'See', suffix: 's', weak: false },
  { noun: 'Sekretär', suffix: 's', weak: false },
  { noun: 'Sittich', suffix: 's', weak: false },
  { noun: 'Smog', suffix: 's', weak: false },
  { noun: 'Sog', suffix: 's', weak: false },
  { noun: 'Sommer', suffix: 's', weak: false },
  { noun: 'Staub', suffix: 'es', weak: false },
  { noun: 'Stoff', suffix: 'es', weak: false },
  { noun: 'Süden', suffix: 's', weak: false },
  { noun: 'Teich', suffix: 'es', weak: false },
  { noun: 'Teppich', suffix: 's', weak: false },
  { noun: 'Vater', suffix: 's', weak: false },
  { noun: 'Ventilator', suffix: 's', weak: false },
  { noun: 'Verkehr', suffix: 's', weak: false },
  { noun: 'Veterinär', suffix: 's', weak: false },
  { noun: 'Wald', suffix: 'es', weak: false },
  { noun: 'Westen', suffix: 's', weak: false },
  { noun: 'Wind', suffix: 'es', weak: false },
  { noun: 'Winter', suffix: 's', weak: false },
  { noun: 'Zug', suffix: 'es', weak: false },
  { noun: 'Zwilling', suffix: 's', weak: false }
]

const femNouns = [
  { noun: 'Abtei' },
  { noun: 'Agentur' },
  { noun: 'Astronomie' },
  { noun: 'Australierin' },
  { noun: 'Banane' },
  { noun: 'Birne' },
  { noun: 'Chefin' },
  { noun: 'Darstellerin' },
  { noun: 'Datei' },
  { noun: 'Dichtung' },
  { noun: 'Diktatur' },
  { noun: 'Droge' },
  { noun: 'Eiche' },
  { noun: 'Eignerin' },
  { noun: 'Empfehlung' },
  { noun: 'Erfahrung' },
  { noun: 'Fantasie' },
  { noun: 'Fläche' },
  { noun: 'Frau' },
  { noun: 'Freiheit' },
  { noun: 'Freundschaft' },
  { noun: 'Funktion' },
  { noun: 'Galerie' },
  { noun: 'Garantie' },
  { noun: 'Gefährlichkeit' },
  { noun: 'Gemeinschaft' },
  { noun: 'Geografie' },
  { noun: 'Häufigkeit' },
  { noun: 'Höflichkeit' },
  { noun: 'Kanalisation' },
  { noun: 'Konditorei' },
  { noun: 'Kultur' },
  { noun: 'Langsamkeit' },
  { noun: 'Leckerei' },
  { noun: 'Lehrerin' },
  { noun: 'Limonade' },
  { noun: 'Linde' },
  { noun: 'Marmelade' },
  { noun: 'Melancholie' },
  { noun: 'Methode' },
  { noun: 'Musik' },
  { noun: 'Mutter' },
  { noun: 'Nation' },
  { noun: 'Natur' },
  { noun: 'Neuheit' },
  { noun: 'Orchidee' },
  { noun: 'Pflaume' },
  { noun: 'Polizei' },
  { noun: 'Produktion' },
  { noun: 'Prognose' },
  { noun: 'Rose' },
  { noun: 'Schokolade' },
  { noun: 'Schublade' },
  { noun: 'Schwester' },
  { noun: 'Sicherheit' },
  { noun: 'Tanne' },
  { noun: 'Tänzerin' },
  { noun: 'Trägheit' },
  { noun: 'Tulpe' },
  { noun: 'Veranstaltung' },
  { noun: 'Werkstatt' },
  { noun: 'Wirtschaft' },
  { noun: 'Wissenschaft' },
  { noun: 'Zahl' },
  { noun: 'Zeitung' }
]

const neutNouns = [
  { noun: 'Baby', suffix: 's' },
  { noun: 'Bächlein', suffix: 's' },
  { noun: 'Ballett', suffix: 's' },
  { noun: 'Bett', suffix: 'flex' },
  { noun: 'Blau', suffix: 's' },
  { noun: 'Blech', suffix: 's' },
  { noun: 'Brett', suffix: 'flex' },
  { noun: 'Büchlein', suffix: 's' },
  { noun: 'Buffet', suffix: 's' },
  { noun: 'Datum', suffix: 's' },
  { noun: 'Deutsch', suffix: '' },
  { noun: 'Element', suffix: 's' },
  { noun: 'Entree', suffix: 's' },
  { noun: 'Fell', suffix: 's' },
  { noun: 'Fragment', suffix: 's' },
  { noun: 'Französisch', suffix: '' },
  { noun: 'Gebirge', suffix: 's' },
  { noun: 'Gemüse', suffix: 's' },
  { noun: 'Geschirr', suffix: 's' },
  { noun: 'Gold', suffix: 'es' },
  { noun: 'Grün', suffix: 's' },
  { noun: 'Handy', suffix: 's' },
  { noun: 'Häuslein', suffix: 's' },
  { noun: 'Heiligtum', suffix: 's' },
  { noun: 'Image', suffix: 's' },
  { noun: 'Instrument', suffix: 's' },
  { noun: 'Internet', suffix: 's' },
  { noun: 'Joch', suffix: 's' },
  { noun: 'Kind', suffix: 'es' },
  { noun: 'Kupfer', suffix: 's' },
  { noun: 'Lamm', suffix: 'es' },
  { noun: 'Lid', suffix: 'es' },
  { noun: 'Lied', suffix: 'es' },
  { noun: 'Loch', suffix: 's' },
  { noun: 'Mädchen', suffix: 's' },
  { noun: 'Märchen', suffix: 's' },
  { noun: 'Maskottchen', suffix: 's' },
  { noun: 'Medikament', suffix: 's' },
  { noun: 'Niveau', suffix: 's' },
  { noun: 'Okular', suffix: 's' },
  { noun: 'Omelett', suffix: 's' },
  { noun: 'Päckchen', suffix: 's' },
  { noun: 'Pfännchen', suffix: 's' },
  { noun: 'Plateau', suffix: 's' },
  { noun: 'Portal', suffix: 's' },
  { noun: 'Ried', suffix: 's' },
  { noun: 'Sieb', suffix: 'es' },
  { noun: 'Spanisch', suffix: '' },
  { noun: 'Stäubchen', suffix: 's' },
  { noun: 'Testament', suffix: 's' },
  { noun: 'Ultimatum', suffix: 's' },
  { noun: 'Vöglein', suffix: 's' },
  { noun: 'Votum', suffix: 's' },
  { noun: 'Wachstum', suffix: 's' },
  { noun: 'Wort', suffix: 'es' },
  { noun: 'Wrack', suffix: 's' }
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
  { noun: 'Felle', suffix: 'n' },
  { noun: 'Flöße', suffix: 'n' },
  { noun: 'Flüchtlinge', suffix: 'n' },
  { noun: 'Friseure', suffix: 'n' },
  { noun: 'Früchte', suffix: 'n' },
  { noun: 'Gebiete', suffix: 'n' },
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
  { noun: 'Pflanzen', suffix: '' },
  { noun: 'Reichtümer', suffix: 'n' },
  { noun: 'Rufe', suffix: 'n' },
  { noun: 'Schicksale', suffix: 'n' },
  { noun: 'Seen', suffix: '' },
  { noun: 'Skier', suffix: 'n' },
  { noun: 'Söhne', suffix: 'n' },
  { noun: 'Spätzle', suffix: '' },
  { noun: 'Städte', suffix: 'n' },
  { noun: 'Stoffe', suffix: 'n' },
  { noun: 'Töchter', suffix: 'n' },
  { noun: 'Väter', suffix: 'n' },
  { noun: 'Wälder', suffix: 'n' },
  { noun: 'Werkstätten', suffix: '' },
  { noun: 'Wörter', suffix: 'n' },
  { noun: 'Zähne', suffix: 'n' },
  { noun: 'Züge', suffix: 'n' }
]

const adjectives = [
  'alt',
  'berühmt',
  'breit',
  'einfach',
  'freundlich',
  'früh',
  'groß',
  'gut',
  'heiß',
  'jung',
  'kalt',
  'klein',
  'kurz',
  'lang',
  'lebhaft',
  'neu',
  'niedrig',
  'schlecht',
  'schmal',
  'schön',
  'spät',
  'stark',
  'still',
  'wichtig'
]

//
// GLOBAL VARIABLES
//

// These represent the correct answer, for validation
let articleAnswer = ''
let adjSuffixAnswer = ''
let nounSuffixAnswer = ''

// Track how many times each noun type has been selected
let mascTally = 0
let femTally = 0
let neutTally = 0
let plurTally = 0

//
// PURE FUNCTIONS
//

function balance () {
  const tallyArray = [mascTally, femTally, neutTally, plurTally]

  const min = Math.min(...tallyArray)
  const max = Math.max(...tallyArray)

  const minIndex = tallyArray.indexOf(min)

  let minName = ''

  if (minIndex === 3) {
    minName = 'plural'
  } else if (minIndex === 2) {
    minName = 'neuter'
  } else if (minIndex === 1) {
    minName = 'feminine'
  } else {
    minName = 'masculine'
  }

  if (min === 0 && max > 2) {
    return minName
  } else if (min === 0) {
    // no-op
  } else if (max / min > 2) {
    return minName
  } else if (max - min > 10) {
    return minName
  } else {
    // no-op
  }
}

function pickNounType () {
  const balanceCheck = balance()

  if (typeof balanceCheck === 'undefined') {
    // no-op
  } else if (balanceCheck === 'plural') {
    // console.log('Bumped plural')
    plurTally += 1
    return 'plural'
  } else if (balanceCheck === 'neuter') {
    // console.log('Bumped neuter')
    neutTally += 1
    return 'neuter'
  } else if (balanceCheck === 'feminine') {
    // console.log('Bumped feminine')
    femTally += 1
    return 'feminine'
  } else if (balanceCheck === 'masculine') {
    // console.log('Bumped masculine')
    mascTally += 1
    return 'masculine'
  } else {
    console.log('Something went wrong')
  }

  const randomFour = Math.floor(Math.random() * 4)

  if (randomFour === 3) {
    plurTally += 1
    // console.log('Plural:', plurTally)
    return 'plural'
  } else if (randomFour === 2) {
    neutTally += 1
    // console.log('Neuter:', neutTally)
    return 'neuter'
  } else if (randomFour === 1) {
    femTally += 1
    // console.log('Feminine:', femTally)
    return 'feminine'
  } else {
    mascTally += 1
    // console.log('Masculine:', mascTally)
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
  // Make sure noun suffix answer is empty by default
  nounSuffixAnswer = ''

  // If plural
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
      // Plural dative noun suffix
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
    } // Else if neuter
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
      // Neuter genitive noun suffix
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
    } // Else if feminine
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
    } // Else, i.e. masculine
  } else {
    if (desiredCase === 'accusative') {
      adjSuffixAnswer = 'en'
      if (chosenNounWeakness === true) {
        // Accusative suffix for weak masculine noun
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
        // Dative suffix for weak masculine noun
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
      // Masculine genitive noun suffix
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
  const resultField = document.getElementById('result')
  resultField.innerText = 'N/A'
  resultField.classList.remove('text-success', 'text-danger')

  // Populate noun type field
  document.getElementById('noun-type').value = nounType

  // Populate desired case field
  document.getElementById('desired-case').value = desiredCase

  // Set placeholder for desired article type
  // Also clear field of any prior input
  const articleField = document.getElementById('desired-article')
  articleField.placeholder = articleType
  articleField.value = ''

  // Make article field readonly if desired type is "none"
  if (articleType === 'none') {
    articleField.readOnly = true
  } else {
    articleField.readOnly = false
  }

  // Populate adjective field
  // Clear suffix field of any prior input
  document.getElementById('chosen-adj').value = adjective
  document.getElementById('adj-suffix').value = ''

  // Populate noun field
  // Clear suffix field of any prior input
  document.getElementById('chosen-noun').value = chosenNoun
  document.getElementById('noun-suffix').value = ''

  // Apply focus to the first relevant input element
  if (articleField.readOnly) {
    document.getElementById('adj-suffix').focus()
  } else {
    articleField.focus()
  }
}

// Handle the checkbox to hide or show noun type
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
function validateAnswer () {
  // Do nothing before a problem has been generated
  if (adjSuffixAnswer) {
    const articleSubmission = document.getElementById('desired-article').value
    const adjSuffixSubmission = document.getElementById('adj-suffix').value

    // This needs to be mutable for a flexible genitive suffix
    let nounSuffixSubmission = document.getElementById('noun-suffix').value

    const resultField = document.getElementById('result')

    // If we ended up with a flexible genitive suffix answer
    if (nounSuffixAnswer === 'flex') {
      // And if the submission is 's' or 'es'
      if (nounSuffixSubmission === 's' || nounSuffixSubmission === 'es') {
        // Then set the submission to be correct
        nounSuffixSubmission = nounSuffixAnswer
      }
    }

    if (
      articleSubmission === articleAnswer &&
      adjSuffixSubmission === adjSuffixAnswer &&
      nounSuffixSubmission === nounSuffixAnswer
    ) {
      resultField.innerText = 'Correct'
      resultField.classList.remove('text-danger')
      resultField.classList.add('text-success')
      // If the answer was correct, apply focus to the "New" button
      document.getElementById('generate').focus()
    } else {
      resultField.innerText = 'Incorrect'
      resultField.classList.remove('text-success')
      resultField.classList.add('text-danger')
    }
  }
}

// Handle answer submission with Enter key
function submitOnEnter (event) {
  if (event.key === 'Enter') {
    validateAnswer()
    event.preventDefault()
  }
}

// Other event handlers
document.getElementById('generate').addEventListener('click', generate)
document
  .getElementById('noun-type-check')
  .addEventListener('click', handleCheckbox)
document
  .getElementById('submit-button')
  .addEventListener('click', validateAnswer)
document
  .getElementById('answer-row')
  .addEventListener('keydown', submitOnEnter)
