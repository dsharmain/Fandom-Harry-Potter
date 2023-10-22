
function play(question,answer){
    var ask = readlineSync.question(chalk.bgBlueBright(question));
    if (ask.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.bgGreenBright('You are right'));
      score++
    }else{
      console.log(chalk.bgRed('You are wrong'));
    }
  }
  var chalk = require('chalk');
  
  //console.log(chalk.green('hello world'));
  
  var highScorer = {name:'Dipin',score:0};
  var readlineSync = require('readline-sync');
  
  
  var newPrompt = readlineSync.keyInYN(chalk.green("Do You want to play a game?  [y/n]:"),{guide : false});
  // console.log(newPrompt);
  if (!(newPrompt)){
    console.log(chalk.bgGreen("Ok! Have Fun whatever you do!!"));
    process.exit();
  }else{
      newPrompt = readlineSync.keyInYN(chalk.magenta("You will need to provide answers to the following quiz. \nAre you Ready?  [y/n]:"),{guide : false});
    // console.log(newPrompt);
  }
  if (!(newPrompt)){
    console.log(chalk.bgGreen("Ok! Have Fun whatever you do!!"));
    process.exit();
  }
  
  var playerName = readlineSync.question(chalk.bgYellow('Enter Your Name '));
  var score = 0;
  var questions = [{
    question: 'What position does Harry play on the Gryffindor Quidditch team? ',
    answer: 'Seeker'
  },{
     question: 'What is the name of the pub at the entrance to Diagon Alley? ',
     answer: 'The Leaky Cauldron'
   },{
    question: 'What kind of pet does Harry own? ',
    answer: 'Owl'
   },{
    question: 'Who is the Headmaster of Hogwarts when Harry arrives? ',
    answer: 'Dumbledore'
                   },
                   
                     {
                       question: 'What school-aged peer is Harry\'s nemesis throughout his time at Hogwarts? ',
                       answer: 'Draco Malfoy'
                                      
                   },{
                       question: 'What is Professor Minerva McGonagall\'s animagus? ',
                       answer: 'cat'
  
                   },]
  for (var i = 0; i < questions.length; i++){
    play(questions[i].question,questions[i].answer);
  }
  console.log(chalk.bgGreenBright('You scored : '+score));
  if (score > highScorer.score){
    console.log(chalk.hex('#78D278')('You are the new Highest scorer. Congrats!!'));
    console.log(chalk.hex('#FFC0CB')('Send me a screenshot of your score.'));
  }
  var feedback = [
    chalk.bgYellowBright('It was Ok'),
    chalk.bgYellowBright('It was Interesting'),
    chalk.bgYellowBright('It was Amazing'),
    chalk.bgYellowBright('It was Awesome'),
    chalk.bgYellowBright('It was out of this World')];
  var userFeedback = readlineSync.keyInSelect(feedback,chalk.bgYellowBright('Out of rating of 5 how would you rate this quiz? [1...5]:'), {cancel : false , guide : false});
  // console.log(userFeedback);