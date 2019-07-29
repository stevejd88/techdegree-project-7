var ctx = document.getElementById('barGraph').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Votes',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)'
            ],
            borderColor: [
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)',
                'rgba(104, 91, 207, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
