const wrapper = document.querySelector(".wrapper-internet"),
    toast = wrapper.querySelector(".toast"),
    title = toast.querySelector("span"),
    subTitle = toast.querySelector("p"),
    wifiIcon = toast.querySelector(".icon-internet"),
    closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.status < 300) {
                toast.classList.remove("offline");
                title.innerText = "You're online now :)";
                subTitle.innerText = "Cheers! Internet is Connected.";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                closeIcon.onclick = () => {
                    wrapper.classList.add("hide");
                }
                setTimeout(() => {
                    wrapper.classList.add("hide");
                }, 800);
            } else {
                offline();
            }
        }
        xhr.onerror = () => {
            offline();
        }
        xhr.send();
    }

    function offline() {
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now :(";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }

    setInterval(() => {
        ajax();
    }, 100);
}