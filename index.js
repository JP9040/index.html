function openNav(){
const nav=document.getElementById("sideNav");
if(nav.style.right === "0px") {
    nav.style.right="-250px";
} else {
    nav.style.right="0px";
}
}

document.addEventListener("click", function (e) {
    const nav = document.getElementById("sideNav");

    
    if (nav.style.right === "0px" && !nav.contains(e.target)) {
        nav.style.right = "-250px";
    }
});
