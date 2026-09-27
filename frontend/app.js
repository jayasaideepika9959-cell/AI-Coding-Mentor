/* =====================================================
    CODECOACH AI
    NAME LOGIN
    ===================================================== */

/* =====================================================
   ELEMENTS
   ===================================================== */

const loginPage =
    document.getElementById("loginPage");

const mainApp =
    document.getElementById("mainApp");

const nameInput =
    document.getElementById("nameInput");

const nameLoginButton =
    document.getElementById("nameLoginButton");

const logoutButton =
    document.getElementById("logoutButton");

const welcomeUser =
    document.getElementById("welcomeUser");

const nameLoginMessage =
    document.getElementById("nameLoginMessage");

const codeEditor =
    document.getElementById("codeEditor");

const languageSelect =
    document.getElementById("languageSelect");

const analyzeButton =
    document.getElementById("analyzeButton");

const analysisResult =
    document.getElementById("analysisResult");


/* =====================================================
   SHOW MAIN APPLICATION
   ===================================================== */

function showMainApplication(userName) {

    loginPage.classList.add("hidden");

    mainApp.classList.remove("hidden");

    welcomeUser.textContent =
        `Welcome, ${userName}`;

}


/* =====================================================
   NAME LOGIN
   ===================================================== */

nameLoginButton.addEventListener(
    "click",
    function () {

        const name =
            nameInput.value.trim();

        if (!name) {

            nameLoginMessage.textContent =
                "Please enter your name to continue.";

            return;
        }

        nameLoginMessage.textContent = "";

        showMainApplication(name);

    }
);


/* =====================================================
   ENTER KEY FOR NAME LOGIN
   ===================================================== */

nameInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            nameLoginButton.click();

        }

    }
);


/* =====================================================
   LOGOUT
   ===================================================== */

logoutButton.addEventListener(
    "click",
    function () {

        mainApp.classList.add("hidden");

        loginPage.classList.remove("hidden");

        nameInput.value = "";

        welcomeUser.textContent = "";

        nameLoginMessage.textContent = "";

    }
);


/* =====================================================
   CODE ANALYSIS DEMO
   ===================================================== */

analyzeButton.addEventListener(
    "click",
    async function () {

        const code =
            codeEditor.value.trim();

        const language =
            languageSelect.value;


        if (!code) {

            analysisResult.innerHTML = `
                <h3>AI Mentor</h3>
                <p>Please paste some code first.</p>
            `;

            return;
        }


        /*
           For now this is only a basic local analysis.

           Your real AI coding analysis can be connected
           to the FastAPI backend later.
        */

        let message = "";


        if (language === "python") {

            if (
                code.includes("print(") &&
                !code.includes(")")
            ) {

                message =
                    "There may be a syntax problem near your print statement. Check whether every opening bracket has a matching closing bracket.";

            } else {

                message =
                    "Your code has been received. Try running it and carefully read the error message. Identify the line where the problem occurs before changing anything.";

            }

        } else {

            message =
                `Your ${language} code has been received. Run it, read the compiler/interpreter message, and identify the exact line causing the problem before attempting a fix.`;

        }


        analysisResult.innerHTML = `
            <h3>AI Mentor</h3>
            <p>${message}</p>
        `;

    }
);