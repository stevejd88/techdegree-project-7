var ctx = document.getElementById('pieGraph').getContext('2d');
// For a pie chart

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 15, 60],
            backgroundColor: [
                'rgba(104, 194, 124, 1)',
                'rgba(86, 156, 158, 1)',
                'rgba(104, 91, 207, 1)'
            ],
            borderAlign: 'inner',
            borderColor: 'rgba(0, 0, 0,0)',
            weight: 1,
        }],
        labels: [
            'Tablets',
            'Phones',
            'Desktop'
        ]
    },
    options: {
        circumference: 2* Math.PI,
        // cutOutPercentage: 50%
    }
});
