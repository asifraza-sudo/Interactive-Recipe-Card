document.addEventListener('DOMContentLoaded', function () {
    const myShowStepsButton = document.querySelector('.my-show-steps-button');
    const myStepsList = document.querySelector('.my-steps-list');

    myShowStepsButton.addEventListener('click', function () {
        if (myStepsList.style.display === 'none' || myStepsList.style.display === '') {
            myStepsList.style.display = 'block';
            myShowStepsButton.textContent = 'Hide Steps';
        } else {
            myStepsList.style.display = 'none';
            myShowStepsButton.textContent = 'Show Steps';
        }
    });
});
