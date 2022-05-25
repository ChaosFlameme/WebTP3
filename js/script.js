var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    // permet de récupérer les tâches entrées puis les ajoute dans myTasks
    supprimer();
    pushTache(tacheSaisie());

    myTasks.forEach((tasks)=>{
      //création des variable pour la création d'une nouvelle ligne dans le tableau
      const newItem = document.createElement('tr')
      const taskTd = document.createElement('td')
      const dateTd = document.createElement('td')
      const categorieTd = document.createElement('td')
      taskTd.textContent = tasks.name
      dateTd.textContent = tasks.date
      categorieTd.textContent = tasks.category
      //Vérification de la récupération
      console.log(taskTd.textContent)
      console.log(dateTd.textContent)
      console.log(categorieTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.categorie.checkValidity()
         ) {
               return
        }
        
    newItem.append(taskTd, dateTd, categorieTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem);
    })

   
    
    

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function supprimer_tout() {
  myTasks = []
  const tbody = document.querySelector('.datatable tbody' )
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild)
  }

}

function tacheSaisie(){

  name_task = document.newTaskF.tache.value;
  date_task = document.newTaskF.date.value;
  category_task = document.newTaskF.categorie.value;
  
  /*
  //question 2
  let myNewTask = {

    name: name_task,
    date: date_task,
    category: category_task,
  
  }
  return myNewTask;
  */

  
  const newTache = new Tache(name_task, date_task, category_task); 
  return newTache;
  
}

class Tache{

  constructor(name, date, category){

    this.name = name;
    this.date = date;
    this.category = category;
  }
}

var myTasks = new Array;

function pushTache(Tache){
  myTasks.push(Tache);
}