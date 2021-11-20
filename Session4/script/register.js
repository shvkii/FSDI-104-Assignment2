console.log("Register page");
let salon={
    name:"Pet Palace",
    address:{
        street:"University",
        number: "758-K",
        zip:"22569",
        state:"CA",
        city:"San Diego"
    },
    hours:{
        open:"9:00 am",
        close:"20:00 pm"
    },
    pets:[]
}
//create a Pet constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owener=ownerName;
    this.phone=contactPhone;
}
//create three pets using the constructor
let dog1=new Pet("Zeus",40,"Male","Rotweiler","Nails","Shakita","555-555-5555")
let dog2=new Pet("Maximilian",30,"Male","English Bulldog","Grooming","Nini","333-333-3333")
let cat1=new Pet("Noir",40,"Female","British Shorthair","Nails","Yani","777-777-7777")
salon.pets.push(dog1,dog2,cat1);
console.log(salon.pets);

//get the values from the input
let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");

function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value)
    //create a constructor using the values from the input
    let newPet= new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value)
    //push it into the array
    salon.pets.push(newPet)
    //display the pet on the console
    console.log(salon.pets)
    //clear the inputs
   //clear();
}


function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}















//function simpleDisplay()
    //display Scooby on the console  // for(let i=0;i<salon.pets.length;i++)
  
        //console.log(salon.pets[i].name); 

//simpleDisplay();