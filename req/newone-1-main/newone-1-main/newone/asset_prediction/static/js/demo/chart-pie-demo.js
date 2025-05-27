// function loadPieChartData(country) {
//   if (!myPieChart) {
//     console.error("Pie chart is not initialized.");
//     return;
//   }

//   // Get data for the selected country
//   const data = dataByCountryForPieChart[country] || dataByCountryForPieChart['Poland'];

//   // Update the chart's dataset
//   myPieChart.data.datasets[0].data = data;
//   myPieChart.update();
// }

// const countries = ['Poland', 'USA'];

// // Example data structure for each country
// const dataByCountryForPieChart = {
//   Poland: [55000, 40000], // Data for SRP and GEA
//   USA: [30000, 50000], // Different data for another country
//   // Add more countries and their data as needed
// };

// // Declare myPieChart in a scope accessible to updatePieChart
// let myPieChart;

// // Initialize the Chart.js pie chart
// function initializePieChart() {
//   var ctx = document.getElementById("myPieChart").getContext("2d");
//   myPieChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ["SRP", "GEA"],
//       datasets: [{
//         data: dataByCountryForPieChart.Poland, // Default data
//         backgroundColor: ['#4e73df', '#1cc88a'],
//         hoverBackgroundColor: ['#2e59d9', '#17a673'],
//         hoverBorderColor: "rgba(234, 236, 244, 1)",
//       }],
//     },
//     options: {
//       maintainAspectRatio: false,
//       tooltips: {
//         backgroundColor: "rgb(255,255,255)",
//         bodyFontColor: "#858796",
//         borderColor: '#dddfeb',
//         borderWidth: 1,
//         xPadding: 15,
//         yPadding: 15,
//         displayColors: false,
//         caretPadding: 10,
//       },
//       legend: {
//         display: false
//       },
//       cutoutPercentage: 80,
//     },
//   });
// }
