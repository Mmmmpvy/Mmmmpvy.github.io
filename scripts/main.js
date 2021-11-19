var data = $.csv.toObjects('rate_data.csv');

console.log('welcome');
console.log(data);
const para = document.querySelectorAll('.original');

let selected=-1;

for (var i = 0; i < para.length; ++i) {
    para[i].addEventListener('click', updateName); 
    para[i].addEventListener('dblclick',resetBack);
}




let count =0;
const button =document.querySelector('button');
const tianlao_label=document.querySelector('label');
button.addEventListener('click',updateCount);

function updateCount(){
    //tianlao_label.textContent = data;

    tianlao_label.textContent = '天牢外武将 数：'+count;
}

function updateName() {
    if (this.className !=='selected'){
        count++;
        this.className= 'selected';
    }
    updateCount();
}

function resetBack(){
    this.className='original';
    count--;
    updateCount();
}