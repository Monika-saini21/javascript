//topics variables , datatypes and Operators


// **JavaScript is a programming language used to make web pages interactive.

//  **JavaScript has 3 ways to declare variables:

            // 1. var Function scoped,Can be redeclared ,Avoid using

            //  2.let  Block scoped ,Cannot be redeclared ,Value can change

            //    3.const Block scoped  ,Cannot be changed ,Good for fixed values
                        
            //Because it is function scoped and allows re-declaration, which may cause unexpected bugs. 
            // let and const are safer and block scoped.

//   **datatypes

                    // JavaScript has 7 Primitive and 1 Non-Primitive datatypes.
                    // primitives (immutable)
                    //1. number 
                    //2.strings
                    //3.boolean
                    //4.undefined
                    //5.null
                    //6.bigint
                    //7.Symbol

                    //non-primitives(mutable)
                    //1.objects(store key-value in pair)
                    //  let person = {
                    //     "name":"Monika",
                    //     "age":22

                    //  };
                    
                    //Array(special type of Object)
                    // let fruits = ["mango","grapes"];

                    //Function (also object)
                    // function sayhelio(){
                    //     console.log("hello");
                    // }
                    // sayhelio();


 //**Operators */   
                //1.Arithmetic Operators
                // | Operator | Meaning             | Example  | Output    |
                // | -------- | ------------------- | -------- | --------- |
                // | `+`      | Addition            | `5 + 3`  | 8         |
                // | `-`      | Subtraction         | `5 - 3`  | 2         |
                // | `*`      | Multiplication      | `5 * 3`  | 15        |
                // | `/`      | Division            | `6 / 3`  | 2         |
                // | `%`      | Modulus (Remainder) | `5 % 2`  | 1         |
                // | `**`     | Exponent (Power)    | `2 ** 3` | 8         |
                // | `++`     | Increment           | `a++`    | a = a + 1 |
                // | `--`     | Decrement           | `a--`    | a = a - 1 |
                //## 2. Assignment Operators
                // | Operator | Meaning           | Example                |
                // | -------- | ----------------- | ---------------------- |
                // | `=`      | Assign            | `x = 10`               |
                // | `+=`     | Add & assign      | `x += 5` → `x = x + 5` |
                // | `-=`     | Subtract & assign | `x -= 5`               |
                // | `*=`     | Multiply & assign | `x *= 5`               |
                // | `/=`     | Divide & assign   | `x /= 5`               |
                // | `%=`     | Modulus & assign  | `x %= 5`               |
                //## 3. Comparison Operators
                // | Operator | Meaning          | Example     | Result |
                // | -------- | ---------------- | ----------- | ------ |
                // | `==`     | Equal (loose)    | `5 == "5"`  | true   |
                // | `===`    | Strict equal     | `5 === "5"` | false  |
                // | `!=`     | Not equal        | `5 != 3`    | true   |
                // | `!==`    | Strict not equal | `5 !== "5"` | true   |
                // | `>`      | Greater than     | `10 > 5`    | true   |
                // | `<`      | Less than        | `5 < 10`    | true   |
                // | `>=`     | Greater or equal | `10 >= 10`  | true   |
                // | `<=`     | Less or equal    | `5 <= 5`    | true   |
                //4. Logical Operators
                //&&(and),!(not)
                //5. String Operators
                // "hello"+"world"
                //6. Ternary Operator(Used for short if-else.)
                //let result = age >= 18 ? "Adult" : "Minor";
                //7. Type Operators(Gives the type of a value.)
                //typeof "hello"   // "string"
                //typeof 5         // "number"

