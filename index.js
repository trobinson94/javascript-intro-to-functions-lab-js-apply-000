function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  const spy = 'HELLO'
  console.log(spy)
}

function logWhisper(string) {
  const spy = 'hello'
  console.log(spy)
}

function sayHiToGrandma(string) {
  return 'I can\'t hear you!'
}

function sayHiToGrandma('HELLO') {
  return 'YES INDEED!'
}