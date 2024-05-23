const problem = document.getElementById("problem");
const solution = document.getElementById("solution");
const submitProblem = document.getElementById("submit-sproblem");
const addSolution = document.getElementById("add-solution");
const resetSolution = document.getElementById("reset-solution");
const resetProblem = document.getElementById("reset-problem");
const theProblem = document.getElementById("the-problem");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
let arryOfSolutions = [];

function MakeRotationValeus(minDegree, maxDegree, value) {
  this.minDegree = minDegree;
  this.maxDegree = maxDegree;
  this.value = value;
}

var rotationValues = [

];


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
 
  function makeChart(rotationValues, data, arryOfSolutions) {
 
    let myChart = new Chart(wheel, {
      //Plugin for displaying text on pie chart
      plugins: [ChartDataLabels],
      //Chart Type Pie
      type: "pie",
      data: {
        //Labels(values which are to be displayed on chart)
        labels: ["add solution"],
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
          finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
          spinBtn.disabled = false;
          break;
        }
      }
    };
  
    //Spinner count
    let count = 0;
    //100 rotations for animation and last rotation for result
    let resultValue = 101;
    //Start spinning
    spinBtn.addEventListener("click", () => {
      spinBtn.disabled = true;
      //Empty final value
      finalValue.innerHTML = `<p>Good Luck!</p>`;
      //Generate random degrees to stop at
      let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
      //Interval for rotation animation
      let rotationInterval = window.setInterval(() => {
      //Set rotation for piechart
      /*
      Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
      */
      myChart.options.rotation = myChart.options.rotation + resultValue;
      myChart.options.plugins.datalabels.rotation = function(ctx) {
        const valuesBefore = ctx.dataset.data.slice(0, ctx.dataIndex).reduce((a, b) => a + b, 0);
        const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
        const rotation = myChart.options.rotation + ((valuesBefore + ctx.dataset.data[ctx.dataIndex] /2) /sum *360);
        return rotation-90;
      };
      //Update chart with new value;
      myChart.update();
      //If rotation>360 reset it back to 0
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
      }
    }, 10);
    myChart.data.labels = arryOfSolutions;
    rotationValues = rotationValues;
    data = data;
    myChart.update();
  });
  
  
  return myChart


  }

window.onload = () => {
  makeChart(rotationValues, data, arryOfSolutions)
}
 

function addSolutionToWheel() {
    const text = solution.value
    if(text) {
        arryOfSolutions.push(text);
        data = [];
        rotationValues = [];
        var num = 1;
        for(i = 0; i < arryOfSolutions.length; i++){
          data.push.num;
        }
        let circleSlice = arryOfSolutions.length;
        let min = 0;
        arryOfSolutions.forEach(solution => {
            let max = min + Math.floor(360 / circleSlice);
            let newRotation = new  MakeRotationValeus(min, max, solution);
            rotationValues.push(newRotation);
            min = max + 1;
        });
        rotationValues[circleSlice - 1].maxDegree = 360;
        if (myChart) {
          myChart.destroy();
          makeChart(rotationValues, data, arryOfSolutions);
         }
       makeChart(rotationValues, data, arryOfSolutions);
        console.log(rotationValues);
        
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
