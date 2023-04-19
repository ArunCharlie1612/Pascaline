(function(){
    let display = document.querySelector('.display');
    let but = document.querySelectorAll('.but');
    let Clear = document.querySelector('.Clear');
    let Equal = document.querySelector('.Equal');
    let Delete = document.querySelector('.Delete');
    let heading = document.querySelector('.heading');
    let cal = document.querySelector('.cal');

    but.forEach(function(but){
        but.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            display.value += value;
        })
    })
    Equal.addEventListener('click',function(e){
        if(display.value === ""){
            display.value = "";
        }
        else{
            let ans = eval(display.value);
            display.value = ans;
        }
    })
    Clear.addEventListener('click',function(e){
        display.value = "";
    });
    Delete.addEventListener('click',function(e){
        display.value = display.value.slice(0,-1);
    });
    if(display.value === "infinity" || display.value === "NaN"){
        display.value = "0";
    }
    


})();