function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var uppercase = "HELLO!"
function logShout(string) {
    if (uppercase.toUpperCase === uppercase) {
      console.log("HELLO!")
    }
}

var lowercase = "hello!"
function logWhisper(string) {
  if (lowercase.toLowerCase === lowercase) {
  console.log('hello!')
    }
  }

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}