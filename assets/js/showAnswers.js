let questionsList = document.querySelectorAll('.questions-list-item');

questionsList.forEach((questionsListItem) => {
    let question = questionsListItem.querySelector('.question');
    let answer = questionsListItem.querySelector('.answer');

    question.addEventListener('click', () => {
        if (answer.classList.contains('active-question')) {
            answer.classList.remove('active-question');
        } else {
            answer.classList.add('active-question');
        }
    });
});
