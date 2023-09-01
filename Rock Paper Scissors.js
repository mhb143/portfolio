function getUserChoice(){
  const choices=['rock','paper','scissors']
  const index=Math.floor(Math.random()*choices.length)
  let choice=choices[index]
  return choice
}
const userChoice=getUserChoice()
const compChoice=getUserChoice()
console.log('You picked: '+userChoice)
console.log('Computer picked: '+compChoice)

if (userChoice==compChoice){
  console.log('Tie!')
}else if (userChoice=='rock'){
  if (compChoice=='paper'){
    console.log('Computer Wins!')}
  else if (compChoice=='scissors'){
    console.log('You Win!')}
  }else if (userChoice=='paper'){
    if (compChoice=='scissors'){
      console.log('Computer Wins!')}
    else if (compChoice=='rock'){
      console.log('You Win!')}
  }else if (userChoice=='scissors'){
    if (compChoice=='rock'){
      console.log('Computer Wins!')}
    else if (compChoice=='paper'){
      console.log('You Win!')}
}
