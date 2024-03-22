let year = +prompt('Какого года ты рождения?');
let age = `${2024 - year}`;
let cnt;
if (year != 0 || null ) {
//    alert(`${'Твой возраст:'} ${age}`);
} else {
    alert('Жаль что ты не ввел свою дату рождения');
}

let country = prompt('В каком городе ты живешь?');

switch (country) {
    case 'Киев':
    let cnt1 ='Твой город столица Украины.';
            break;
    case 'Лондон':
            break;
    case 'Варшава':
            break;
    case null:
        alert(`Жаль что ты не захотел вводить свой город =(`);
            break;
default:
    alert(`Ты живешь в городе ${country}.`);
}

let sport = prompt('Какой твой любимый вид спорта?');

switch (sport) {
    case 'Футбол':
//       alert(`Круто! хочешь стать как Андрей Шевченко?`);
            break;
    case 'Баскетбол':
//       alert(`Круто! Хочешь стать как Майкл Джордан?`);
            break;
    case 'Хокей':
//       alert(`Круто! Хочешь стать как Уэйн Гретцки??? `);
            break;
    case null:
       alert(`Жаль что ты не захотел вводить вид спорта =(`);
            break;
default:
    alert(`Вернись к правильному выбору вида спорта!`);
}
alert(`Твой возраст: ${age}
Твой город : ${country}${сnt1}
Твой вид спорта : ${sport}`);