predictedQuantity = [
  {
    'Part Number':{
      "part_number" : "4Y51C21217",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "Go Wireless Multi-Device Mouse",
    "predicted_quantity" : 35,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
  },
  {
    'Part Number':{
      "part_number" : "4X41A30364",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "BO Essential Plus 15.6 BackPack (Eco)",
    "predicted_quantity" : 37,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
    
  },
  {
    'Part Number':{
      "part_number" : "25599-999-999",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "JABRA Evolve2 55 Link380a MS Stereo",
    "predicted_quantity" : 0,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
    
  },
  {
    'Part Number':{
      "part_number" : "4X41A30364",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "BO Essential Plus 15.6 BackPack (Eco)",
    "predicted_quantity" : 15,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
   
  },
  {
    'Part Number':{
      "part_number" : "25599-999-999",
    },
    "Location" : "9AAE101530ABB",
    "Model Designation" : "JABRA Evolve2 55 Link380a MS Stereo",
    "predicted_quantity" : 9,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
   
  },
  {
    'Part Number':{
      "part_number" : "4999-823-309",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "JABRA EVOLVE 20 SE STEREO MS",
    "predicted_quantity" : 41,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
    
  },
  {
    'Part Number':{
      "part_number" : "4X41A30364",
    },
    "Location" : "9AAE103835ABB",
    "Model Designation" : "BO Essential Plus 15.6 BackPack (Eco)",
    "predicted_quantity" : 14,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
    
  },
  {
    'Part Number':{
      "part_number" : "25599-999-999",
    },
    "Location" : "9AAE104452ABB",
    "Model Designation" : "JABRA Evolve2 55 Link380a MS Stereo",
    "predicted_quantity" : 17,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
   
  },
  {
    'Part Number':{
      "part_number" : "4999-823-309",
    },
    "Location" : "9AAE103835ABB",
    "Model Designation" : "JABRA EVOLVE 20 SE STEREO MS",
    "predicted_quantity" : 7,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
   
  },
  {
    'Part Number':{
      "part_number" : "4X41A30365",
    },
    "Location" : "9AAE103835REC",
    "Model Designation" : "BO Essential Plus 15.6 Topload (Eco)",
    "predicted_quantity" : 0,
    "Wipro Team Suggestion" : 0,
    "Country Suggestion" : 0,
    
  },
  
]











// $(document).ready(function() {
//   var predictedQuantity = [
//     {
//           'Part Number':{
//             "part_number" : "XX89OSHE",
//             "category" : "Cases and Bags"
//           },
//           "Location" : "America",
//           "requested_quantity" : 6,
//           "stock_quantity" : 8,
//           "intransit_quantity" : 8,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 3000
//         },
//         {
//           'Part Number':{
//             "part_number" : "XXEFRDOSHE",
//             "category" : "Headphones"
//           },
//           "Location" : "Korea",
//           "requested_quantity" : 10,
//           "stock_quantity" : 10,
//           "intransit_quantity" : 12,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 4000
//         },
//         {
//           'Part Number':{
//             "part_number" : "XXUNSIOSHE",
//             "category" : "Laptops"
//           },
//           "Location" : "India",
//           "requested_quantity" : 12,
//           "stock_quantity" : 7,
//           "intransit_quantity" : 9,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 5000
//         }

//       ]

//   // Update the table headers
//   var headers = ['part_number', 'category', 'Location', 'requested_quantity', 'stock_quantity', 'intransit_quantity', 'demand_quantity', 'type', 'cost'];
//   var headerRow = $('<tr>');
//   headers.forEach(function(header) {
//       headerRow.append($('<th style="text-transform: capitalize;">').text(header.replace('_', ' ')));
//   });
//   headerRow.append($('<th>').text('Action'));
//   $('#table-body').append(headerRow);

//   // Populate the table with data
//   predictedQuantity.forEach(function(item) {
//       var row = $('<tr>');
//       headers.forEach(function(header) {
//           var cellValue = item;
//           if (header.includes('.')) {
//               var parts = header.split('.');
//               cellValue = item[parts[0]];
//               for (var i = 1; i < parts.length; i++) {
//                   cellValue = cellValue[parts[i]];
//               }
//           } else {
//               cellValue = item[header];
//           }
//           row.append($('<td>').text(cellValue));
//       });

//       var approveButton = $('<button>')
//           .text('Approve')
//           .css({
//               'background-color': '#4f73d9',
//               'color': 'white',
//               'border-radius': '12px',
//               'padding': '5px 10px',
//               'border': 'none',
//               'cursor': 'pointer'
//           })
//           .on('click', function() {
//               $(this).text('Approved').css('background-color', 'green');
//           });

//       row.append($('<td>').append(approveButton));
//       $('#table-body').append(row);
//   });

//   // Initialize charts (placeholders)
//   function initializeCharts() {
//       // Monthly Open Tasks Chart (Placeholder data)
//       var openTasksChart = {
//           chart: { type: 'area', height: 60, sparkline: { enabled: true } },
//           series: [{ name: 'Open Tasks', data: [25, 66, 20, 40, 12, 58, 20] }],
//           stroke: { curve: 'smooth', width: 2 },
//           fill: { colors: ['#f3feff'], type: 'solid', opacity: 0.05 },
//           markers: { size: 0 },
//           tooltip: { theme: 'dark', fixed: { enabled: true, position: 'right' }, x: { show: false } }
//       };
//       new ApexCharts(document.querySelector('#earning'), openTasksChart).render();

//       // Yearly Cost Breakup Chart (Placeholder data)
//       var costBreakupChart = {
//           chart: { width: 180, type: 'donut', fontFamily: 'Plus Jakarta Sans', foreColor: '#adb0bb' },
//           series: [38, 40, 25],
//           labels: ['2020', '2021', '2022'],
//           colors: ['#5D87FF', '#ecf2ff', '#F9F9FD'],
//           plotOptions: { pie: { startAngle: 0, endAngle: 360, donut: { size: '75%' } } },
//           stroke: { show: false },
//           dataLabels: { enabled: false },
//           legend: { show: false },
//           tooltip: { theme: 'dark', fillSeriesColor: false }
//       };
//       new ApexCharts(document.querySelector('#breakup'), costBreakupChart).render();
//   }

//   initializeCharts();
// });






