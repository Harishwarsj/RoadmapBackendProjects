
function displaySignup() {
    console.log("Displaying signup form");
    const form = document.getElementsByClassName('form');
    const signupForm = document.getElementsByClassName('signupForm');
    form[0].removeAttribute('hidden');
    const loginForm = document.getElementsByClassName('loginForm');
    loginForm[0].setAttribute('hidden', true);
    signupForm[0].removeAttribute('hidden');
};

function displayLogin() {
    console.log("Displaying login form");
    const form = document.getElementsByClassName('form');
    const loginForm = document.getElementsByClassName('loginForm');
    form[0].removeAttribute('hidden');
    const signupForm = document.getElementsByClassName('signupForm');
    signupForm[0].setAttribute('hidden', true);
    loginForm[0].removeAttribute('hidden');
};

const API = "http://127.0.0.1:3000/api";
const signUpButton = document.getElementById("signUpWithUser");
console.log("Sign Up Button:", signUpButton);
signUpButton.addEventListener("click", validateSignUp);

async function validateSignUp(event) {
    event.preventDefault();
    const nameInput = document.getElementById('newUsername');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('newPassword');
    try {
        const res = await fetch(`${API}/register`, {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        });
        const data = await res.json();
        localStorage.setItem("token", data.token);
        alert("Registered Successfully");
        window.location.href = "../Todopage/todo.html";
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
    }
};

const loginButton = document.getElementById("loginWithUser");
console.log("Login Button:", loginButton);
loginButton.addEventListener("click", validateLogin);

async function validateLogin(event) {
    event.preventDefault();
    const userInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    try {
        const res = await fetch(`${API}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: userInput.value,
                password: passwordInput.value
            })
        });
        const data = await res.json();
        if (res.status !== 200) {
            throw new Error(data.message || "Login failed");
        }
        else {
            localStorage.setItem("token", data.token);
            alert("Logged in Successfully");
            window.location.href = "../Todopage/todo.html";
        }
    } catch (error) {
        alert("Login failed. Please check your credentials and try again.");
    }
};
