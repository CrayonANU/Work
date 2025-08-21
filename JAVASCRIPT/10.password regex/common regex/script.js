// coomon regex
const strongPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,64}$/;
// use: strongPw.test(password)
