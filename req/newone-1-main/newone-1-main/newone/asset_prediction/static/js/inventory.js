// document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('tableBody');

    const inventoryData1 = [
        { id: 1, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 4, type: 'Stock', location: 'WARSZAWA' },
        { id: 2, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 3, type: 'Stock', location: 'KRAKOW' },
        { id: 3, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 2, type: 'Stock', location: 'ALEKSANDROW LODZKI' },
        { id: 4, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 2, type: 'Stock', location: 'PRZASNYSZ' },
        { id: 5, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 2, type: 'Stock', location: 'KRAKOW' },
        { id: 6, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 1, type: 'Stock', location: 'ALEKSANDROW LODZKI' },
        { id: 7, product: '40B00300EU', description: 'Thunderbolt 4 Workstation Dock', quantity: 4, type: 'Stock', location: 'KRAKOW' },
        { id: 8, product: '40B00300EU', description: 'Thunderbolt 4 Workstation Dock', quantity: 1, type: 'Stock', location: 'BIELSKO BIALA' },
        { id: 9, product: '40AY0090EU', description: 'Universal USB-C Dock', quantity: 1, type: 'Stock', location: 'ALEKSANDROW LODZKI' },
        { id: 10, product: '40AY0090EU', description: 'Universal USB-C Dock', quantity: 1, type: 'Stock', location: 'WARSZAWA' },
        { id: 11, product: '4X30M86902', description: 'Preferred Pro II USB Keyboard ', quantity: 1, type: 'Stock', location: 'PRZASNYSZ' },
        { id: 12, product: '4Y51C21217', description: 'Go Wireless Multi-Device Mouse', quantity: 1, type: 'Stock', location: 'WARSZAWA' },
        { id: 13, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11)', quantity: 1, type: 'Stock', location: 'WROCLAW' },
        { id: 14, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11) ', quantity: 1, type: 'Stock', location: 'PRZASNYSZ' },
        { id: 15, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11) ', quantity: 9, type: 'Stock', location: 'WROCLAW' },
        { id: 16, product: '21H2S7G11W', description: 'ThinkPad L14 Gen 4 (Win11)', quantity: 1, type: 'Stock', location: 'PRZASNYSZ' },
        { id: 17, product: '63CFMARXKR', description: 'ThinkVision T24i-30 23.8 inch', quantity: 7, type: 'Stock', location: 'ALEKSANDROW LODZKI' },
        { id: 18, product: '63CFMARXKR', description: 'ThinkVision T24i-30 23.8 inch', quantity: 1, type: 'Stock', location: 'KRAKOW' },
        { id: 19, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 6, type: 'Stock', location: 'PRZASNYSZ' },
        { id: 20, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 5, type: 'Stock', location: 'BIELSKO BIALA' },
        { id: 21, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 2, type: 'Stock', location: 'KRAKOW' },
    ];


    // Populate the table
    inventoryData1.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${item.id}</h6></td>
            <td class="border-bottom-0">
                <h6 class="fw-semibold mb-1">${item.product}</h6>
                <span class="fw-normal">${item.description}</span>
            </td>
            <td class="border-bottom-0">
                <input type="number" class="form-control inputWidth" value="${item.quantity}" min="0">
            </td>
            <td class="border-bottom-0">
                <span class="badge  rounded-3 fw-semibold background">${item.type}</span>
            </td>
            <td class="border-bottom-0">
                <h6 class="fw-semibold mb-1">${item.location}</h6>
            </td>
            <td class="border-bottom-0">
                <button type="submit" class="btn btn-primary">Update</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
// });
