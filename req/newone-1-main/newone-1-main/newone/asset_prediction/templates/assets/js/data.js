predictedQuantity = [
  {
    'items':{
      "part_number" : "4X41A30364",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "BO Essential Plus 15.6 BackPack (Eco)",
    "predicted_quantity" : 7,
    "cost" : 349589.52
  },
  {
    'items':{
      "part_number" : "4X41A30364",
    },
    "country" : "Seoul",
    "Model Designation" : "BO Essential Plus 15.6 BackPack (Eco)",
    "predicted_quantity" : 7,
    "cost" : 349589.52
  },
  {
    'items':{
      "part_number" : "40AY0090EU",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "Universal USB-C Dock",
    "predicted_quantity" : 1,
    "cost" : 520222.50
  },
  {
    'items':{
      "part_number" : "40AY0090EU",
    },
    "country" : "Seoul",
    "Model Designation" : "Universal USB-C Dock",
    "predicted_quantity" : 1,
    "cost" : 520222.50
  },
  {
    'items':{
      "part_number" : "21H2S7G11W",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "ThinkPad L14 Gen 4 (Win11) Korean",
    "predicted_quantity" : 7,
    "cost" : 7108320.24
  },
  {
    'items':{
      "part_number" : "63CFMARXKR",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "ThinkVision T24i-30 23.8 inch",
    "predicted_quantity" : 1,
    "cost" : 192829.14
  },
  {
    'items':{
      "part_number" : "63CFMARXKR",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "ThinkVision T24i-30 23.8 inch",
    "predicted_quantity" : 1,
    "cost" : 192829.14
  },
  {
    'items':{
      "part_number" : "63CFMARXKR",
    },
    "country" : "Cheonan-si",
    "Model Designation" : "ThinkVision T24i-30 23.8 inch",
    "predicted_quantity" : 1,
    "cost" : 192829.14
  },
]











// $(document).ready(function() {
//   var predictedQuantity = [
//     {
//           'items':{
//             "part_number" : "XX89OSHE",
//             "category" : "Cases and Bags"
//           },
//           "country" : "America",
//           "requested_quantity" : 6,
//           "stock_quantity" : 8,
//           "intransit_quantity" : 8,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 3000
//         },
//         {
//           'items':{
//             "part_number" : "XXEFRDOSHE",
//             "category" : "Headphones"
//           },
//           "country" : "Korea",
//           "requested_quantity" : 10,
//           "stock_quantity" : 10,
//           "intransit_quantity" : 12,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 4000
//         },
//         {
//           'items':{
//             "part_number" : "XXUNSIOSHE",
//             "category" : "Laptops"
//           },
//           "country" : "India",
//           "requested_quantity" : 12,
//           "stock_quantity" : 7,
//           "intransit_quantity" : 9,
//           "demand_quantity" : 8,
//           "type" : "stock",
//           "cost" : 5000
//         }

//       ]

//   // Update the table headers
//   var headers = ['part_number', 'category', 'country', 'requested_quantity', 'stock_quantity', 'intransit_quantity', 'demand_quantity', 'type', 'cost'];
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






