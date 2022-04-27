const totalCost = document.querySelector("#totalCost");
const tep = document.querySelector("#TEP");
const tec = document.querySelector("#TEC");
const gep = document.querySelector("#GEP");
const gec = document.querySelector("#GEC");
const fineN = document.querySelector("#fineNum");
const subsidiesN = document.querySelector("#subsidiesNum");
const result = document.querySelector("#result");

function calculateReuslt() {
    const state = document.querySelector('#state');

    console.log("start to calculate result!");
    //from page
    let choosenState = state.value;
    let percentageTE = Number(document.querySelector("input[type='range']").value);
    let percentageGE = 100-percentageTE;
    console.log("state:" + state.value+", percentageTE:"+percentageTE+", percentageGE:"+percentageGE);

    let stateLabel;
    //show in Fuel Mix Pie
    $.getJSON("../assets/state.json", function(data){
        console.log("123");
        //JSON.stringify(data);
        if(choosenState === '04'){
            stateLabel = data.state[0];
        }else if(choosenState === '06'){
            stateLabel = data.state[1];
        }else{
            stateLabel = data.state[2];
        }
        console.log(stateLabel);
        stateChart.data = {
            labels: stateLabel.energy,
            datasets: [
                {
                //label: 'Dataset 1',
                data: stateLabel.percentage,
                backgroundColor: stateLabel.backgroundColor,
                borderColor: '#20303b',
                }
            ]
        }
        stateChart.update();
    }).fail(function(){
        console.log("An error has occurred.");
    }).done(function(){
        console.log(stateLabel);
        //from json
        let totalEnergy = stateLabel.totalEnergy;
        let traPrecentage = stateLabel.traPrecentage;
        let rePrecentage = stateLabel.rePrecentage;

        
        //from table
        let rowState = document.querySelector("#state-"+choosenState);
        let stateName = rowState.children[1].textContent;
        let teNum = totalEnergy*Math.pow(10,8)*0.01*Number(rowState.children[2].textContent);
        let geNum = totalEnergy*1000*Math.pow(10,8)*Number(rowState.children[3].textContent)/ (24*365);
        console.log("stateName:" + stateName+", teNum:"+teNum+", geNum:"+geNum+", subsidies:");

        //result
        let cost = teNum*percentageTE/100+geNum*percentageGE/100;
        console.log(cost.toFixed(2));

        //show
        tep.textContent = percentageTE+"%";
        tec.textContent = (teNum*percentageTE/100).toFixed(2);
        gep.textContent = percentageGE+"%";
        gec.textContent = (geNum*percentageGE/100).toFixed(2);
        totalCost.textContent = cost.toFixed(2);
        if(choosenState==='04'){
            document.querySelector("#subsidies").classList.remove("d-none");
            document.querySelector("#lineChart").classList.add("d-none");
        }else if (choosenState === '06'){
            document.querySelector("#subsidies").classList.add("d-none");
            document.querySelector("#lineChart").classList.remove("d-none");
        }else{
            document.querySelector("#subsidies").classList.add("d-none");
            document.querySelector("#lineChart").classList.add("d-none");
        }

        //show in result Pie
        resultChart.data.datasets[0].data = [percentageTE,percentageGE];

        
        JSON.stringify(stateLabel);
        

        resultChart.update();
        
        
        result.classList.remove("d-none");
    });

    
}

function updateChart(range) {
    document.querySelector("#tradRangeV").textContent = range.value;
    document.querySelector("#reRangeV").textContent = 100-range.value;
}