function startGame() {
   let moneyDiv= document.getElementById('money');
   moneyDiv.style.display = 'flex';

    let welcome = document.getElementById('welcome');
    welcome.style.display = 'none';
}
let playerMoney = 0;
function addMoney() {
    let moneyInput = document.getElementById('moneyInput');
    let amount = parseInt(moneyInput.value);
    if ( !isNaN(amount) && amount > 0) {
        playerMoney += amount;
        document.getElementById('currentMoney').innerText = playerMoney;
        moneyInput.value = ''; 
    } else {
        alert("Please enter a valid amount.");
    }
}
function play(){
   let money = document.getElementById('currentMoney').innerText;
   if ( isNaN(money) || money <= 0){
    alert("Please enter a valid amount.");
   }
   else {
    let gameDiv = document.getElementById('game');
    gameDiv.style.display = 'flex';

    let moneyInputDiv= document.getElementById('moneyInput');
   moneyInputDiv.style.display = 'none';

   let playButton= document.getElementById('play');
   playButton.style.display = 'none';

   let addButton = document.getElementById('addMoney');
   addButton.style.display = 'none';

   let resetButton = document.getElementById('reset');
   resetButton.style.display = 'none'

   let yourMoney = document.getElementById('money');
   yourMoney.style.justifyContent = 'flex-start';
   yourMoney.style.height= '10vh';

   }
   
}



function reset(){
    playerMoney = 0;
    document.getElementById('currentMoney').innerText = playerMoney;
}

function choose1() {
    let box1 = document.getElementById('big');
    box1.style.backgroundColor = 'red';
    box1.style.color = 'wheat';
    let box2 = document.getElementById('small')
    box2.style.backgroundColor = 'wheat';
    box2.style.color = 'red';
}
function choose2() {
    let box1 = document.getElementById('small');
    box1.style.backgroundColor = 'red';
    box1.style.color = 'wheat';
    let box2 = document.getElementById('big')
    box2.style.backgroundColor = 'wheat';
    box2.style.color = 'red';
}
function getValue() {
    let choice;
    let choiceBox1 = document.getElementById('big');
    let choiceBox2 = document.getElementById('small');
    let backgroundColor1 = choiceBox1.style.backgroundColor;
    let backgroundColor2 = choiceBox2.style.backgroundColor;
    if (backgroundColor1 == 'red'){
        let value = "big";
        return value;
    }
    if(backgroundColor2 == 'red'){
        let value= "small";
        return value;
    }
}
function bet(){
    let moneyText = document.getElementById('currentMoney').innerText;
    let betInput = document.getElementById('bet');
    let betMoney = parseInt(betInput.value);
    if (getValue()=="big" || getValue()=="small"){
        if ( !isNaN(betMoney) &&  betMoney > 0 ){
            if (betMoney > moneyText){
                alert("Not enough money.");
            }
            else {
                moneyText = moneyText - betMoney;
                document.getElementById('currentMoney').innerText = moneyText;
               
    
    
                let gameDiv = document.getElementById('game');
                gameDiv.style.display = 'none';
    
                let betDiv = document.getElementById('yourBet');
                betDiv.style.display = 'flex';
    
                document.getElementById('currentBet').innerText = betMoney;
    
                let diceDiv = document.getElementById('dice');
                diceDiv.style.display = 'flex';
                
                let openDiv = document.getElementById('openButton');
                openDiv.style.display = 'flex';
            }
            
        }
        else {
                alert("Please enter the amount you want to bet.");
        }
    }
    else {
        alert("Select big or small to bet")
    }
        
}
    
    
   function openAll() {
    document.getElementById('dice1').innerText = dice();
    document.getElementById('dice2').innerText = dice();
    document.getElementById('dice3').innerText = dice();

    document.getElementById('sum').innerText = 
    parseInt(document.getElementById('dice1').innerText)  +
    parseInt(document.getElementById('dice2').innerText)  +
    parseInt(document.getElementById('dice3').innerText) ;

 

    let openDiv = document.getElementById('openButton');
    openDiv.style.display = 'none';

    let noti = document.getElementById('result');
    noti.style.display = 'flex';
    let value = getValue();

    let mess = document.getElementById('noti');
    mess.style.display = 'flex';

    let sum = parseInt(document.getElementById('sum').innerText);
    let betInput = document.getElementById('bet');
    let betMoney = parseInt(betInput.value);

    if( document.getElementById('dice1').innerText ==
        document.getElementById('dice2').innerText &&
        document.getElementById('dice2').innerText ==
        document.getElementById('dice3').innerText){
           
        document.getElementById('mess').innerText = "You Lose " + betMoney;   
    }
    if(WL(sum) == getValue()){
        let moneyText = parseInt(document.getElementById('currentMoney').innerText);
        moneyText = moneyText + betMoney + betMoney;
        document.getElementById('currentMoney').innerText = moneyText;
        document.getElementById('mess').innerText = "You Won $" + betMoney+" !";
    }
    else {
        document.getElementById('mess').innerText = "You Lost $" + betMoney+" !";  
    }
    let nextDiv = document.getElementById('nextButton');
    nextDiv.style.display = 'flex';
   }

   function WL(value){
    if (value>=4 && value<=10){
        return "small"
    }
    if (value <=17){
        return "big"
    }
   }

function dice() {
    let max = 6;
    let min = 1;
    let rand = Math.floor(Math.random() * max) + min ;
    return rand;
}

function next(){
    let diceDiv = document.getElementById('dice');
    diceDiv.style.display = 'none';

    let resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';

    let notiDiv = document.getElementById('noti');
    notiDiv.style.display = 'none';

    let gameDiv = document.getElementById('game');
    gameDiv.style.display = 'flex';

    let nextDiv = document.getElementById('nextButton');
    nextDiv.style.display = 'none';

    document.getElementById('dice1').innerText = "";
    document.getElementById('dice2').innerText = "";
    document.getElementById('dice3').innerText = "";

}

