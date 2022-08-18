// Write a program that prints numbers from 100 to 200 into the console. If the number is a multiple of 3, print "Loopy", if it is a multiple of 4, print "Lighthouse", if it is a multiple of 3 and 4, print "LoopyLighthouse"

//loop from 100 to 200
  // let num = current loop step
  // if num % 3 === 0
    // print loopy
    //end if
  // else if num % 4 === 0
    // print lighthouse
    //end else if
  // else if num % 3 && num %4 == 0
    // print loopy lighthouse
    // end else if  
  // print num
//end loop 

const loopy = () => {
  for (let num = 180; num <= 200; num++) {
    let output = "";
    if (num % 3 === 0) {
      output += "Loopy";
    }
    if (num % 4 === 0) {
      output += "Lighthouse";
    }
    console.log(output === "" ? num : output);
  }
};

loopy();
