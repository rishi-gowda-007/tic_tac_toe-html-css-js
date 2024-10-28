let boxes = document.querySelectorAll(".box");
let sb=document.getElementById("sb");
let prev="x";
sb.addEventListener("click",()=>{
    let ss=document.getElementById("option");
    prev=ss.value;
});

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = prev;
            checkwinner();
            prev = (prev === "x" ? "o" : "x");
        }
    });
});
let ng=document.querySelector("#ng");
ng.addEventListener("click",()=>{
    location.reload();
});
const checkwinner = () => {
    let x = 0;
    let boxesArr = Array.from(boxes);
    if (
        (boxesArr[0].innerText === boxesArr[1].innerText && boxesArr[1].innerText === boxesArr[2].innerText && boxesArr[0].innerText !== '') ||
        (boxesArr[3].innerText === boxesArr[4].innerText && boxesArr[4].innerText === boxesArr[5].innerText && boxesArr[3].innerText !== '') ||
        (boxesArr[6].innerText === boxesArr[7].innerText && boxesArr[7].innerText === boxesArr[8].innerText && boxesArr[6].innerText !== '') ||
        (boxesArr[0].innerText === boxesArr[3].innerText && boxesArr[3].innerText === boxesArr[6].innerText && boxesArr[0].innerText !== '') ||
        (boxesArr[1].innerText === boxesArr[4].innerText && boxesArr[4].innerText === boxesArr[7].innerText && boxesArr[1].innerText !== '') ||
        (boxesArr[2].innerText === boxesArr[5].innerText && boxesArr[5].innerText === boxesArr[8].innerText && boxesArr[2].innerText !== '') ||
        (boxesArr[0].innerText === boxesArr[4].innerText && boxesArr[4].innerText === boxesArr[8].innerText && boxesArr[0].innerText !== '') ||
        (boxesArr[2].innerText === boxesArr[4].innerText && boxesArr[4].innerText === boxesArr[6].innerText && boxesArr[2].innerText !== '')
    ) {
        x = 1;
    }

    if (x === 1) {
        let result = document.querySelector("#result");
        result.innerText = `${prev} won the game`;
    }
};



