(() => {
    console.log("AIE.JS is under the MIT License, see here: https://github.com/Nilonic/AIE-JS/blob/main/LICENSE");
    console.log("You are running the non-minified version of AIE.JS, this message dissappears when running the minified version");
    console.log("Any issues with AIE.JS, report them here: https://github.com/Nilonic/AIE-JS/issues");
    let shouldBlockkeydown = false;
    let shouldBlockRightClick = false;
    document.addEventListener("DOMContentLoaded", () => {
        try {
            let ev = document.getElementById("AISE-CONFIG");
            try {

                if (ev.getAttribute("kd") == "1") {
                    shouldBlockkeydown = true
                } else {
                    shouldBlockkeydown = false;
                }
            } catch {
                shouldBlockkeydown = true;
            }
            try {
                if (ev.getAttribute("rc") == "1") {
                    shouldBlockRightClick = true;
                } else {
                    shouldBlockRightClick = false;
                }
            } catch {
                shouldBlockRightClick = false;
            }
            document.getElementById("AISE-CONFIG").remove();
        } catch {

        }
        (() => {
            document.addEventListener("keydown", (ev) => { // keydown
                if (shouldBlockkeydown) {
                    if (ev.ctrlKey && ev.shiftKey && ev.key === "\x49") {
                        ev.preventDefault();
                    }
                    if (ev.code === "F12") {
                        ev.preventDefault();
                    } else {}
                }
            });
        })();
        (() => {
            document.addEventListener("contextmenu", (ev) => { // context menu
                if (shouldBlockRightClick) {
                    ev.preventDefault();
                }
            })
        })()

    })
})()