let questions = document.querySelectorAll('.question');     //get all of the questions and that will give an array with all of the questions 
questions.forEach(question => {     //I want to loop through them all and set a click event for every single question 
    question.addEventListener('click', () => {     //create a click event for each element each question that I have
        //and now I can tell it what to do when someone clicks on that
        let answer = question.nextElementSibling;     //get the next item after the question which whould be the answer

        if (answer.style.maxHeight) {    //I want to check the current value of the max-height because max-height indicates whether it is open or closed
            answer.style.maxHeight = null;      //if max-height is zero/null it means it's closed otherwise it's open
        } else {
            document.querySelectorAll('.answer').forEach(answer => {
                answer.style.maxHeight = null;
            });     //I want to close the other answers when I click on one of the questions
            answer.style.maxHeight = answer.scrollHeight + 'px';    //I want to get the entire height of the answer and assign it to the maxHeight
        }
    });
})