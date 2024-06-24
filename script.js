const display = document.getElementsByClassName("display")[0];
const btt = document.querySelectorAll("button");




btt.forEach((button) => {
    button.addEventListener('click', () => {
        const paragraph = document.createElement('p');
        paragraph.innerText = `${button.value}`
        display.appendChild(paragraph)
    });
    /*
    const firstChild = display.firstChild;
    const lastChild = display.lastChild;

    const firstChildValue = parseFloat(firstChild.textContent);
    const lastChildValue = parseFloat(lastChild.textContent);
*/

    

});
