
document.addEventListener(`DOMContentLoaded`, function () {
        let btn2 = document.getElementById(`generate`);

        let box = `box`;
        let sum = document.getElementById(`sum`);
        btn2.addEventListener(`click`, function () {
                let div = document.createElement(`div`);
                let dtxt =document.createTextNode(Math.floor((Math.random() * 6) + 1));
                div.appendChild(dtxt);
                document.body.appendChild(div);
                div.className = `square`;
                div.id = box;
               // document.getElementById(`box`).innerText = Math.floor((Math.random() * 6) + 1);
                sum.addEventListener(`click`, function(){
                        console.log(+dtxt + +dtxt)
                });
        });

});









