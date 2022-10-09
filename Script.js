

document.getElementById("Add").onclick = () =>{


    const Data = document.getElementById("Data").value
    
    const ListElements = document.createElement("input")

    ListElements.classList.add("Text")
    ListElements.type = "text"
    ListElements.value = Data
    ListElements.setAttribute("readonly", "readonly")  

    const Div = document.createElement("div")
  
    const Deletebtn = document.createElement("button")
    Deletebtn.innerHTML = "Delete"

    const Editbtn = document.createElement("button")
    Editbtn.innerText = "Edit"



    if(!Data){


        alert(" PLEASE ENTER SOME DATA ")

    }

    else{

       
        Div.appendChild(ListElements)
        Div.appendChild(Editbtn)
        Div.appendChild(Deletebtn)
        List.appendChild(Div)
        

    }
  


    Deletebtn.addEventListener("click", () =>{

        Div.removeChild(ListElements);
        Div.removeChild(Deletebtn);
        Div.removeChild(Editbtn);


    })

   
    Editbtn.addEventListener("click", () => {

       
        if(Editbtn.innerText.toLowerCase() == "edit"){

            ListElements.removeAttribute("readonly")
            ListElements.focus()
            Editbtn.innerText = "Save"

        }
        else{

            Editbtn.setAttribute("readonly", "readonly")
            Editbtn.innerText = "Edit"



        }
        

    })


 



}