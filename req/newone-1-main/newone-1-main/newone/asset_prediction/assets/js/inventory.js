// document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('tableBody');

    const inventoryData1 = [
        { id: 1, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 4, type: 'Stock', location: 'Cheonan-si' },
        { id: 2, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 3, type: 'Stock', location: 'Busan' },
        { id: 3, product: '4X41A30364', description: 'BO Essential Plus 15.6 BackPack (Eco)', quantity: 2, type: 'Stock', location: 'Seoul' },
        { id: 4, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 2, type: 'Stock', location: 'Cheonan-si' },
        { id: 5, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 2, type: 'Stock', location: 'Busan' },
        { id: 6, product: '4X41A30365', description: 'BO Essential Plus 15.6 Topload (Eco)', quantity: 1, type: 'Stock', location: 'Seoul' },
        { id: 7, product: '40B00300EU', description: 'Thunderbolt 4 Workstation Dock', quantity: 4, type: 'Stock', location: 'Cheonan-si' },
        { id: 8, product: '40B00300EU', description: 'Thunderbolt 4 Workstation Dock', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 9, product: '40AY0090EU', description: 'Universal USB-C Dock', quantity: 1, type: 'Stock', location: 'Cheonan-si' },
        { id: 10, product: '40AY0090EU', description: 'Universal USB-C Dock', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 11, product: '4X30M86902', description: 'Preferred Pro II USB Keyboard Korean', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 12, product: '4Y51C21217', description: 'Go Wireless Multi-Device Mouse', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 13, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11) Korean', quantity: 1, type: 'Stock', location: 'Cheonan-si' },
        { id: 14, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11) Korean', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 15, product: '21EYS7CG1W', description: 'ThinkPad X13 Intel G4 (Win11) Korean', quantity: 9, type: 'Stock', location: 'Seoul' },
        { id: 16, product: '21H2S7G11W', description: 'ThinkPad L14 Gen 4 (Win11) Korean', quantity: 1, type: 'Stock', location: 'Cheonan-si' },
        { id: 17, product: '63CFMARXKR', description: 'ThinkVision T24i-30 23.8 inch', quantity: 7, type: 'Stock', location: 'Cheonan-si' },
        { id: 18, product: '63CFMARXKR', description: 'ThinkVision T24i-30 23.8 inch', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 19, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 6, type: 'Stock', location: 'Cheonan-si' },
        { id: 20, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 5, type: 'Stock', location: 'Seoul' },
        { id: 21, product: '4XD0X88524', description: 'Audio_BO 100 Stereo USB Headset', quantity: 2, type: 'Stock', location: 'Busan' },
        { id: 22, product: '57Y4393', description: 'Cable Display-Port to VGA', quantity: 2, type: 'Stock', location: 'Cheonan-si' },
        { id: 23, product: '57Y4393', description: 'Cable Display-Port to VGA', quantity: 1, type: 'Stock', location: 'Seoul' },
        { id: 24, product: '57Y4393', description: 'Cable Display-Port to VGA', quantity: 6, type: 'Stock', location: 'Seoul' },
        { id: 25, product: '0B47069', description: 'Cable HDMI to VGA-Monitor', quantity: 3, type: 'Stock', location: 'Busan' },
        { id: 26, product: '0B47069', description: 'Cable HDMI to VGA-Monitor', quantity: 4, type: 'Stock', location: 'Cheonan-si' },
        { id: 27, product: '0B47089', description: 'Cable Mini-Display-Port to HDMI', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 28, product: '0B47089', description: 'Cable Mini-Display-Port to HDMI', quantity: 1, type: 'Stock', location: 'Cheonan-si' },
        { id: 29, product: '78Y2361', description: 'USB to Serial-Port', quantity: 3, type: 'Stock', location: 'Seoul' },
        { id: 30, product: '4X90S91830', description: 'USB3.0 to Ethernet Adpt', quantity: 1, type: 'Stock', location: 'Busan' },
        { id: 31, product: '4X90S91830', description: 'USB3.0 to Ethernet Adpt', quantity: 1, type: 'Stock', location: 'Cheonan-si' },
        { id: 32, product: '4X90R61022', description: 'USB-C to HDMI 2.0b Adapter', quantity: 7, type: 'Stock', location: 'Cheonan-si' },
        { id: 32, product: '4X90R61023', description: 'Cable Display-Port to HDMI 2.0b', quantity: 2, type: 'Stock', location: 'Cheonan-si' },
        { id: 33, product: '0B47070', description: 'Cable HDMI to HDMI', quantity: 4, type: 'Stock', location: 'Busan' },
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
