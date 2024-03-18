let question = prompt('Что вы хотите сделать?', `${'+'}, ${'-'}, ${'*'} ${'или'} ${'/'} ${'?'}`);
let num1 = +prompt('Какое твое первое число:');
let num2  = +prompt('Какое твое второе число:');
let result;
switch (question) {
    case '+':
        alert('Ваше действие выбрано,идем дальше!');
        break;
    case '-':
        alert('Ваше действие выбрано,идем дальше!');
        break;
    case '*':
        alert('Ваше действие выбрано,идем дальше!');
        break;
    case '/':
        alert('Ваше действие выбрано,идем дальше!');
        break;
default :
    alert('Введи корректный символ');

}

switch(question) {
    case '+': 
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;

    case '-':
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;
    
    case '*':
    result = num1 * num2;
    alert(`${num1} * ${num2} = ${result}`);
    break;

    case '/':
    result = num1 / num2;
    alert(`${num1} / ${num2} = ${result}`);
    break;
}


//alert(${numOne} + ${numTwo} = ${numOne + numTwo}
//    ${numOne} - ${numTwo} = ${numOne - numTwo}
//    ${numOne} * ${numTwo} = ${numOne * numTwo}
//    ${numOne} / ${numTwo} = ${numOne / numTwo});
    


/*let actions = prompt("ты алкаш да или нет");

let result;

switch (actions) {
  case "да":
    numOne = +prompt("сколько пива ты можешь выпиить");
    numTwo = +prompt("сколько водки ты можешь выпиить");
    result = numOne + numTwo;
    alert(
      `ты должен выпить: ${numOne} л пива + и ${numTwo} л.водки ${result}л а вот столько надо вьебать вообщем`
    );
    break;
  case "нет":
    alert("То иды ты нахуй");
}
*/