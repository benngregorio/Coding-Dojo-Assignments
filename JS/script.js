var count = 3;
var countLikes = document.querySelector("#likecount");

function add1() {
    count++;
    countLikes.innerText = count + " like(s)";
    console.log(count);
}