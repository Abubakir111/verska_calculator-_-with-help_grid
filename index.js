

  




// Array.prototype.myfun  = function(n){
//   return this.map(function(i){
//     return i * n;
//   });
// }
// console.log(ar.myfun(20));
// let arbuz = [10,20,30,40,50];
// console.log(arbuz.myfun(2))

// let usr = {
//   namme: "данил",
//   fun1(){
//     console.log(this.namme);
//   }
// }

// usr.fun1();




// let som = document.querySelector(".som");
// let Euro = document.querySelector(".Euro");
// Euro.addEventListener("click" ,()=>{

//   let a = {
//       name:"dimon",
//       age:25,
//       my: function fun(jop ,fone){
//         console.group(`${this.name} ,info`)
//         console.log(`Меня зовуть  ${this.name} мне ${this.age}`);
//         console.log( `работа`,jop);
//         console.log( `номер`,fone);
//         console.groupEnd();
//       },

// }

// let Rubl = document.querySelector(".Rubl");
// // let url = "https://www.cbr-xml-daily.ru/daily_json.js";

// console.log(this);



//  function f1(){
//   this.style.color = "red";
  
//  }
// function get( a , b, coll_back){
//  coll_back(a, b);
// }


// get(100,2000 ,fun1);
// get(1000,2000 ,fun1); 

// function fun1(a ,b)
// {
//  let  rssul =  a + b;
//    console.log(rssul)
// }



// async function valut(){
//   let a = await  fetch(url);
//   let b = await a.json();
//   console.log(b.Valute.KGS.Value);
// }
// valut()



// fetch(url)
// .then((data)=>{
// return  data.json();
// }).then((data)=>{
//   console.log(data.Valute.KGS.Value);
// })


// let url = "https://www.cbr-xml-daily.ru/daily_json.js";
//  async function valuta(){
//  let promis = await fetch(url);
//  let  resullt = await  promis.json();
// som.innerHTML = resullt.Valute.KGS.Value.toFixed(2);
//  Euro.innerHTML = resullt.Valute.EUR.Value.toFixed(2);

//   console.log(resullt);

//  }

// valuta();



// 




//  let fam = document.querySelector(".fam");
//  let drug = document.querySelector(".drug");
//  let btn = document.querySelector(".btn");

//  btn.addEventListener("click",()=>{
//   naame.innerHTML += JSON.parse(maasiv)[1].name;
// fam.innerHTML += JSON.parse(maasiv)[1].famaely;
// drug.innerHTML += JSON.parse(maasiv)[1].drug;
//  }
//  );
 
 
 
//  ====jason присер использовние в java script====
 
//  let  maasiv = `
//   {
//     "name":"bob",
//     "famaely": "ivanov",
//     "drug": "bakir"
//   },
//   {
//     "name":"vasya",
//     "famaely": "pupkin",
//     "drug": "bob"
//   }
// `
// console.log(JSON.parse(maasiv));





// let RUBL = document.querySelector(".Rubl");






// let EURO = document.querySelector(".Euro");

// const url = "https://www.cbr-xml-daily.ru/daily_json.js";
//   fetch(url);
//     async function valuta(){

//          const rsponse = await fetch(url); 

//          const data =await rsponse.json();

//          RUBL.innerHTML =  data.Valute.USD.Value.toFixed(2);
       
//          EURO.innerHTML = data.Valute.EUR.Value.toFixed(2);
// }

// valuta();


//   =====  Promise ====
// checkRoom()
// .then(then1)
// .then(then2)
// .catch(catch_eror);

// function checkRoom(){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       console.log("Проверяем номера в отеле .....");
//       let availberRoom = true;
       
//       if(availberRoom){
//           resolve("Номер есть!");
//       }
//       else{
//           reject("Номеров нет")
//       }

//     },1000);

//   });
// }

// function then1(data){
//     return new Promise((resolve , reject)=>{

//        setTimeout(()=>{
//            console.log("===tech1===");
//            console.log("получен ответ с отеля!",data);
//            console.log("Проверая Билты....");

//           let availbeTravel = true;

//           if(availbeTravel){

//               let massege = "Билеты есть!"
//               resolve(massege);

//           }else{

//               let massege = "Билетов  нет";
//               reject(massege);

//             }

//         },3000);

//     });

//   }

// function then2(data){
//    setTimeout(()=>{
//      console.log("===then2===");
//      console.log(data);
//      console.log("Едим в отпуск!))");
//    },2000);
// }

// function catch_eror(data){
//   setTimeout(()=>{
//     console.log(data);
//     console.log("Отпуск отменяеться(((");
//   },2000);
// }

// async function asyng(){
//   try{

//   let Room = await checkRoom();
//   let then11 = await then1(Room);
//   let thenn = await then2(then11);

//   }catch(eror){
//    catch_eror(eror);
   
//   }
//  }
// asyng();















// checkRoom().then(then1).then(then2).catch(catch_eror);


// function checkRoom(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("===== then 1=====");
//       console.log("Провераяем номера в отеле....");
//       let availbeRoom = true;
//       if(availbeRoom){
//       resolve("Номера есть!");
//       }else{
  
//       reject("Номеров нет.");
//       }
//     },1500)
//   });

// }

// function then1(data){
//   return  new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//       console.log("====then2====");
//       console.log(data);
//       console.log("Провераяем Билет....");
//       let availbeTiket = false;
      
//       if(availbeTiket){
//         let massege = "Билет есть!";
//         resolve(massege);  
        
//       } else {
//         let massege = "Билет нет!";
//         reject(massege);
//       }
//     },1000); 
//   });
// }

// function then2(data){
//   setTimeout(()=>{
//     console.log("===then3===");
//     console.log(data);
//     console.log("едем в отпуск )))");
//   },2000)
// }
// function catch_eror(data){
//   setTimeout(()=>{
//     console.log("ответ на предыдущем шаге" , data);
//     console.log("Отпуск отменяеться  (((");

//   },2000);
//     }





// .then((data)=> {
  //   setTimeout(()=>{
    
    //   },3000 );
    

//   console.log(data);
//    return data +" у меня все хорошо"})


// .then((data)=> {console.log(data); return data})

// function myfun2(){
//   let new_mas = [];
//    for(let i = 0; i <masiv.length; i++){
//         new_mas.push(masiv[i].toUpperCase());
//    }
//    console.log(new_mas);
//  }
 
//  myfun2();
 
// 






// let btn = document.querySelector(".btn");
// let input = document.querySelector(".input");

// btn.addEventListener("click", ()=>{
//   // myfun(col1);
//   myfun(col2);
// });


// function myfun(coll_back){
//      (coll_back(input ,out));
//   }


// function col1(el ,mas){
//  mas.innerHTML = el.value;
// }

// function col2(el ,mas){
//   mas.innerHTML = el.toUpperCase;
 
//  }
// function myfun(coll_back){
//     let a = [1,2,3,4,5,6];
//     coll_back(out ,a);
// }

// function coll1(el ,arr){
//   el.innerHTML = arr.join("--");
// }
//  myfun(coll1);

// let mas = ["Привет","меня зовут ","Бакир"]

// function  coll_back(massiv, funks){
//   let resul = [];
//   for(let i = 0 ; i <massiv.length; i++){
//      resul.push(funks(massiv[i]));
//   }
//   return resul;
// }
// function massiv1(el){
//   return el.length;
// }
// let res = coll_back(mas ,massiv1);
// console.log(res);
// // let array = ["dimon","atyem","vasya"];



// function coll_back(arr ,fuksiy){
//   let resul = [];
//   for(let i = 0; i < array.length; i++){
//     resul.push(fuksiy(array[i]));
//    }
//    return resul;
// }

//  function arraycol (el){return el.length}
// function arraycol2(el){return el.toUpperCase();}


// let res1 = coll_back(array, arraycol2);
// console.log(res1);

// let res = coll_back(array, arraycol);
// console.log(res);
// let mas = ["Привет","Мир","как вас зовуть"];
 
// function coll_back(masiv ,funksia){
//  let new_masiv = [];
//  for(let i = 0; i < mas.length; i++){
//     new_masiv.push(funksia(mas[i]));
//  }
//  return new_masiv;
// }

// function mas1 (el){
//   return el.length;
// }
//  let result = coll_back(mas , mas1);
//  console.log(result);






// let btnStart = document.querySelector(".btnStart");
// function arrname(el){
//   console.log(el);
//   return el;
// }
// let btnPause = document.querySelector(".btnPausa");
// let btnReset = document.querySelector(".btnReset");
// let counterTex = document.querySelector(".counter");
// let counter = 0;
// let setid;

//  btnStart.addEventListener("click",()=>
//   setid =  setInterval(()=>{
//     counter++;
//     counterTex.innerText = counter;
//     console.log(counter);
// },1000));

// btnPause.onclick = ()=>clearInterval(setid);

// btnReset.onclick = ()=>{counter = 0;counterTex.innerText = counter};





// let input = document.querySelector(".input");
// let todo_btn = document.querySelector(".todo_form");
// todo_btn.addEventListener("submit", (event)=> {
//   event.preventDefault();
//   let createElem = document.createElement("li");
//   createElem.innerText = input.value;
//   todo_list.append(createElem);
//   // console.log("submit");
//   let delete_btn = document.createElement("butoon");
//   delete_btn.setAttribute("role", "submit");
//   delete_btn.innerText = "удалить";
//   delete_btn.style["margin-left"] = "20px";
//   delete_btn.style["color"] = "red";
//   delete_btn.style["background"] = "red";
//   createElem.append(delete_btn);
//   delete_btn.addEventListener("click",(e)=>e.target.closest("li").remove());
//   input.value = "";
// });












// let btn_1 = document.querySelector(".button_1");


// let img = document.querySelector("img");
// btn_1.getAttribute("type");
// btn_1.setAttribute("value","button");

// btn_1.addEventListener("click",()=> img.setAttribute("src","./Я2.jpg"));

// let input = document.querySelector(".input");
// let info_input = document.querySelector(".info_input");

// input.addEventListener("input",() => info_input.innerHTML= input.value );
// let list = document.querySelector(".list");
// list.addEventListener("click", (event) => console.log(event.target));

//        содание  элементов
// let cont = document.querySelector(".info");
// let h3 = document.createElement("h3");
// h3.innerText = "Меня создали через js";
// cont.append(h3);

//         клонирование элементов

// let body = document.querySelector("body");
// let clon = body.cloneNode(true);
// body.append(clon);

















// for(itym of input){
//   console.log(itym);
//   itym.classList.add("red");
// }
// input.forEach(itm =>  itm.classList.add("red"));

// input.forEach(itm => itm.classList.remove("red"));

// btn_1.addEventListener("click",() =>
// input.forEach( itm => itm.classList.toggle("red")));

// input.classList.contains("red");
// console.log(clas);

//  let h1 = document.querySelectorAll("h1");
//  for(itm of h1){
//    console.log(h1);
//   itm.classList.add("red");

//  }

// function info1(a ,b){ //ретёрн возврашаить результать
//    return a * b;
// }
// function info2(a ,b){
//   return a + b;
// }


// function colbec (funct){ // функция колбек
//     let x = 100,
//         y = 200;
//   let result = funct(x ,y );
//      console.log(result);
// }
// colbec(info1);
// colbec(info2);

// (function (){ // самовызываюший функция
//   console.log("Я анонимная фунция");
// })();
// let sum =(function (a,b){
// return a+b;
// })(20,20);
// console.log(sum);


//  arg = () => console.log(`Привет`); // стрелочная  функция
// arg();

// arg = (a,b) => a + b;

// let sum =arg(100 ,100);
// console.log(sum);

// let mas  = ["audi","bmv","fit","infiniti",11,11,11,11,11];// массивы
// console.log(mas.length);

// let mas = [11,22,33,44,];//push добавлять элемент массива в конец  сушиствуюшего массива
// console.log(mas);
// mas.push("Я push");
// console.log(mas);

// let mas =[11,22,33,44,55,66];//splice удаляеть  эементы массива (1<=озночаеть с какого массива начать удалять,2 <= озночаеть сколько массивов надо удалить)
// mas.splice(1,2);
// console.log(mas);


// let sum = ["преый индекс","второй индекс","третий индекс","четвертый индекс",5];//обычный цикл for 
// console.log(sum);
// for(let i = 0; i< sum.length; i++){
//   console.log(sum[i]);
// }
// let a;

// let sum = ["преый индекс","второй индекс","третий индекс","четвертый индекс",5] //Часто используемые цикл for or
// for(itm of sum){
//   console.log(itm);
// }

  // цикл forEach позволяеть получить эементы массива и индех черех обыявленя функций 


// let sum = ["преый индекс","второй индекс","третий индекс","четвертый индекс",5]
// sum.forEach(function(element, index){
//    console.log(element,index);
// });
 

//второй враиант использвонаия функций forEach .мы можем создать функцию одельно потом вызвать метот fjrEach и вкачестве аргумета предать функцию который будеть перебирать массив

// let sum = ["преый индекс","второй индекс","третий индекс","четвертый индекс"];

// sum.forEach(mas);
//      function mas (element, index)
//      {
//       console.log(element,index);
//      }
// let info
// let sum = ["пивет","Gивет","Tивет"];
//  sum.forEach( (element, index ) => console.log(element,index));


//     12   <<  Обыекты  и их свойства >>
   
// let prooert = {
//    name: "Жетиген",
//    are: 27,
//    stri: "лет",
//    pol: "Мужик"
//   }
//   console.log(prooert);
  // // Первый вариант как обратиться к своиствам  обыекта
  // console.log(prooert);
  // console.log(prooert.name,prooert.are,prooert.string,prooert.pol);

  // Второй вариант как обратиться к своиствам  обыекта
  // let pris = "name";
  // console.log(prooert[pris]);
  // prooert.newname = "Бакир";//<= таким образом мы може мдобавалять в свойства обыекта  новые свойства
  // console.log(prooert);

  // delete prooert.name; //<= таким образом мы удаляе  свойства обыкета 
  // console.log(prooert);


  //   13  << Методы в обыектах  >>

  // let person = {
  //   name: "Мээрим",
  //   age: 22,
  //   string: "лет",
  //   pol: "женский",
  //   fun: function (aame){  // всвоистве обыекта  записаный функция  называеться Методом обыекта
  //     console.log(`привет ${aame}`);
  //   }
  // }
  // person.fun("Бакир");
       
  // person.fuun2 = function(Naw){      // Также таким  образом мы можем добавить в обыект новый метод обыекта
  //   console.log(`Чем занять ${Naw}`);
  // }
  // console.log(person);
  // person.fuun2("друг");
      
    // 14 цикл  for in позволяеть обходить не итерируемые обыекты 
    // Коротко говроя wbrks for of ,for (let i ***) для обыекта не работаеть
     
//   let person = {
//      brend: "step",
//      year: 1997,
//      model:  (a) => {
//       console.log(`Это бренд ${a} и год выпуска ${this.brend}` );
//      },
//   };
//   person.model("audi");
// for(key in person){
//   console.log( key , "; ",person[key]);
// }


//        15   классы для создание обыектов  


// class persen {
//   constructor(a,b,v){
//      this.a = a;
//      this.b = b;
//      this.v = v;
//   }
//   fun(name){
//     console.log(`Привет ${name} меня зовуть ${this.a}`);
//   }
// }
// const persen1 = new persen("Алибек" ,"мне",28);
// console.log(persen1);
// persen1.fun("Дима");