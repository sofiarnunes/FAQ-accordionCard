const question = document.getElementsByClassName('question');

let i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        this.classList.toggle("bold");
        const answer = this.nextElementSibling;
        const arrow = this.lastElementChild;

        if(answer.style.display === "block"){
            answer.style.display = "none";
            arrow.classList.remove("upside-down");

        } else {
            answer.style.display = "block";
            arrow.classList.add("upside-down");
        }
    })
    
}