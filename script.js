const display = document.getElementsByClassName("display")[0];
const buttons = document.querySelectorAll(".btt");
const clear = document.querySelector("clear")
const functionKey = document.querySelectorAll("funk")



buttons.forEach((btt) => {
    btt.addEventListener('click', () => {
        const paragraph = document.createElement('p');

        if (btt.value !== 'clear' && btt.value !== 'result') {

            
            paragraph.innerText = `${btt.value}`
            display.appendChild(paragraph)
        }
        
        if (btt.value === 'clear') {
            while(display.firstChild) {
                display.removeChild(display.firstChild)
            }
        }

        if (btt.value === 'result') {
            let result = '';
            for (let i = 0; i < display.childNodes.length; i++) {
                result += display.childNodes[i].textContent;
            }
        
            const numbers = result.split(' ');
            const operatorKey = numbers[1];
        
            if (/^[+\-*/]$/.test(operatorKey)) {
                const firstChild = parseFloat(numbers[0]);
                const lastChild = parseFloat(numbers[2]);
        
                const displayResults = () => {
                    if (operatorKey === '+') {
                        const sum = firstChild + lastChild;
                        console.log(sum);
                    } else if (operatorKey === '-') {
                        const diff = firstChild - lastChild;
                        console.log(diff);
                    } else if (operatorKey === '*') {
                        const multip = firstChild * lastChild;
                        console.log(multip);
                    } else if (operatorKey === '/') {
                        const diff = firstChild / lastChild;
                        console.log(diff);
                    }

                };
                displayResults()
            }
            
        }
            });
        
        });
    
        
    


    /*
    const firstChild = display.firstChild;
    const lastChild = display.lastChild;

    const firstChildValue = parseFloat(firstChild.textContent);
    const lastChildValue = parseFloat(lastChild.textContent);
*/   

