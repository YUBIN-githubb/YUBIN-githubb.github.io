// script.js
const tryLogin = (email, password, success, fail, saveToken = true) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.id === email && user.password === password);

    if (user) {
        if (saveToken) {
            localStorage.setItem('TMDb-Key', user.password);
        }
        success(user);
    } else {
        fail();
    }
};

const tryRegister = (email, password, success, fail) => {
    try {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(existingUser => existingUser.id === email);

        if (userExists) {
            throw new Error('User already exists');
        }

        const newUser = { id: email, password: password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        success();
    } catch (err) {
        fail(err);
    }
};

// export { tryLogin, tryRegister };
//
// export function initializeKakao() {
//     const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY; // .env에서 가져옴
//     if (!window.Kakao.isInitialized()) {
//         window.Kakao.init(kakaoKey);
//         console.log("Kakao SDK initialized with key:", kakaoKey);
//     }
// }
//
// export function kakaoLogin() {
//     return new Promise((resolve, reject) => {
//         if (!window.Kakao.isInitialized()) {
//             reject("Kakao SDK not initialized");
//         }
//         window.Kakao.Auth.login({
//             success: function (authObj) {
//                 console.log(authObj);
//                 resolve(authObj);
//             },
//             fail: function (err) {
//                 console.error(err);
//                 reject(err);
//             },
//         });
//     });
// }

