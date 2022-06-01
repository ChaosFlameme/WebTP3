var newCommandForm = document.forms.newTaskF;

function load() {
    var jsData=JSON.parse(data)
    alert(jsData[0].data)
}

function loadJSON(callback){
    var xobj=new XMLHttpRequest();
    xobj.overrideMimeType("application/json")
    xobj.open('GET','../js/Tasks.json',true)
    xobj.onreadystatechange=function(){
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);
            
        }
    }
    xobj.send(null)

}

function ajouter() {
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

    if (taskTd.textContent == "BOT_RUN") {
        activate_bot();
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
    const tbody = document.querySelector('.datatable tbody')
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

}
