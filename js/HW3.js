let year = +prompt('Какого года ты рождения?');
let country = prompt('В каком городе ты живешь?');
let sport = prompt('Какой твой любимый вид спорта?');
let age = `${2024 - year}`;

/*switch (year) {
    case  != 0:
        alert(`${'Твой возраст:'} ${age}`);  
    break;
    default:
        alert('Очень жаль что ты не ввел свою дату рождения=(');
    break;

}
*/

if (year != 0 || null ) {
    alert(`${'Твой возраст:'} ${2024 - year}`);
} else {
    alert('Жаль что ты не ввел свою дату рождения');
}

switch (country) {
    case 'Киев':
        alert(`Ты живешь в ${country}, столице Украины.`);
            break;
    case 'Лондон':
        alert(`Ты живешь в ${country}, столице Великобритании.`);
            break;
    case 'Варшава':
        alert(`ты живешь в ${country}, столице Польши.`);
            break;
    case null:
        alert(`Жаль что ты не захотел вводить свой город =(`);
            break;
default:
    alert(`Ты живешь в городе ${country}.`);
}

switch (sport) {
    case 'Футбол':
        alert(`Круто! хочешь стать как Андрей Шевченко?`);
            break;
    case 'Баскетбол':
        alert(`Круто! Хочешь стать как Майкл Джордан?`);
            break;
    case 'Хокей':
        alert(`Круто! Хочешь стать как Уэйн Гретцки??? `);
            break;
    case null:
        alert(`Жаль что ты не захотел вводить вид спорта =(`);
            break;
}

//alert(`${'Твой возраст:'} ${year}`);

/*if ( country = 'Киев' || 'Лондон' || 'Варшава') {
    if ('Киев') {
    alert(`Ты живешь в ${country} столице Украины!`);
    } else {
        alert(`Ты живешь в городе ${country}`);
    }
    if (country = 'Лондон') {
    alert(`Ты живешь в ${country} столице Великобритании`);
} else {
    alert(`Ты живешь в городе ${country}`);
}


}
*/