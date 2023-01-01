const input = document.querySelector('.input input');
const items = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');

input.addEventListener('input', ()=>{
    let val = input.value.trim();

    if(val != ''){
        items.forEach(el=>{
            if(el.textContent.search(val) == -1){
                el.classList.add('hide');
                el.innerHTML = el.innerText;
            }else{
                el.classList.remove('hide');
                let text = makeBacklite(el.textContent, el.textContent.search(val), val.length);
                el.innerHTML = text;
            }
            
        });
    }else{
        items.forEach(el=>{
            el.classList.remove('hide');
            el.innerHTML = el.innerText;
        });   
    }

});

function makeBacklite(str, pos, length){
    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos+length) + '</mark>' + str.slice(pos+length);
}
