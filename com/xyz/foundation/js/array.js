var arr = ['b', 'a', 'c'];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
function printValue() {
    console.log(arr.valueOf());// valueOf 返回3 ['b','a','c']
}

// 从第三个位置开始删除数组后的两个元素：
function deleteElementV1() {
    fruits.splice(2,2);
    console.log(fruits);
}

// 删除下表为1的元素
function deleteElementV2() {
    fruits.splice(1,1);
    console.log(fruits);
}

// 排序，按照字符编码 返回 [a,b,c]
function sort() {
    console.log(arr.sort());
}

//倒序方法  返回 [c,a,b]
function reverse() {
    console.log(arr.reverse());
}

// 插入
function insert() {
    arr.splice(1, 0, 'newitem');
    console.log(arr);
}

// 替换
function replace() {
    arr.splice(1, 1, 'olditem');
    console.log(arr);
}

//头部添加‘haha’ 返回长度 5
function headAdd() {
    console.log(arr.unshift('haha'));
    console.log(arr);
}

//尾部添加‘heihei’返回长度4
function tailAdd() {
    console.log(arr.push('heihei'));
    console.log(arr);
}

//头部删除  返回b
function headDelete() {
    console.log(arr.shift());
    console.log(arr);
}

//尾部删除  返回c
function tailDelete() {
    console.log(arr.pop());
    console.log(arr);
}

// 数组合并  返回['b', 'a', 'c', 1, 2, 3, 4]
function arrayMerge() {
    var arr1 = [1, 2, 3, 4];
    console.log(arr.concat(arr1));
    console.log(arr);
}

//数组截取 返回[ 'a' ]
function arrayIntercept() {
    console.log(arr.slice(1, 2));
    console.log(arr);
}

//返回 数组的指定位置的元素
function indexElement() {
    console.log(arr[0]);
}
// printValue();
// deleteElementV1();
// deleteElementV2();
// sort();
// reverse();
// insert();
// replace();
// headAdd();
// tailAdd();
// headDelete();
// tailDelete();
// arrayMerge();
arrayIntercept();