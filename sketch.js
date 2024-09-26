let suaidade;
let terror;
let drama;
let comédia;
let título;
let corpo;
let filmes = {
  menor10: {
  terror: "A Casa Monstro",
  drama: "Extraordinário",
  comédia: "Minions"
  },
  entre10e14:{
  terror: "O Orfanato",
  drama: "O Menino Do Pijama Listrado",
  comédia: "Os Caça-Fantasmas"
  },
  entre14e16:{
  terror: "Pânico",
  drama: "Monte Carlo",
  comédia: "Ela É Demais"
  },
  entre16e18:{
  terror: "A Babá",
  drama: "Desejo Proibido",
  comédia: "American Pie"
  },
  maior18:{
  terror: "A Freira",
  drama: "Cinzas",
  comédia: "A Família Do Bagulho"
}
};

let button; 

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(670,520).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  terror = createCheckbox("Gosta de filmes de terror?🎃").position(100,600).addClass("hidden");
  drama = createCheckbox("Gosta de filmes de drama?🎀").position(100,650).addClass("hidden");
  comédia = createCheckbox("Gosta de filmes de comédia?🤣").position(100,700).addClass("hidden");
  título = "Baskervville SC"
  corpo =  "Oswald";
  button = createButton("START✔❤").position(width/2,550);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
  button.hide();
}
function draw() {
  background("white");
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE FILMES", width/2, 20);
  textFont(corpo);
  

  let idade = parseInt(suaidade.value());
  let checkterror = terror.checked();
  let checkdrama = drama.checked();
  let checkcomédia = comédia.checked();
  let filme = "Insira suas preferências";
  if (suaidade.value() !== ""){
  filme = mostrafilme(idade, checkterror, checkdrama, checkcomédia);
}
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(filme, width/2, height/2);
  textFont(título);
} 

  function mostrafilme(idade, checkterror, checkdrama, checkcomédia){
    if (isNaN(idade)){
      return "Idade Inválida";
    } else
      if (idade < 5){
        return "Sai daqui, você é uma criança"
      } else 
      if (idade > 120){
        return "Já morreu, enterra"
      } 
    if (idade >= 5 && idade < 10){
      if (checkterror){
        return filmes["menor10"]["terror"];
      }
      if (checkdrama){
        return filmes["menor10"]["drama"];
      }
      if (checkcomédia){
        return filmes["menor10"]["comédia"];
      }
    }
    else if (idade >= 10 && idade < 14){
      if (checkterror){
        return filmes["entre10e14"]["terror"];
      }
      if (checkdrama){
        return filmes["entre10e14"]["drama"];
      }
      if (checkcomédia){
        return filmes["entre10e14"]["comédia"];
      }
    }
    else if (idade >= 14 && idade < 16){
      if (checkterror){
        return filmes["entre14e16"]["terror"];
      }
      if (checkdrama){
        return filmes["entre14e16"]["drama"];
      }
      if (checkcomédia){
        return filmes["entre14e16"]["comédia"];
      }
    }
    else if (idade >= 16 && idade < 18){
      if (checkterror){
        return filmes["entre16e18"]["terror"];
      }
      if (checkdrama){
        return filmes["entre16e18"]["drama"];
      }
      if (checkcomédia){
        return filmes["entre16e18"]["comédia"];
      }
    }
    else if (idade >= 18){
      if (checkterror){
        return filmes["maior18"]["terror"];
      }
      if (checkdrama){
        return filmes["maior18"]["drama"];
      }
      if (checkcomédia){
        return filmes["maior18"]["comédia"];
      }
    }
  }




