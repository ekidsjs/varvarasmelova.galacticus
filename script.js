function run(){
const rightAnswers = 
['2', '1', '3', '1', '3'];
const userAnswers = [];
let raiting = 0;
let status = '';

const name = prompt("Ведите сваё имя", "Пользователь");
const years = prompt("Сколько вам лет?");
userAnswers[0] = prompt("луна это планета? \n1. Да\n2. Нет");
userAnswers[1] = prompt("Из чего состоит солнце? \n1. Из газа\n2. Изо льда \n3. Из ваты");
userAnswers[2] = prompt("Какой по счету марс от солнца? \n1. 1-й\n2. 3-й \n3. 4-й");
userAnswers[3] = prompt("Есть ли у урана кольца? \n1. Да\n2. Нет");
userAnswers[4] = prompt("Какая самая большая планета солнечной системы? \n1. Земля\n2. Луна \n3. Юпитер");
if (rightAnswers[0]){
    raiting += 1;
}
if (rightAnswers[1]){
    raiting += 1;
}
    if (rightAnswers[2]){
        raiting += 1;
    }
        if (rightAnswers[3]){
            raiting += 1;
        }
            if (rightAnswers[4]){
                raiting += 1;
            }
if (raiting <= 2) {
    status = 'Ты очень мало знаешь о космосе, тебе стоит читать больше книг.'
}
else if (raiting < 5){
    status = 'Ты довольно хорошо знаешь космос, продолжай в таком духе и ты станешь космическим рейнджером.'
}
else {
    status = 'Ты знаешь о космосе проктически всё, продолжай в том же духе, ты молодец!'
}
alert(`Привет, ${name} тебе уже ${years} лет и ${status}`);
}