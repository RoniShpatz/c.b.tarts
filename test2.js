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
            if (10 <= sum && sum <= 20) {
                return `10-20: Your score falls within a range indicating high emotional resilience. 
                This suggests that you possess strong coping mechanisms and are adept at managing stress and adversity.
                 You likely have a positive outlook on life and are able to bounce back quickly from setbacks. It's 
                 important to continue nurturing these qualities through self-care practices and maintaining a supportive 
                 network of friends and family.`;
            } else if (21 <= sum && sum <= 30) {
                return `21-30: Your score falls within a range suggesting moderate emotional resilience. While you generally handle 
                stress and challenges reasonably well, there may be areas where you could strengthen your coping strategies. 
                Consider exploring additional techniques such as mindfulness or seeking support from a therapist or counselor 
                to further enhance your resilience and emotional well-being.`;
            } else if (31 <= sum && sum <= 40) {
                return `31-40: Your score falls within a range indicating low emotional resilience. This suggests that you may struggle
                more than average with managing stress and adversity. It's important to recognize areas where you can improve your 
                coping skills and seek support when needed. Consider implementing self-care practices, building a strong support network, 
                and seeking professional help to develop healthier coping mechanisms.`;
            } else if (41 <= sum && sum <= 50) {
                return `41-50: Your score falls within a range indicating very low emotional resilience. This suggests that you may face 
                significant challenges in managing stress and coping with adversity. It's crucial to prioritize your mental health and 
                seek support from qualified professionals. Therapy, support groups, and other resources can provide you with the tools 
                and strategies needed to build resilience and improve your overall well-being. Remember that you're not alone,
                 and help is available.` 
            }else {
                return "no score";
            }
        }

        function closePopup() {
            displayResult.style.display = `none`; 
        }

submitBtn.addEventListener("click", getSelectorValue);
clozeResult.addEventListener("click", closePopup);