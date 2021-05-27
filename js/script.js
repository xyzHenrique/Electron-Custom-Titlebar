const { BrowserWindow }  = require("electron").remote

function init() {
    // close 
    document.getElementById("titlebar-btn-close").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        window.close();
    });

    // maximize
    document.getElementById("titlebar-btn-maximize").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        if(window.isMaximized()){
            window.unmaximize();
        }
        else{
            window.maximize();
        }
    });

    // minimize
    document.getElementById("titlebar-btn-minimize").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        window.minimize();
    });
};

document.onreadystatechange =  () => {
    if (document.readyState == "complete") {
        init();
    }
};
