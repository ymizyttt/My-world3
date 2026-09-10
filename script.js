function openPage(pageName) {

    // 隱藏所有頁面
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    // 顯示選擇的頁面
    document.getElementById(pageName).classList.add("active");

    // 回到頁面最上方
    window.scrollTo(0, 0);
}


function goHome() {

    // 隱藏所有頁面
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    // 顯示首頁
    document.getElementById("home").classList.add("active");

    window.scrollTo(0, 0);
}

 var password = 1124;
 var input;
 var entry_count = 0;
 var entry_limit = 10;
 var out_of_limit = false;

    while (password!=input && !out_of_limit) {
        entry_count++;
        if(entry_count<=entry_limit){
            input=prompt("Hello(輸入1124)");
        }
        else{
            out_of_limit=true;
        }
    }

    if(out_of_limit){
        alert("要輸入大寫H小寫ellow啦");
    }
    else{
        alert("Wellcome to my world");
    }
