var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
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
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}


function loadTasks(tasks) {


  var myarray = tasks.map(obj => {
    var rObj = {};
    rObj["task"] = obj.task,
    rObj["date"] = obj.date, 
    rObj["category"] = obj.category;
    return rObj;
  })
  console.log(myarray)

  var col = [];
  for (var i = 0; i < myarray.length; i++) {
      for (var key in myarray[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.<
  for (var i = 0; i < myarray.length; i++) {
    let newItem = document.createElement('tr')
    let taskTd = document.createElement('td')
    let dateTd = document.createElement('td')
    let categorieTd = document.createElement('td')

      console.log(myarray[i]["task"])
      taskTd.textContent = myarray[i]["task"]
      dateTd.textContent = myarray[i]["date"]
      categorieTd.textContent = myarray[i]["category"]
      newItem.append(taskTd,dateTd,categorieTd);
      console.log(newItem)
      
      const table = document.querySelector('.datatable tbody');
      table.appendChild(newItem)
    }
    
      
}


function retrieveTasks(){

  let rows = document.querySelector("tbody");
  var jsonContent = new Array();

  for (let i = 0; i< rows.children.length;i++){
      let row = rows.children[i]
      let task = row.children[0].innerHTML
      let date = row.children[1].innerHTML
      let category = row.children[2].innerHTML
      jsonContent.push({"task":task, "date":date, "category":category});
  }  
  jsonContent = JSON.stringify(jsonContent)
  console.log(jsonContent)
}

function readJSON(){
  fetch("../Tasks.json")
  .then(Response=>Response.json())
  .then(data=>{
      console.log(data)
  })
}

function createTask(jsData){
  //Initialize elements
  const newItem = document.createElement('tr')
  const numberTd=document.createElement('td')
  const taskTitleTd = document.createElement('td')
  const statusTd = document.createElement('td')
  numberTd.textContent=jsData["id"]
  taskTitleTd.textContent=jsData["title"]
  statusTd.textContent=jsData["completed"]
  console.log(statusTd.innerHTML)

  newItem.append(numberTd,taskTitleTd,statusTd)
  if(statusTd.innerHTML=="true"){
      newItem.style.backgroundColor="green"
  }

  /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
  const table = document.querySelector('.datatable tbody')
  console.log(table)
  table.appendChild(newItem)
}
