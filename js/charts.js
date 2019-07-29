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
