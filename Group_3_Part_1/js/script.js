var newCommandForm = document.forms.newTaskF; 

function debut_fin_tache(){
  var d = new Date();
  var date;

  let  dd 		= String(d.getDate()).padStart(2, '0');
	let  mm 		= String(d.getMonth() + 1).padStart(2, '0'); //janvier = 0
	let  yyyy 		= d.getFullYear();
  let hours = d.getHours();
  let sec = d.getSeconds();
  let minu = d.getMinutes();

  if (hours < 10){
      let new_hours = "0";
      new_hours += hours;
      hours = new_hours
  }
  if (minu<10){
    let new_minutes = "0";
    new_minutes += minu;
    minu = new_minutes;
  }
  if (sec <10){
    let new_second = "0";
    new_second += sec;
    sec = new_second;
  }

  date = dd+"/"+mm+"/"+yyyy+" at "+hours+":"+minu+":"+sec;
  return date;
}

function incrementerDuree() {

   let durees = document.getElementsByClassName("duree")
   console.log(durees)


   if (durees.length != 0) {
      
   Array.prototype.forEach.call(durees,
  function(dureeElement) {

   let valeur = parseInt(dureeElement.textContent)
   dureeElement.textContent = valeur + 1
   });

  }
}

let interval_go; 




function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    const dateAddTd = document.createElement('td')
    const dureeTd = document.createElement('td')
    const termineTd = document.createElement("td")
    const buttonStopTd = document.createElement('td')


    const buttonStop = document.createElement("button");
    buttonStop.innerText = "Stop"


    
    dureeTd.classList.add("duree")
    dureeTd.textContent = setTimeout("incrementerDuree()",1000);
    dureeTd.textContent = "0"

    if (!interval_go){
      interval_go = setInterval("incrementerDuree()",1000);
    }
      


    

    


    buttonStop.addEventListener("click",function(){
      buttonStop.innerText= "Stopped"; 
      buttonStop.disabled = true;
      dureeTd.classList.remove("duree")
      termineTd.textContent = debut_fin_tache()

      } )

    buttonStopTd.appendChild(buttonStop)



    
    

    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    dateAddTd.textContent = debut_fin_tache();
  

    
    
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
    newItem.append(taskTd, dateTd, categorieTd, dateAddTd, dureeTd, termineTd,buttonStopTd)

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


