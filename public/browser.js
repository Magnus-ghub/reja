console.log("FrontEnd JS ishga tushti");

function itemTemplate(item) {
    return `<li 
             class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
             >
             <span class="item-text">${item.reja}</span>
             <div>
                <button 
                 data-id="${item._id}"
                 class="edit-me btn btn-secondary btn-sm mr-1">
                    O'zgartirish
                </button>
                <button 
                 data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm">O'chirish</button>
             </div>
            </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
        e.preventDefault();

        axios
            .post("/create-item", { reja: createField.value })
            .then((response) => {
                document
                    .getElementById("item-list")
                    .insertAdjacentHTML("beforeEnd", itemTemplate(response.data));
                createField.value = "";
                createField.focus();    
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
});

document.addEventListener("click", function (e) {
    // delete oper
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
           axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }      
    }

    // edit oper
    if(e.target.classList.contains("edit-me")) {
       let userInput = prompt(
        "O'zgartirish kiriting", 
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
       console.log("FromtEnd => BackEndga Rest API jo'natadi");
       axios
       .post("/edit-item", {
        id: e.target.getAttribute("data-id"),
        new_input: userInput,
     }) 
     .then(response => {
        
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector(
            ".item-text"
        ).innerHTML = userInput;
     })
     .catch(err => {
        console.log("Iltimos qaytadan harakat qiling!");
     });
    }
    }
});

document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true}).then(response => {
        alert(response.data.state);
        document.location.reload();
    });
});