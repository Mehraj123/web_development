function getHistory() {
   return document.getElementById('history_value').innerText;
}

function getResult() {
    return document.getElementById('result_value').innerText;
}

function displayHistory(number) {
    return document.getElementById('history_value').innerText = number;
}

function displayResult(number) {
    const formattedResult =  formatResult(number);
    return document.getElementById('result_value').innerText = formattedResult;
}

function formatResult(number) {
    let num = Number(number);
   return num.toLocaleString("en");
}

function undoFormatResult(number) {
    return Number(number.replace(/,/g,''));
}

function clearResult() {
    return document.getElementById('result_value').innerText = '';
}

const allOperators = document.getElementsByClassName('operator');
for (let index = 0; index < allOperators.length; index++) {
    allOperators[index].addEventListener('click', function(){
        if(this.id == 'clear') {
           displayResult('');
        } else if (this.id == 'backspace') {
           let result =  undoFormatResult(getResult()).toString();
            if(result) {
               result =  result.substring(0, result.length -1);
                displayResult(result);
            }
        } else {
           let result =  getResult();
           console.log(" Operator result : "+result);
            if(result!= null && result!= NaN && result != '') {
                result =  undoFormatResult(result).toString();
                console.log(" undoFormatResult result : "+result);
                if(this.id == '=') {
                   const evaluatedResult =  eval(result);
                   displayResult(evaluatedResult);
                } else {
                    console.log("Result : "+result);
                    console.log("Button clicked : "+this.id)
                    result = result.toString() + this.id;
                    console.log("after Button clicked Result : "+result)
                    displayHistory(result);
                   displayResult("");
                }
            }
        }
    });
}

const allDigits = document.getElementsByClassName('digit');
for (let index = 0; index < allDigits.length; index++) {
    allDigits[index].addEventListener('click', function(){
      let result = getResult();
      if(result!= NaN) {
         result = result + this.id;
         displayResult(undoFormatResult(result))
      }
    });
}