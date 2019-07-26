var ctx = document.getElementById('pieGraph').getContext('2d');
// For a pie chart

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 15, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
