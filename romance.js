// I decided to use two different whole songs to make sure my code was running correctly. Young Man in America by Anais Mitchell and Jungle by Drake to stay true to the prompt.

let youngMan = "My mother gave a mighty shout Opened her legs and let me out Hungry as a prairie dog Young man in America Young man in America Hungry, hungry, running every which way Young man in Americay I come out like a cannonball Come of age of alcohol Raven in a field of rye With a black and roving eye Black and roving eye Ravenous, ravenous What you got, it's not enough Young man in America Oh, shelter, mother shelter, Mother shelter us Oooh My father was a lord of land my daddy was a repo man Put me out onto the street Didn't give a damn for me Did not give a damn Daddy, daddy, gonna wish you never had me I'm a young man I'm growing right before your eyes I might grow to such a size Blow in like a hurricane Everyone will know my name Everyone'll know my name Blowing in, blowing up Shadow on the mountaintop Young man in America Oh, shepherd, father shepherd, Father shepherd us Oooh In my feathers and furs Clothes of many colors Many men will envy me When I'm in my finery Me in my finery Envy me, envy me Spending all my bright money Young man in Americay Maybe I climb the stairs With a girl of golden hair Hold her like a sword and shield Up against this lonely world Up against the world It's a lonely, lonely world For a yellow-headed girl And a young man Like the wind I make my moan Howl in the canyon There's a hollow in my bones Make me cry and carry on Make the foam fly from my tongue Make me want what I want Another wayward son Waiting on oblivion Waiting on the kingdom come to meet me in my sin Waiting to be born again Mother kiss me cheek and chin Mmm, a little medicine Mmm, and then I shed my skin Mmm, and lemme climb back in the bed you made me in"
let jungle = "Rock me real slowly Put a bib on me I'm just like a baby, drooling over you The things you do These days, I'm letting God handle all things above me The things I can't change are the reasons you love me Listen you can hear them calling my name I'm all over the place, I can't sit in one place I'm not ashamed at all Still findin' myself, let alone a soulmate, I'm just sayin' Feel like we one and the same, our relationship changed That or it never existed Whenever they say somethin' bout us, you listen But - what they talkin' about on your timeline That's cuttin' all into my time with you F- what they talkin' about on your timeline That's cuttin' all into my time with you Rock me real slowly Put a bib on me I'm just like a baby, drooling over you The things you do She said you're my everything I love you through everything I done did everything to her She forgave me for everything, this a forever thing Hate that I treated like it's a whatever thing Trust me girl, this - is everything to me She from the Jungle, she from the Jungle I take somebody else's car, drive it undercover This - is everything to me, this - is everything Don't know where we stand, I used to hit you 'bout everything Are we still good? Are we still good? Are we still good? Are we still good? If I need to talk, are you around? Are you down for the cause? Are you down? Are you down? Are you down? Are you down for the cause? Are you down? Are you down? Are you down? Are you down for the cause? You still down? You still down? You still down? Rock me real slowly (yeah) Put a bib on me I'm just like a baby, drooling over you The things you do These days these new girls got me nervous They go to school and do bottle service They can't decide, they keep switching majors Being indecisive makes me anxious Call your number and it's out of service Who can I call for your information? What am I supposed to do after we done doing everything we do Who is your replacement? Are we still good? Are we still good? Are we still good? Are we still good?"
let words = ''

let wordArray = parseText(words)

function parseText(text) {
    let wordArray = []
    let cleanText = text.replace(/[.,\/#!$''%\^&\*;?:{}=\-_`~()]/g,"");
    toArray = cleanText.toLowerCase()
    wordArray = toArray.split(' ');
    return wordArray;
}


let wordPairs = generateWordPairs(wordArray)

function generateWordPairs (arr) {
    let markovChain = {}


    for (i = 0; i < arr.length; i++) {
        if (arr[i + 1] === undefined) {
            return markovChain;
          }
          
          if (arr[i] in markovChain) {
            let duplicate = arr[i+1];
            let index = markovChain[arr[i]];
            index.push(duplicate);
           
          }
          
          else {
          markovChain[arr[i]] = [arr[i + 1]];
          }
        }
      }



function writeLine(markovChain, numWords) {
    let keys = Object.keys(markovChain)
    let startingWord = keys[(Math.floor(Math.random() * keys.length))]
    let line = startingWord
    let currentWord = startingWord

    for (let i = 0; i < numWords - 1; i++) {
        options = markovChain[currentWord]
        
        if (options) {
        nextWord = options[(Math.floor(Math.random() * options.length))]
        line += " " + nextWord
        currentWord = nextWord
        }
        else {
            currentWord = startingWord
        }
    }
    return line
}



function generatePoem(wordCorpus, numLines) {
    let poem = ''
    pairs = parseText(wordCorpus)
    lines = generateWordPairs(pairs)

    for (let i = 0; i < numLines; i++) {
        let wordCount = Math.floor(Math.random() * 10)

       poem += writeLine(lines, wordCount) + '\n'
   
    }
    
    return poem
}

console.log(generatePoem(jungle, 5))

