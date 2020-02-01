function foo() {
    this.a = 99;
}

function foo2(m , n) {
    this.a = m + n;
}

caoxue = {
    a : 1,
    b : 2
}

victor = {
    a : 3,
    b : 4
}

foo.call(caoxue);
console.log(caoxue.a);

foo2.call(victor, 11,11);
console.log(victor.a);