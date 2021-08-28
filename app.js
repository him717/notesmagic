console.log("This is working! Its an Note Making app");
shownotes();

//Adding notes to local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let txtArea = document.getElementById("txtArea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: txtArea.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txtArea.value = "";
    addTitle.value = "";
    console.log(notesObj);
    shownotes();
})

//showing entered notes on screen
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class ="noteCard my-2 mx-2 card" style = "width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onclick = "deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesln = document.getElementById('notes');
    if(notesObj.length !=0){
        notesln.innerHTML = html;
    }
    else{
        notesln.innerHTML = `No notes available. Try "Add Note" above to create a note!`;
    }
}


//deleting notes
function deletenote(index){
    console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
