function People(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

People.prototype.sayHello = function() {
    console.log("大家好，我的名字叫" + this.name + "，我今年" + this.age +"岁,我是" + this.gender + "的 ");
}

module.exports = People;