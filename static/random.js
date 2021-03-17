GitHubCalendar(".calendar", "xmaayy", { responsive: true });
var ctx = document.getElementById('youtubeChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['T-6', 'T-5', 'T-4', 'T-3', 'T-2', 'T-1'],
        datasets: [{
            label: 'Watch Time',
            data: [1.20, 3.1, 2.75, 2.60, 2, 4.5,],
            borderWidth: 1,
            backgroundColor: 'rgba(161, 198, 234, 1)',
            cubicInterpolationMode: 'monotone'
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