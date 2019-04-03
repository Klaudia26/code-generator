const chars = 'ABCDEF184560';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 10;

const codesGenerator = () => {
    for ( let i = 0; i < codesNumber; i++){
        const div = document.createElement('div');
        let code = "";
        for( let i = 0; i < charsNumber; i++){
            const random = Math.floor((Math.random() *chars.length));
            code +=chars[random];
        }
        div.textContent = code;
        section.appendChild(div);
        
        
    }
}

btn.addEventListener('click', codesGenerator);