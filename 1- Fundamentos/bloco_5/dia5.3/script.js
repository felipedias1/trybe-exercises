window.onload = function () {

const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebPage = document.getElementById('mySpotrybefy');

//1. Copie esse arquivo e edite apenas ele;

//2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
divUm.addEventListener("click", select);
divDois.addEventListener("click", select);
divTres.addEventListener("click", select);

function select(evento) {    
  
  if (evento.target == divUm) {
    divDois.className = "";
    divTres.className = "";
    divUm.className = "tech";
  } else if (evento.target == divDois) {
    divUm.className = "";
    divTres.className = "";
    divDois.className = "tech";
  } else {
    divUm.className = "";
    divDois.className = "";
    divTres.className = "tech";   
  }
}

//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
//com a classe 'tech';

divUm.addEventListener("click", textChange);
divDois.addEventListener("click", textChange);
divTres.addEventListener("click", textChange);

function textChange (evento) {
  if (evento.target.className == "tech") {
    evento.target.innerText = input.value;
  }
}

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
//redirecione para alguma página;
//4.1. Que tal redirecionar para seu portifólio?

myWebPage.addEventListener("dblclick", directly);

function directly (){
  window.location.replace("https://felipedias1.github.io/");
}

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//a cor do mesmo;

myWebPage.addEventListener("mouseover", changecolor);
myWebPage.addEventListener("mouseout", backcolor);

function changecolor (){
  myWebPage.style.color = "purple"
}

function backcolor (){
  myWebPage.style.color = "white"
}


//Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

};