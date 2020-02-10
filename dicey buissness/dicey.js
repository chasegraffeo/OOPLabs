document.addEventListener(`DOMContentLoaded`, function () {
        let btn2 = document.getElementById(`generate`);

        let box = `box`;
        let sum = document.getElementById(`sum`);
        let roll = document.getElementById(`roll`);
        btn2.addEventListener(`click`, function () {
                let div = document.createElement(`div`);
                let dtxt = document.createTextNode(Math.floor((Math.random() * 7) + 1));
                div.appendChild(dtxt);
                document.body.appendChild(div);
                div.className = `square`;
                div.id = box;
                div.addEventListener(`click`, function () {
                        div.remove()
                });
        });

        sum.addEventListener(`click`, function () {
                let diceArr = document.querySelectorAll(`.square`);
                let sum = 0;
                diceArr.forEach(die => {
                        sum = sum + parseInt(die.innerText);
                });
                alert(sum);
        });

        roll.addEventListener(`click`, function () {
                let diceArr = document.querySelectorAll(`.square`);
                diceArr.forEach(die => {
                        die.innerText = Math.floor((Math.random() * 7) + 1);
                })
        });
});