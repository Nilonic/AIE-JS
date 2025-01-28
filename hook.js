(() => {
    console.log("AIE.JS is under the MIT License, see here: https://github.com/Nilonic/AIE-JS/blob/main/LICENSE");
    console.log("You are running the non-minified version of AIE.JS, this message dissappears when running the minified version");
    console.log("Any issues with AIE.JS, report them here: https://github.com/Nilonic/AIE-JS/issues");
    let shouldBlockkeydown = false;
    let shouldBlockRightClick = false;
    document.addEventListener("\x44\x4F\x4D\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x6F\x61\x64\x65\x64", () => {
        try {
            let ev = document.getElementById("\x41\x49\x53\x45\x2D\x43\x4F\x4E\x46\x49\x47");
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
            document.getElementById("\x41\x49\x53\x45\x2D\x43\x4F\x4E\x46\x49\x47").remove();
        } catch {

        }
        (() => {
            document.addEventListener("\x6B\x65\x79\x64\x6F\x77\x6E", (ev) => { // keydown
                if (shouldBlockkeydown) {
                    if (ev.ctrlKey && ev.shiftKey && ev.key === "\x49") {
                        ev.preventDefault();
                    }
                    if (ev.code === "\x46\x31\x32") {
                        ev.preventDefault();
                    } else {}
                }
            });
        })();
        (() => {
            document.addEventListener("\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", (ev) => { // context menu
                if (shouldBlockRightClick) {
                    ev.preventDefault();
                }
            })
        })()

    })
})()