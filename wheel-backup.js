const problem = document.getElementById("problem");
const solution = document.getElementById("solution");
const submitProblem = document.getElementById("submit-sproblem");
const addSolution = document.getElementById("add-solution");
const resetSolution = document.getElementById("reset-solution");
const resetProblem = document.getElementById("reset-problem");
const theProblem = document.getElementById("the-problem");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
let arryOfSolutions = ["Wirte Solutions!"];

function makeRotationValeus(minDegree, maxDegree, value) {
  this.minDegree = minDegree;
  this.maxDegree = maxDegree;
  this.value = value;
  return { minDegree: minDegree, maxDegree: maxDegree, value: value };
}


let firstSolution = true;

var rotationValues = [
  { minDegree: 0, maxDegree: 360, value: "Wirte Solutions!" }
];

let randomDegree = 0;

var data = [1];

var pieColors = [
    "#59D5E0",
    "#F5DD61",
    "#59D5E0",
    "#FAA300",
    "#59D5E0",
    "#FAA300",
  ];

  let myChart;
 
  function makeChart() {
    if (myChart) {
      myChart.destroy();
     }
     
     myChart = new Chart(wheel, {
      //Plugin for displaying text on pie chart
      plugins: [ChartDataLabels],
      //Chart Type Pie
      type: "pie",
      data: {
        //Labels(values which are to be displayed on chart)
        labels: arryOfSolutions,
        //Settings for dataset/pie
        datasets: [
          {
            backgroundColor: pieColors,
            data: data,
          },
        ],
      },
      options: {
        //Responsive chart
        responsive: true,
        animation: { duration: 0 },
        plugins: {
          //hide tooltip and legend
          tooltip: false,
          legend: {
            display: false,
          },
          //display labels inside pie chart
          datalabels: {
            color: "#0C0C0C",
            formatter: (_, context) => context.chart.data.labels[context.dataIndex],
            font: { size: 14 },
            anchor: 'top',
            align: 'center',
             
            rotation:  function(ctx) {
             
              const valuesBefore = ctx.dataset.data.slice(0, ctx.dataIndex).reduce((a, b) => a + b, 0);
              const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const rotation = ((valuesBefore + ctx.dataset.data[ctx.dataIndex] /2) /sum *360);
              return rotation < 180 ? rotation-90 : rotation+90;
              },
              formatter: function (value, context) {
                return context.chart.data.labels[context.dataIndex]; },
                    
          },
        },
      },
    });
  
    //display value based on the randomAngle
    const valueGenerator = (angleValue) => {
      for (let i of rotationValues) {
        //if the angleValue is between min and max then display it
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
          finalValue.innerHTML = `<p>${i.value}</p>`;
          spinBtn.disabled = false;
          break;
        }
      }
   
    };
  
    //Spinner count
    let count = 0;
    //100 rotations for animation and last rotation for result
    let resultValue = 101;
   
    
    
   
    //spin chart
    spinBtn.addEventListener("click", () => {
      
      spinBtn.disabled = true;
      
      finalValue.innerHTML = `<p>Good Luck!</p>`;
     
      let rotationInterval = window.setInterval(() => {
 
     
      myChart.options.rotation = myChart.options.rotation + resultValue ;
      //labels fix
      myChart.options.plugins.datalabels.rotation = function(ctx) {
        const sliceValue = ctx.dataset.data[ctx.dataIndex];
        const valuesBefore = ctx.dataset.data.slice(0, ctx.dataIndex).reduce((a, b) => a + b, 0);
        const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
        const rotation = myChart.options.rotation + ((valuesBefore + sliceValue / 2) / sum * 360);
        return rotation - 90;
    };
      //Update chart with new value;
      myChart.update();

     
      function valueAndClear(){
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
       }
      //If rotation>360 reset it back to 0
    
      if (myChart.options.rotation < 0){
        valueAndClear()
        count = 0;
        resultValue = 101;
      }
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 1 && myChart.options.rotation == randomDegree) {
        valueAndClear()
        count = 0;
        resultValue = 101;
      }
    }, 10);

  });

  return myChart


  }

window.onload = () => {
  makeChart(arryOfSolutions)
}
 


function addSolutionToWheel() {
    const text = solution.value
    if(text) {  
      if(firstSolution) {
        arryOfSolutions = [];
        firstSolution = false;
      }
        arryOfSolutions.push(text);
        rotationValues = [];
        data = [];
        let circleSlice = arryOfSolutions.length;
        let min = 0;
        arryOfSolutions.forEach(solution => {
            let max = min + Math.floor(360 / circleSlice);
            data.push(1);
            let newRotation =  makeRotationValeus(min, max, solution);
            rotationValues.push(newRotation);
            min = max + 1;
        });
        console.log(rotationValues);
        
        rotationValues[circleSlice - 1].maxDegree = 360;
         
       makeChart();
       
        solution.value = "";
    }
  }

  function addProblem() {
    const text = problem.value;
    if (text) {
      theProblem.innerHTML = `<h1>The Solution to ${problem.value} is:</h1>`;
      problem.value = "";
    }
  }


  addSolution.addEventListener("click", addSolutionToWheel)
  resetSolution.addEventListener("click", () => {
    solution.value = "";
  })

  submitProblem.addEventListener("click", addProblem);
  resetProblem.addEventListener("click", () => {
    problem.value = "";
  })

  spinBtn.addEventListener("click", () => {
    randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    console.log(randomDegree)
  } )