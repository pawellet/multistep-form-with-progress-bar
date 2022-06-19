//wszystkie strony formularza
const formPages = [...document.querySelectorAll(".form-step")];
//elementy progressbara
const liElements = [...document.querySelectorAll(".progress-list li")];
const progressListHorizontalLine = document.querySelector(".progress-line");
const progressBar = document.querySelector('.progressbar-fill');
//message
const message = document.querySelector(".message");

//widoczna strona formularza
let activeFormPage = 0; 
//progress
let progress = 25;
const change = 25;
 //niewypełnione inputy
 let emptyInputs = 0;
    


if(activeFormPage === 0){
    formPages[activeFormPage].classList.add("active");
    console.log(formPages[activeFormPage]);
    liElements[activeFormPage].classList.add("active");
    progressListHorizontalLine.style.width = `${progress}%`;
    progressBar.style.width = `${progress}%`
}



    //buttony
    const nextButton = document.querySelectorAll('input[name="next"]')
    const previousButton = document.querySelectorAll('input[name="previous"]');
    const submitButton = document.querySelector('input[name="submit"]');
   
    nextButton.forEach((button)=>{

        button.addEventListener('click', (e)=>{
            if(activeFormPage > formPages.length-1)return
           
            // inputIsEmptyCheck()

            formPages[activeFormPage].classList.remove("active");
            activeFormPage++;
            formPages[activeFormPage].classList.add("active");
            
               
                liElements[activeFormPage].classList.add("active");
                progressListHorizontalLine.style.width = `${progress+= change}%`;
                progressBar.style.width = `${progress}%`;
                
           
        })

    })
      

    
    previousButton.forEach((button)=>{
       
        button.addEventListener('click',(e)=>{
            if(activeFormPage === 0)return
           
            // inputIsEmptyCheck();

            formPages[activeFormPage].classList.remove("active");
            liElements[activeFormPage].classList.remove("active");
            activeFormPage--;
            formPages[activeFormPage].classList.add("active");
            progressListHorizontalLine.style.width = `${progress-= change}%`;
           progressBar.style.width = `${progress}%`;
        })
       
        
       
    })
       
    if(submitButton){
        
        submitButton.addEventListener('click',(e)=>{
            
            e.preventDefault()
            if(activeFormPage > formPages.length-1)return
           
            inputIsEmptyCheck();

            if(emptyInputs === 0){
                formPages[activeFormPage].classList.remove("active");
                activeFormPage++ ;
                formPages[activeFormPage].classList.add("active");
                liElements[activeFormPage].classList.add("active");
                progressListHorizontalLine.style.width = `${progress+= change}%`;
               progressBar.style.width = `${progress}%`;

            }else if(emptyInputs>0){
                
                message.style.width = "100%";
                message.style.fontSize = "2.6rem";
                message.style.color = "red";
                message.innerText = `Nie wypełniłeś ${emptyInputs} pól formularza!!!`;  
                setTimeout(()=>{
                    message.innerText = "";
                },3000)
            }
          
        })
    
    }


const inputIsEmptyCheck = ()=>{
    emptyInputs = 0;

    [...document.querySelectorAll('input')].forEach((input)=>{
        if(!input.value){
        emptyInputs++;
        }
    });

    
}


