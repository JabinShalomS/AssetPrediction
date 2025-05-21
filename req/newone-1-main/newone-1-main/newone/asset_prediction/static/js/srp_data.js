async function getJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit-button');
  const downloadButton = document.getElementById('download-button');
  const approveButton = document.getElementById('approve-button');
  const rejectButton = document.getElementById('reject-button');

  const isCountryTeam = true; // Set this flag based on your logic
  let isFinalTotalQtyHidden = false; // Flag to track visibility of Final Total Qty

  // Adjust button visibility and state based on isCountryTeam flag
  if (isCountryTeam) {
    submitButton.style.display = 'none'; // Hide submit button
    downloadButton.disabled = false; // Enable download button
    approveButton.style.display = 'inline-block';
    rejectButton.style.display = 'inline-block';
  } else {
    submitButton.style.display = 'inline-block'; // Show submit button
    downloadButton.disabled = true; // Disable download button until submit
  }

  async function populateTable() {
    const jsonData = await getJsonData('http://127.0.0.1:5000/dashboardpq');
    const tableBody = document.getElementById('table-body');
    const tableHeader = document.getElementById('table-header');
    tableBody.innerHTML = ''; // Clear existing table data
    tableHeader.innerHTML = '';

    // Define the headers with display names
    const headers = [
      { key: 'Part_Number', display: 'Part Number' },
      { key: 'City', display: 'Location' },
      { key: 'ModelName', display: 'Model Name' },
      { key: 'Trend_fit', display: 'Predicted Quantity' },
      { key: 'Wipro Team Suggestion', display: 'Wipro Team Suggestion' },
      { key: 'Country Suggestion', display: 'Country Suggestion' },
      { key: 'Final Total Qty', display: 'Final Total Qty' }
    ];

    // Create the header row
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header.display;
      headerRow.appendChild(th);
    });
    tableHeader.appendChild(headerRow);

    // Populate the table with the specified fields
    jsonData.forEach(item => {
      if (item['Trend_fit'] > 0 && item['ModelName']) {
        const row = document.createElement('tr');
        headers.forEach(header => {
          const td = document.createElement('td');

          // Make specific columns bold
          if (['Part_Number', 'Trend_fit', 'Final Total Qty'].includes(header.key)) {
            td.style.fontWeight = 'bold';
          }

          if (header.key === 'Part_Number') {
            td.textContent = item[header.key] || '';
          } else if (header.key === 'Wipro Team Suggestion') {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'form-control inputWidth';
            input.value = item[header.key] || 0;
            input.disabled = isCountryTeam; // Disable if isCountryTeam is true
            input.addEventListener('input', function () {
              item[header.key] = parseInt(input.value) || 0;
              updateFinalTotalQty(item, row);
            });
            td.appendChild(input);
          } else if (header.key === 'Country Suggestion') {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'form-control inputWidth';
            input.value = item[header.key] || 0;
            input.disabled = !isCountryTeam; // Disable if isCountryTeam is false
            input.addEventListener('input', function () {
              item[header.key] = parseInt(input.value) || 0;
              updateFinalTotalQty(item, row);
              // Show the Final Total Qty column when any input is changed
              if (isFinalTotalQtyHidden) {
                $('#table-header th').eq(6).show();
                $('#table-body td:nth-child(7)').show();
                isFinalTotalQtyHidden = false;
              }
            });
            td.appendChild(input);
          } else if (header.key === 'Final Total Qty') {
            td.textContent = calculateFinalTotal(item);
            td.style.fontWeight = 'bold';
          } else {
            td.textContent = item[header.key] || '';
          }
          row.appendChild(td);
        });

        tableBody.appendChild(row);
      }
    });

    // Hide the Final Total Qty column if needed
    if (isFinalTotalQtyHidden) {
      $('#table-header th').eq(6).hide();
      $('#table-body td:nth-child(7)').hide();
    }
  }

  function submitData() {
    const updatedData = [];
    $('#table-body tr').each(function () {
      const row = $(this);
      const item = {
        'Part_Number': row.find('td').eq(0).text(),
        'City': row.find('td').eq(1).text(),
        'ModelName': row.find('td').eq(2).text(),
        'Trend_fit': parseInt(row.find('td').eq(3).text()) || 0,
        'Wipro Team Suggestion': parseInt(row.find('input').eq(0).val()) || 0,
        'Country Suggestion': parseInt(row.find('input').eq(1).val()) || 0,
        'Final Total Qty': parseInt(row.find('td').eq(6).text()) || 0
      };
      updatedData.push(item);
    });

    // Send the updated data to the server
    fetch('http://127.0.0.1:5000/update_excel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('SRP details updated successfully.');
        populateTable(); // Fetch updated data from the server
        downloadButton.disabled = false;
        downloadButton.classList.remove('btn-secondary');
        downloadButton.classList.add('btn-primary');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while updating the Excel file.');
      });
  }

  function storeStatus(state) {
    const timestamp = new Date().toISOString(); // Store full timestamp in ISO format
    localStorage.setItem('srpStatus', JSON.stringify({ state, timestamp }));
  }

  approveButton.addEventListener('click', function () {
    submitData();
    storeStatus('Approved');
  });

  rejectButton.addEventListener('click', function () {
    $('#table-body tr').each(function () {
      const row = $(this);
      row.find('td').eq(6).text('0'); // Set Final Total Qty to zero
    });
    // Hide the Final Total Qty column
    $('#table-header th').eq(6).hide();
    $('#table-body td:nth-child(7)').hide();
    isFinalTotalQtyHidden = true;
    submitData();
    storeStatus('Rejected');
  });

  downloadButton.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5000/download_excel';
  });

  submitButton.addEventListener('click', function () {
    submitData();
  });
  populateTable(); // Initial population of the table
});

function calculateFinalTotal(item) {
  // Ensure all values are numbers before summing
  const trendFit = parseInt(item['Trend_fit']) || 0;
  const wiproSuggestion = parseInt(item['Wipro Team Suggestion']) || 0;
  const countrySuggestion = parseInt(item['Country Suggestion']) || 0;
  return trendFit + wiproSuggestion + countrySuggestion;
}

function updateFinalTotalQty(item, row) {
  const finalTotalCell = row.cells[row.cells.length - 1];
  finalTotalCell.textContent = calculateFinalTotal(item);
}