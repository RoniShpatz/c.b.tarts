const submitBtn = document.querySelector(".submit-froum button");
const one1 = document.querySelectorAll(`input[name="one-1"]`);
const one2 = document.querySelectorAll(`input[name="one-2"]`);
const one3 = document.querySelectorAll(`input[name="one-3"]`);
const one4 = document.querySelectorAll(`input[name="one-4"]`);
const one5 = document.querySelectorAll(`input[name="one-5"]`);
const one6 = document.querySelectorAll(`input[name="one-6"]`);
const one7 = document.querySelectorAll(`input[name="one-7"]`);
const one8 = document.querySelectorAll(`input[name="one-8"]`);
const one9 = document.querySelectorAll(`input[name="one-9"]`);
const one10 = document.querySelectorAll(`input[name="one-10"]`);
const one11 = document.querySelectorAll(`input[name="one-11"]`);
const one12 = document.querySelectorAll(`input[name="one-12"]`);
const one13 = document.querySelectorAll(`input[name="one-13"]`);
const one14 = document.querySelectorAll(`input[name="one-14"]`);
const one15 = document.querySelectorAll(`input[name="one-15"]`);
const one16 = document.querySelectorAll(`input[name="one-16"]`);
const one17 = document.querySelectorAll(`input[name="one-17"]`);
const one18 = document.querySelectorAll(`input[name="one-18"]`);
const one19 = document.querySelectorAll(`input[name="one-19"]`);
const one20 = document.querySelectorAll(`input[name="one-20"]`);

const questions = document.querySelectorAll(`ol li`);
const displayResult = document.querySelector(`.popup`);
const clozeResult = document.querySelector(`.popup h6`)

console.log(clozeResult);

const arrayOfQuotes = [one1, one2, one3, one4, one5, one6, one7, one8, one9, one10, one11, one12, one13, one14, one15, one16, one17, one18, one19, one20 ]
let arryOfSubmittedValeus = [];






for (let i = 0; i < questions.length - 1; i++) {
    questions[i + 1].classList.add("disabled");
    questions[i].addEventListener("change", (event) => { 
        if (event.target.checked) {
            questions[i + 1].classList.remove("disabled");
        }
        
    });
}

function getSelectorValue() {

    arrayOfQuotes.forEach(question => {
            question.forEach(one => {
                if (one.checked) {
                    arryOfSubmittedValeus.push(one.value);
                }
            });
            }
    
        );
        
       let result = caculateSumAndAnswer();
        displayResultOn(result);
        
       

    }

        function caculateSumAndAnswer() {
            let sum = 0;
            arryOfSubmittedValeus.forEach((number) => {
                number = parseInt(number);
                sum += number;
            });
            let scorePara = document.createElement("p");
            scorePara.innerHTML = checkScore(sum);
            // console.log(arryOfSubmittedValeus, sum)
            return scorePara;
          
        }


        function displayResultOn(scorePara) {
            if (document.querySelector(`.popup p`)) {
                displayResult.removeChild(document.querySelector(`.popup p`));
                }
            displayResult.appendChild(scorePara);
            console.log(displayResult);
            displayResult.style.display = `block`; 
            
            arryOfSubmittedValeus = [];
        }


        function checkScore(sum) {
            if (20 <= sum && sum <= 40) {
                return `20-40: Your mental health appears to be quite good, with minimal areas of concern. 
                You're likely feeling relatively balanced and able to cope well with life's challenges. It's important to continue practicing
                self-care and maintaining healthy habits to sustain your well-being.`;
            } else if (41 <= sum && sum <= 60) {
                return `41-60: Your mental health is generally okay, but there may be some
                areas where you could benefit from additional support or coping strategies. 
                You might be experiencing occasional stress or mild symptoms of distress. 
                Consider exploring self-help resources or reaching out to supportive friends and family.`;
            } else if (61 <= sum && sum <= 80) {
                return `61-80: Your mental health may be indicating some significant challenges
                or areas of distress. You may be experiencing moderate levels of stress, anxiety, or other 
                mental health symptoms that are impacting your daily functioning. Seeking support from a mental 
                health professional can provide you with strategies to manage these challenges and improve your well-being.`;
            } else if (81 <= sum && sum <= 100) {
                return `81-100: Your mental health may be significantly impacted, and it's important to seek 
                help from a mental health professional as soon as possible. You may be experiencing severe symptoms of
                depression, anxiety, or other mental health conditions that are interfering with your ability to function
                effectively in daily life. Remember that you're not alone, and there are resources available to help you 
                navigate through this difficult time.`;
            } else {
                return "no score";
            }
        }

        function closePopup() {
            displayResult.style.display = `none`; 
        }

submitBtn.addEventListener("click", getSelectorValue);
clozeResult.addEventListener("click", closePopup);
