// <block:setup:1>
const DATA_COUNT = 2;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

let data = {
labels: ['TE', 'GE'],
datasets: [
    {
    label: 'Dataset 1',
    data: [60, 40],
    backgroundColor: ['#4dc9f6','#f67019'],
    }
]
};
// </block:setup>

// <block:config:0>
const config = {
type: 'pie',
data: data,
options: {
    responsive: true,
    plugins: {
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'Chart.js Pie Chart'
    }
    }
},
};
// </block:config>
const myChart = new Chart(
document.getElementById('myChart'),
config
);
