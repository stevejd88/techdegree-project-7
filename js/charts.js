// Chart.defaults.global.legend.display = false;

const lineGraph = document.getElementById('myChart');
const changeGraph = document.getElementById('changeGraph');

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(104, 91, 207, 0.2)',
            borderColor: 'rgb(104, 91, 207, 0.5)',
            pointBackgroundColor: 'rgb(252, 252, 252)',
            pointBorderColor: 'rgb(86, 73, 126)',
            lineTension:	'0',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        }]
    },

    // Configuration options go here
    options: {}
});

const hourData = () => {
    chart.data.datasets[0].data = [1000, 500, 890, 350, 700, 775, 900, 625, 533, 880];
    chart.data.labels = ['5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am'];
    chart.update();
};

const dailyData = () => {
    chart.data.datasets[0].data = [700, 400, 850, 550, 975, 100, 500];
    chart.data.labels = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    chart.update();
};

const weeklyData = () => {
    chart.data.datasets[0].data = [1500, 400, 850, 550, 975, 500, 700, 350, 950, 500];
    chart.data.labels = ['16-22', '23-29', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    chart.update();
};

const monthlyData = () => {
    chart.data.datasets[0].data = [550, 700, 450, 850, 375, 200, 600, 350, 750, 500];
    chart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'];
    chart.update();
};

// const graphPoints = chart.type;
  // .map(user => user.favoriteBooks.map(book => book.title))
  // .reduce( (arr, title) => [...arr, ...title], []);








// lineGraph.addEventListener('click', e => {
//   const element = e.target;
//   if (element.textContent === 'Daily') {
//     chart.data.datasets.data = [750, 1250, 0, 1500, 2000, 1500, 1750, 0, 1750, 2250, 1750, 2250];
//   }
// });
//
//
//
//
//
// changeGraph.addEventListener('click', e => {
//   const element = e.target;
//   function graphEdit() {
//     if(element.id === 'hour3') {
//       chart.data.datasets.data = [75, 100, 175, 125, 225, 200, 100];
//     } else if (element.id === 'day3') {
//       chart.data.datasets.data = [75, 300, 125, 375, 200, 150, 100];
//     }
//   }
//   graphEdit();
// });
