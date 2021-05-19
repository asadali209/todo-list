const inputText = document.querySelector('.list-input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('.list-items');

addBtn.addEventListener('click', ()=>{

  if(!(inputText.value === '')){
    let li = document.createElement('li');
    // li.innerHTML = '<p>'+ inputText.value +'</p> <span><i class="bx bxs-x-square"></i></span>';
    let p = document.createElement('p');
    const dltBtn = document.createElement('span');
    let i = document.createElement('i');
    i.classList.add('bx','bxs-x-square');
    
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(dltBtn);
    dltBtn.appendChild(i);
    p.innerText = inputText.value;

    dltBtn.addEventListener('click', ()=>{
      ul.removeChild(li);
    });
  }

  inputText.value = '';
  
});
