    //    const profile = {
    //        name: "shradhakhapra",
    //        numberofPost : 186 ,
    //        followers : 569000,
    //      isFollow : true,
    //  }
    //  console.log(typeof profile["followers"]);
    //   Arithmetic Operator

    //   let a = 5;
    //   let b = 2;

    //   console.log("a =", a,"& b =", b);
    //   console.log("a + 1 =", a+1,"& b + 1 =", b+1);
    //   console.log("a - 1 =", a-1,"& b - 1 =", b-1);
    //   console.log("a*2 =", a*2,"& b*2 =", b*2);
    //   console.log("a/2 =", a/2,"& b/2 =", b/2);
    //   console.log("a++ =", a++,"& b++ =", b++); First print and then change
    //   a = 5;
    //   console.log("a-- =", a--,"& b-- =", b--); First print and then change
    //    console.log("a =", a,"& b =", b);
    //   a = 5;
    //   a++;
    //   console.log("a++ =", a); But there change first
    //   a = 5;
    //   a--;
    //   console.log("a-- =", a); But there change first
    //   a = 5;
    //   ++a;
    //   console.log("++a =", a); But there change first
    //   a = 5;
    //   --a;
    //   console.log("--a =", a); But there change first

    //   Arithmetic Operator

    //   a = 5;

    //   a += 4; a = a + 4
    //   console.log("a =", a);
    //   a = 5;

    //  a -= 4; a = a - 4
    //  console.log("a =", a);
    //   a = 5;
    //   a *= 4; a = a % 4
    //   console.log("a =", a);
    //   a = 5;
    //   a %= 4; a = a % 4
    //   console.log("a =", a);
    //   a = 5;
    //   a **= 4; a = a **4
    //   console.log("a =", a);

    //  Comparison Operator 

    //  let a = 5;
    //  let b = "5";
    //  console.log("a==b", a==b);
    //  a = 5;
    //  b = 2;
    //  console.log("a!=b", a != b);
    //  a = 5;
    //  a = "5";
    //  console.log("a===b", a===b);
    //  a = 5;
    //  b = "5";
    //  console.log("a!==b" ,a==b);
    //  a = 5;
    //  b = 2;
    //  console.log("a < b", a<b);
    //  a = 5;
    //  b = 2;
    //  console.log("a > b", a>b);
    //  a = 5;
    //  b = 5;
    //  console.log("a <= b", a <= b);

    // Logical Operator

    //  let a = 5;
    //  let b = 2;
    //  console.log("5 === 2 && 5 > 2", a === b && a>b); Logical And
    //  console.log("5 === 2 || 5 > 2", a === b || a>b); Logical OR
    //  console.log("5 !(===) 2 ", !(a === b)); Logical And

    // If statement 
    // let mode = white;
    // console.log()

    // infinitive loop
    //  for (let i = 1; i >= 0; i++) {
    //      console.log("i =", i);
    //  }

    // ternary operator
    // let age = 16;
    // let Age = age >= 18 ? "Adult" : "Not Adult";
    // console.log("You are", Age); // "Beer"

    // else-if statement 
    // let mode = "white"; // Make sure to enclose the string value in double quotes
    // let color;
    
    // if (mode === "white") {
    //     color = "white"; 
    // } else if (mode === "dark") {
    //     color = "dark";
    // } else {
    //     color = "blue";
    // }
    // console.log("The color is",color);
    
    // While Loop 
    // let i = 1;
    // while (i <=5) {
    //     console.log("i =", i);
    //     i++
    // }

    // Do-while loop
    // let i = 0;
    // do {
    // i = i + 1;
    // } while (i <= 5);
    // console.log("i =",i);

    // for of loop
    // let string = "Apna College" 
    // for (let value of string) {
    //     console.log('string', string);
    // }
    
    // for in loop 
    // let student = {
    //     name : "Arfat Ahmed",
    //     age : 18,
    //     cgpa : 7.5,
    //     ispass : true ,
    // };
    // for (let key in student) {
    //     console.log('key=', key, "Value =", student[key]);
        
    // }

    // practice1
    // let value = 25;
    // let useNum = prompt("Enter the correct number")
    // while (useNum != value) {
    //     useNum = prompt("You entered the wrong number. Try again :") 
    // }
    // if (useNum == value) {
    //     alert('Congratulation, You are a great fool :)'); 
    // }

    // Stirng in  js 
    //  let str ="Arafat"
    //  console.log("str.length",str.length); // string length
    //  console.log("str[3]",str[3]); // string indices

    //templete Literals
    //  let name = `Arfat Ahmed`
    //  console.log('Name :',name);
    //  console.log('Typeof Name :',typeof name);

    //string interpolation 
    // const obj = {
    //     item: `pen`,
    //     cost : 20,
    // };
    //  console.log(`The cost of ${obj.item} is ${obj.cost} Taka`);
    //escape character
    // console.log('Arafat \nAhmed'); //line break
    
    // string method 
    // let str = `    arafat ahemd   `;
    // str = str.toUpperCase(); 
    // console.log('Name =', str);//UpperCase

    // str = str.toLowerCase(); 
    // console.log('Name =', str);//LowerCase
 
    // console.log('Name =', str.trim());//erase first and last space
    
    // str = `01234567` 
    // console.log(str.slice(1,6));//string any part cut
    
    // let str1 = `arafat`;
    // let str2 = `ahmed`;

    // let add = str1.concat(str2);
    // console.log('add', add); // 2 string add (str1 + str2)

// let str = `ArafatAhmed`;
//     console.log(str.replaceAll("a","A")); // replace character

    // let str = `I love you`;
    // console.log('search character', str.charAt(2));//search any character


    //exercise 2 

    // // Get user's full name
    // const fullName = prompt("Enter your Fullname: ");

    // // Remove spaces inside the full name
    // const fullNameWithoutSpaces = fullName.replace(/\s+/g, "");

    // // Calculate the length of the name
    // const nameLength = fullNameWithoutSpaces.length;

    // // Create the username
    // const username = "@" + fullNameWithoutSpaces + fullName.length;

    // // Print the username
    // alert(`Your username is ${username}`);


    //Arrays in js
    //create arrays 
    // let marks = [97, 89, 34, 64];//similer item store

    //array indices
    // console.log(marks[2]=85); //change any items

    //looping over 
    // for (let index = 0; index < marks.length; index++) {
    //     console.log("i =", marks[index]);   // for loop
    // }
    // for (const mark of marks) {
    //     console.log('mark is',mark);//for of loop
    //}

    // practice 1 
    //method 1
    // let marks = [85, 97, 44, 37, 76, 60]
    // let average = (85+ 97+44+ 37+ 76+ 60)/marks.length;
    // console.log('average =', average);
    //method 2
    // let marks = [85, 97, 44, 37, 76, 60]
    // let sum = 0;
    // for (let val of marks) {
    //     sum += val;        
    // }
    // let avr = sum / marks.length;
    // console.log(`average value is = ${avr}`);

    //practice 2
    //method 1
    let prizes = [250, 645, 300, 900, 50]
    for (let value of prizes) {
        console.log(value-(value/10));   
    }
    //method 2
    // let prizes = [250, 645, 300, 900, 50]
    
    