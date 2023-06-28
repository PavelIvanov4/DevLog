document.getElementsByTagName('html')[0].addEventListener('load', () => {
	document.body.style.background = 'coral';
})

let menu = document.getElementsByTagName('li');
let box1 = document.getElementById('wrapper1');
let box2 = document.getElementById('wrapper2');
let box3 = document.getElementById('wrapper3');
let box4 = document.getElementById('wrapper4');
let box5 = document.getElementById('wrapper5');
let box6 = document.getElementById('wrapper6');
let more = document.getElementsByClassName('more');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('res');
let res2 = document.getElementById('res2');
let bt = document.getElementsByClassName('box-text');
let count = 0;
let lang = 0;
let newInput = document.getElementById('newInput');
let lan = document.getElementsByTagName('span');
let par = document.getElementsByTagName('p');
let he2 = document.getElementsByTagName('h2');

menu[0].addEventListener('click', () => {
	box1.style.display = 'block';
	box2.style.display = 'none';
	box3.style.display = 'none';
	box4.style.display = 'none';
	box5.style.display = 'none';
	box6.style.display = 'none';		
	returnMenu();
})

menu[1].addEventListener('click', () => {
	box1.style.display = 'none';
	box2.style.display = 'block';
	box3.style.display = 'none';
	box4.style.display = 'none';
	box5.style.display = 'none';
	box6.style.display = 'none';
    returnMenu();	
})

menu[2].addEventListener('click', () => {
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'block';
	box4.style.display = 'none';
	box5.style.display = 'none';
	box6.style.display = 'none';		
	returnMenu();
})

menu[3].addEventListener('click', () => {
	document.getElementsByClassName('lang-block')[0].classList.toggle('visible');
})

more[0].addEventListener('click', () => {
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'none';	
	box4.style.display = 'block';
	box5.style.display = 'none';
	box6.style.display = 'none';	
	beautifyMenu()
	window.scrollTo(0, 0);
})

more[1].addEventListener('click', () => {
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'none';	
	box4.style.display = 'none';
	box5.style.display = 'block';
	box6.style.display = 'none';	
	beautifyMenu()
	window.scrollTo(0, 0);
})

more[2].addEventListener('click', () => {
	box1.style.display = 'none';
	box2.style.display = 'none';
	box3.style.display = 'none';	
	box4.style.display = 'none';
	box5.style.display = 'none';
	box6.style.display = 'block';	
	beautifyMenu()
	window.scrollTo(0, 0);
})

res.addEventListener('click', () => {
	let newNum = 12 * Math.round(Number(num1.innerHTML) + Number(num2.innerHTML) / 3);
	event.currentTarget.innerHTML = newNum;
})

num1.addEventListener('input', () => {
    if(num1.innerHTML.length > 1) {
		num1.replaceChildren();
 }
})

num2.addEventListener('input', () => {
    if(num2.innerHTML.length > 1) {
		num2.replaceChildren();
 }
})

newInput.addEventListener('input', () => {
		res2.innerHTML = newInput.innerHTML * newInput.innerHTML;
		event.currentTarget.style.backgroundColor = 'darkGreen';
		if(newInput.innerHTML.length > 3) {
			newInput.replaceChildren();
			res2.innerHTML = '?';
		}
})

document.getElementById('fontChange').addEventListener('click', () => {
	if (count == 0) {
	bt[0].style.color = 'lightGreen';
	bt[1].style.color = 'lightGreen';
	bt[2].style.color = 'lightGreen';
	bt[3].style.color = 'lightGreen';
	bt[4].style.color = 'lightGreen';
	bt[5].style.color = 'lightGreen';
	count ++;
 } else if (count == 1) {
	bt[0].style.color = 'lightBlue';
	bt[1].style.color = 'lightBlue';
	bt[2].style.color = 'lightBlue';
	bt[3].style.color = 'lightBlue';
	bt[4].style.color = 'lightBlue';
	bt[5].style.color = 'lightBlue';
	count ++;
 } else if (count == 2) {
	bt[0].style.color = 'coral';
	bt[1].style.color = 'coral';
	bt[2].style.color = 'coral';
	bt[3].style.color = 'coral';
	bt[4].style.color = 'coral';
	bt[5].style.color = 'coral';
	count ++;
 } else if (count == 3) {
	bt[0].classList.add('animate');
	bt[1].classList.add('animate');
	bt[2].classList.add('animate');
	bt[3].classList.add('animate');
	bt[4].classList.add('animate');
	bt[5].classList.add('animate');
	count ++;
 } else if (count == 4) {
	bt[0].classList.remove('animate');
	bt[1].classList.remove('animate');
	bt[2].classList.remove('animate');
	bt[3].classList.remove('animate');
	bt[4].classList.remove('animate');
	bt[5].classList.remove('animate');	 
	bt[0].style.color = 'beige';
	bt[1].style.color = 'beige';
	bt[2].style.color = 'beige';
	bt[3].style.color = 'beige';
	bt[4].style.color = 'beige';
	bt[5].style.color = 'beige';
	count ++;
 } else {
	switch (lang) {
    case 0 :
    bt[0].innerHTML = bt[0].innerHTML.replaceAll('и', 'э');
	bt[1].innerHTML = bt[1].innerHTML.replaceAll('л', 'ш');
    bt[2].innerHTML = bt[2].innerHTML.replaceAll('а', 'ю');
    bt[3].innerHTML = bt[3].innerHTML.replaceAll('е', 'у');
    bt[4].innerHTML = bt[4].innerHTML.replaceAll('и', 'о');
    bt[5].innerHTML = bt[5].innerHTML.replaceAll('п', 'з');	
	document.getElementById('page1').style.background = 'repeating-linear-gradient(to bottom right, rgb(3, 5, 10) 0px 50px, rgb(8, 12, 28) 50px 100px)';
    count = 0;
	break;
    case 1 :
    bt[0].innerHTML = bt[0].innerHTML.replaceAll('a', 'o');
	bt[1].innerHTML = bt[1].innerHTML.replaceAll('i', 'e');
    bt[2].innerHTML = bt[2].innerHTML.replaceAll('l', 'z');
    bt[3].innerHTML = bt[3].innerHTML.replaceAll('o', 'у');
    bt[4].innerHTML = bt[4].innerHTML.replaceAll('s', 'q');
    bt[5].innerHTML = bt[5].innerHTML.replaceAll('n', 'w');	
	document.getElementById('page1').style.background = 'repeating-linear-gradient(to bottom right, rgb(3, 5, 10) 0px 50px, rgb(8, 12, 28) 50px 100px)';
    count = 0;	
	}
 }
})

function beautifyMenu() {
	var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);
    if (w >= 625) {	
	document.getElementsByClassName('lang-block')[0].classList.add('visible');
	document.getElementsByClassName('lang-block')[0].style.width = '100%';
	document.getElementsByClassName('lang-block')[0].style.borderRadius = '0 0 0 0';
	document.getElementsByClassName('lang-block')[0].style.backgroundColor = 'navy';
	document.getElementsByTagName('header')[0].style.backgroundColor = 'navy';
	menu[0].style.minWidth = '122px';
	menu[1].style.minWidth = '122px';
	menu[2].style.minWidth = '122px';
	menu[3].style.minWidth = '122px';
	document.getElementsByClassName('logo')[0].style.color = 'white';	
 }
}

function returnMenu() {
	var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);
    if (w >= 625) {		
	document.getElementsByClassName('lang-block')[0].classList.remove('visible');
	document.getElementsByClassName('lang-block')[0].style.width = '400px';
	document.getElementsByClassName('lang-block')[0].style.borderRadius = '0 0 30px 0';
	document.getElementsByClassName('lang-block')[0].style.backgroundColor = 'black';
	document.getElementsByTagName('header')[0].style.backgroundColor = 'black';
	menu[0].style.minWidth = '90px';
	menu[1].style.minWidth = '90px';
	menu[2].style.minWidth = '90px';
	menu[3].style.minWidth = '90px';
	document.getElementsByClassName('logo')[0].style.color = 'aqua';	
 }
}

lan[0].addEventListener('click', () => {
	document.getElementsByTagName('h1')[0].innerHTML = 'Welcome to DevLog';
	document.getElementsByClassName('logo')[0].innerHTML = 'DevLog – A website about websites';
	par[0].innerHTML = 'I\'m a beginner web developer. On this website I tell about my projects and the experience I\'ve got during layout engineering and styling. Sometimes it looks difficult to me, but I tend to find some ways to create more diverse sites or web apps.';
	par[1].innerHTML = 'I actively use HTML5, CSS3, JavaScript, DOM API and VS Code. With many well-known methods, and also third party libraries, frontend development doesn\'t freeze in one state and it goes cross-platform. More so, such programs as Node.js can make you feel like a server technician.';
	par[2].innerHTML = 'When I was a teenager, I learned Python, but because of lack of practice it was literally put on a shelf. After switching to web development, during my experience with JavaScript I got familiar with DOM. The most amazing thing is that I have found so many methods for adding interactivity to web pages.';
	par[3].innerHTML = 'Read more';
	par[4].innerHTML = 'Since mobiles and tablets are widely used nowadays, I faced a new challenge making projects suitable for various sizes of screens. Although finding a golden ratio with breakpoints is not always successful, I liked that it\'s possible to not only change proportions with the @media rule.';
	par[5].innerHTML = 'Read more';
	par[6].innerHTML = 'I got to know that you can make math operations in variables, functions and even CSS. They help to choose an optimal value or create some project like a calculator. In the latter case there are plenty of opportunities. Such stuff can even be turned into buttons that change page style or text content.';
	par[7].innerHTML = 'Read more';
	par[8].innerHTML = 'Here is a small table, where I name some ways to contact me.';
	par[9].innerHTML = 'I want to thank Pixabay users for provided photos. I wish them success :';
	par[10].innerHTML = 'When I was a teenager, I learned Python, but because of lack of practice it was literally put on a shelf. After switching to web development, during my experience with JavaScript I got familiar with DOM. The most amazing thing is that I have found so many methods for adding interactivity to web pages.';
	par[11].innerHTML = 'There are not only many ways to perform an action on web page, like assigning a class, declaring a function or displaying a text block. I see that with some help of CSS attributes and DOM API itself you can even build copies of built-in HTML tags. This way, I made a simple calc without using form elements. <a href="https://PavelIvanov4.github.io/BaseCalc">Here</a> is a link to it.';
	par[12].innerHTML = 'Scripts help to have manoeuvres in development. If numbers are entered inside blank squares below, you can see something after clicking on a rectangle.';
	par[13].innerHTML = 'As you can see, it\'s a small calculation. The first number gives a larger result, as it firstly gets multiplied, whereas the second is only added before dividing into 3. The next button allows to change this article\'s font color. On the sixth click a surprise might come round.';
	par[14].innerHTML = 'Since mobiles and tablets are widely used nowadays, I faced a new challenge making projects suitable for various sizes of screens. Although finding a golden ratio with breakpoints is not always successful, I liked that it\'s possible to not only change proportions with the @media rule.';
	par[15].innerHTML = 'You can also set background\'s color, show and hide massive blocks and even add animation that plays differently on a smartphone, for example. Margins and measure units can be a little tricky here, but I still look on it all with inspiration. By the way, in HTML5 you can use the media attribute for links.';
	par[16].innerHTML = 'I remember how a web developer with whom I\'m acquainted told that for adaptive style blocks it should be better to specify width range, not only one value. It\'s because devices have different sizes and it\'s often tough to get it right. I\'ll be glad to practice further! I\'m sure that a site that is fully suitable for different screens is delightful for business clients.';
	par[17].innerHTML = 'I got to know that you can make math operations in variables, functions and even CSS. They help to choose an optimal value or create some project like a calculator. In the latter case there are plenty of opportunities. Such stuff can even be turned into buttons that change page style or text content.';
	par[18].innerHTML = 'In school we often dealt with decimals and fractions, they\'re connected with each other, making a possible conversion. Such numbers, as Pi (3,14) often look like an alien riddle, but I\'m more used to whole numbers. This is why in one of the previous articles calculation results get rounded.';
	par[19].innerHTML = 'I had created a simple input. If you fill it with a number that has maximum of three digits, it will show its squared value.';
	he2[0].innerHTML = 'So, the object model';
	he2[1].innerHTML = 'Responsive layout';
	he2[2].innerHTML = 'The power of math in projects';
	he2[3].innerHTML = 'So, the object model';
	he2[4].innerHTML = 'Some simple code examples';
	he2[5].innerHTML = 'Adaptive layout';
	he2[6].innerHTML = 'The power of math in projects';
	he2[7].innerHTML = 'Goin\' Square';
	menu[0].innerHTML = 'Main';
	menu[1].innerHTML = 'Articles';
	menu[2].innerHTML = 'Contacts';
	menu[3].innerHTML = 'Language';
	document.getElementById('fontChange').innerHTML = 'Go';
	lang = 1;
})


lan[1].addEventListener('click', () => {
	document.getElementsByTagName('h1')[0].innerHTML = 'Добро пожаловать на DevLog';
	document.getElementsByClassName('logo')[0].innerHTML = 'DevLog – Сайт о разработке сайтов';
	par[0].innerHTML = 'Я – начинающий веб-разработчик, на этом сайте я рассказываю о своих проектах и о том опыте, что я приобрел при их вёрстке и стилизации. Иногда мне это кажется сложным, но часто у меня удаётся найти некоторые пути, по которым я создаю всё более многообразные сайты и веб-приложения.';
	par[1].innerHTML = 'В моём активе сейчас HTML5, CSS3, JavaScript, DOM API и VS Code. С помощью известных многими методов, а также сторонних библиотек, Frontend-разработка не стоит на месте и наращивает кроссплатформенный формат. А такие программы, как Node.js, и вовсе позволяют почувстовать себя инженером серверов.';
	par[2].innerHTML = 'Ещё когда я был подростком, я изучал Python, но из-за отсутствия практики он был буквально отложен на полку. Когда я стал заниматься уже веб-разработкой, я после знакомства с JavaScript узнал про такую вещь, как DOM. И самым удивительным было то, что я открыл столько методов для добавления интерактивности веб-страницам.';
	par[3].innerHTML = 'Далее';
	par[4].innerHTML = 'Сейчас активно используются мобильники и планшеты, и я стокнулся с новой сложностью – нужно проекты адаптировать так, чтобы они подходили для разных размеров экранов. Хотя с брейкпоинтами найти золотую середину получается не всегда, мне понравилось то, что можно не только менять пропорции с помощью правила @media.';
	par[5].innerHTML = 'Далее';
	par[6].innerHTML = 'Я убедился, что вычисления можно проводить в переменных, функциях и даже в CSS. Они помогают подобрать то значение, которое надо, или сделать какой-нибудь проект вроде калькулятора. В последнем случае вариантов масса, их даже можно превратить в переключатели, которые будут менять стиль страницы или текст.';
	par[7].innerHTML = 'Далее';
	par[8].innerHTML = 'Здесь небольшая таблица, где перечисляю способы, как можно со мной связаться.';
	par[9].innerHTML = 'Хочу поблагодарить пользователей портала Pixabay за предоставленные фото. Желаю им успехов :';
	par[10].innerHTML = 'Ещё когда я был подростком, я изучал Python, но из-за отсутствия практики он был буквально отложен на полку. Когда я стал заниматься уже веб-разработкой, я после знакомства с JavaScript узнал про такую вещь, как DOM. И самым удивительным было то, что я открыл столько методов для добавления интерактивности веб-страницам.';
	par[11].innerHTML = 'Там не только огромное количество путей для совершения какого-либо действия на странице, будь то присвоение класса, определение функции или отображение блока с текстом. Я вижу, что с помощью атрибутов CSS и самого DOM API можно даже повторить некоторые встроенные теги HTML. Таким образом, я смог сделать простой калькулятор без использования элементов форм. Ссылка на него находится <a href="https://PavelIvanov4.github.io/BaseCalc">здесь</a>.';
	par[12].innerHTML = 'Скрипты помогают маневрировать при разработке. Если вводить числа в квадраты ниже, и затем кликнуть по прямоугольнику, можно кое-что увидеть.';
	par[13].innerHTML = 'Как вы видите, это небольшое вычисление. Первое число даёт больший результат, т. к. на него вначале идёт умножение, тогда как второе лишь складывается перед делением на 3. Следующая кнопка позволяет изменить цвет шрифта этой статьи. На шестом клике будет небольшой сюрприз.';
    par[14].innerHTML = 'Сейчас активно используются мобильники и планшеты, и я стокнулся с новой сложностью – нужно проекты адаптировать так, чтобы они подходили для разных размеров экранов. Хотя с брейкпоинтами найти золотую середину получается не всегда, мне понравилось то, что можно не только менять пропорции с помощью правила @media.';
	par[15].innerHTML = 'Можно также задавать цвет фона, показывать и убирать целые блоки и даже добавлять анимацию, которая будет проигрываться по-другому на том же смартфоне. С отступами и единицами измерения, конечно, бывает некоторая путаница, но я не перестаю с вдохновением смотреть на всё это. Кстати, в HTML5 появилась возможность использовать атрибут media для ссылок.';
	par[16].innerHTML = 'Как-то мне знакомый веб-разработчик сказал, что для адаптивного блока стиля лучше указывать не ширину, а диапазон ширин, а то устройства имеют разный размер и попасть в точку часто бывает нелегко. Буду рад практиковаться дальше! Уверен, что приспособленность сайта под разные размеры экрана сделает его приятным для бизнес-клиентов.';
	par[17].innerHTML = 'Я убедился, что вычисления можно проводить в переменных, функциях и даже в CSS. Они помогают подобрать то значение, которое надо, или сделать какой-нибудь проект вроде калькулятора. В последнем случае вариантов масса, их даже можно превратить в переключатели, которые будут менять стиль страницы или текст.';
	par[18].innerHTML = 'В школе мы часто имели дело с десятичными и дробными числами, они взаимосвязаны и не исключен перевод их друг в друга. Такие числа, как Пи (3,14...) нередко выглядят, как инопланетная головоломка, но я привык больше к целым числам. Именно поэтому в одной из предыдущих статей результат вычисления округлялся.';
	par[19].innerHTML = 'Я создал простой инпут, с помощью которого можно узнать, как будет то или иное число (максимум трёхзначное) в квадрате.';
	he2[0].innerHTML = 'Итак, объектная модель';
	he2[1].innerHTML = 'Адаптивная вёрстка';
	he2[2].innerHTML = 'Сила математики в проектах';
	he2[3].innerHTML = 'Итак, объектная модель';
	he2[4].innerHTML = 'Некоторые простые примеры кодов';
	he2[5].innerHTML = 'Адаптивная вёрстка';
	he2[6].innerHTML = 'Сила математики в проектах';
	he2[7].innerHTML = 'Перевод в квадрат';
	menu[0].innerHTML = 'Главная';
	menu[1].innerHTML = 'Статьи';
	menu[2].innerHTML = 'Контакты';
	menu[3].innerHTML = 'Язык';
	document.getElementById('fontChange').innerHTML = 'Пуск';
	lang = 0;
})