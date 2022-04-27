/* ====== stateDataChart ===== */
const state = document.querySelector('#state');

let stateData = {
    labels: ['Solar', 'Natural Gas'],
    datasets: [
        {
        //label: ['Solar', 'Natural Gas'],
        data: [60, 40],
        backgroundColor: ["#b91d47","#00aba9"],
        borderColor: '#20303b',
        }
    ]
};

const stateChartConfig = {
    type: 'doughnut',
    data: stateData,
    options: {
        responsive: true,
        plugins: {
            legend:{
                display:true,
                position:'bottom',
            }
        }
    },
};

const stateChart = new Chart(
    document.querySelector('#stateChart'),
    stateChartConfig
);

/* ====== ResultChart ===== */
const DATA_COUNT = 2;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

let resultData = {
labels: ['Traditional Energy', 'Renewable Energy'],
datasets: [
    {
    //label: 'Dataset 1',
    data: [60, 40],
    backgroundColor: ["#b91d47","#00aba9"],
    borderColor: '#20303b',
    }
]
};

const resultConfig = {
    type: 'doughnut',
    data: resultData,
    options: {
        responsive: true,
        plugins: {
            legend:{
                display:true,
                position:'bottom',
            }
        }
    },
};

const resultChart = new Chart(
    document.querySelector('#resultChart'),
    resultConfig
);

