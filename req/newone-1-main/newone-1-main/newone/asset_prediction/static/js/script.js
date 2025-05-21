// document.addEventListener('DOMContentLoaded', function () {
//   // Function to upload file
//   async function uploadFile(type) {
//       const fileInput = document.getElementById(`inputGroupFile${capitalizeFirstLetter(type)}`);
//       const progressBar = document.getElementById(`progress${capitalizeFirstLetter(type)}`).querySelector('.progress-bar');
//       const progressContainer = document.getElementById(`progress${capitalizeFirstLetter(type)}`);
      
//       if (fileInput.files.length === 0) {
//           alert('Please choose a file to upload.');
//           return;
//       }

//       const file = fileInput.files[0];
//       const formData = new FormData();
//       formData.append('file', file);

//       progressContainer.style.display = 'block';
//       progressBar.style.width = '0%';
//       progressBar.textContent = '0%';

//       try {
//           const response = await fetch('upload_endpoint', { // Replace 'upload_endpoint' with your actual endpoint
//               method: 'POST',
//               body: formData,
//               onUploadProgress: function (progressEvent) {
//                   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//                   progressBar.style.width = `${percentCompleted}%`;
//                   progressBar.textContent = `${percentCompleted}%`;
//               }
//           });

//           if (response.ok) {
//               alert('File uploaded successfully.');
//           } else {
//               alert('File upload failed.');
//           }
//       } catch (error) {
//           console.error('Error uploading file:', error);
//           alert('An error occurred while uploading the file.');
//       } finally {
//           progressContainer.style.display = 'none';
//       }
      

//   // Helper function to capitalize the first letter of a string
//   function capitalizeFirstLetter(string) {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   // Event listener for file input change to update label for Inventory
//   document.getElementById('inputGroupFileInventory').addEventListener('change', function () {
//       const fileName = this.files[0].name;
//       this.nextElementSibling.textContent = fileName;
//   });

//   // Event listeners for file input change to update label for other inputs
//   document.querySelectorAll('.custom-file-input').forEach(input => {
//       input.addEventListener('change', function () {
//           const fileName = this.files[0].name;
//           this.nextElementSibling.textContent = fileName;
//       });
//   });

//   // Attach uploadFile function to global scope for button onclick handlers
//   window.uploadFile = uploadFile;
// }});


// function uploadFile(uploadType) {
//   var fileInputId = '';
//   var progressBarId = '';

//   switch (uploadType) {
//       case 'inventory':
//           fileInputId = 'inputGroupFileInventory';
//           progressBarId = 'progressInventory';
//           break;
//       case 'openTasks':
//           fileInputId = 'inputGroupFileOpenTasks';
//           progressBarId = 'progressOpenTasks';
//           break;
//       case 'newUpload':
//           fileInputId = 'inputGroupFileNewUpload';
//           progressBarId = 'progressNewUpload';
//           break;
//   }

//   var fileInput = document.getElementById(fileInputId);
//   var file = fileInput.files[0];

//   if (!file) {
//       alert('Please select a file first.');
//       return;
//   }

//   var xhr = new XMLHttpRequest();
//   var formData = new FormData();
//   formData.append('file', file);

//   xhr.upload.addEventListener('progress', function (event) {
//       if (event.lengthComputable) {
//           var percentComplete = Math.round((event.loaded / event.total) * 100);
//           var progressBar = document.getElementById(progressBarId);
//           var progressBarFill = progressBar.querySelector('.progress-bar');
//           progressBar.style.display = 'block';
//           progressBarFill.style.width = percentComplete + '%';
//           progressBarFill.textContent = percentComplete + '%';
//       }
//   });

//   xhr.addEventListener('load', function () {
//       if (xhr.status === 200) {
//           alert('File uploaded successfully!');
//       } else {
//           alert('Error uploading file.');
//       }
//       var progressBar = document.getElementById(progressBarId);
//       progressBar.style.display = 'none';
//   });

//   xhr.open('POST', 'your-upload-url'); // Replace with your actual upload URL
//   xhr.send(formData);
// }


// function displayFileName(inputId, fileNameId) {
//     var fileInput = document.getElementById(inputId);
//     var fileNameLabel = document.getElementById(fileNameId);

//     if (fileInput.files.length > 0) {
//         var fileName = fileInput.files[0].name;
//         fileNameLabel.textContent = 'Selected file: ' + fileName;
//     } else {
//         fileNameLabel.textContent = '';
//     }
// }




// function uploadFile(uploadType) {
//     var fileInputId = '';
//     var progressBarId = '';
//     var fileNameId = '';

//     switch (uploadType) {
//         case 'inventory':
//             fileInputId = 'inputGroupFileInventory';
//             progressBarId = 'progressInventory';
//             fileNameId = 'fileNameInventory';
//             break;
//         case 'openTasks':
//             fileInputId = 'inputGroupFileOpenTasks';
//             progressBarId = 'progressOpenTasks';
//             fileNameId = 'fileNameOpenTasks';
//             break;
//         case 'newUpload':
//             fileInputId = 'inputGroupFileNewUpload';
//             progressBarId = 'progressNewUpload';
//             fileNameId = 'fileNameNewUpload';
//             break;
//     }

//     var fileInput = document.getElementById(fileInputId);
//     var file = fileInput.files[0];

//     if (!file) {
//         alert('Please select a file first.');
//         return;
//     }

//     var progressBar = document.getElementById(progressBarId);
//     var progressBarFill = progressBar.querySelector('.progress-bar');
//     progressBar.style.display = 'block';
//     progressBarFill.style.width = '0%';
//     progressBarFill.textContent = '0%';

//     var xhr = new XMLHttpRequest();
//     var formData = new FormData();
//     formData.append('file', file);

//     xhr.upload.addEventListener('progress', function (event) {
//         if (event.lengthComputable) {
//             var percentComplete = Math.round((event.loaded / event.total) * 100);
//             progressBarFill.style.width = percentComplete + '%';
//             progressBarFill.textContent = percentComplete + '%';
//         }
//     });

//     xhr.addEventListener('load', function () {
//         if (xhr.status === 200) {
//             alert('File uploaded successfully!');
//         } else {
//             alert('Error uploading file.');
//         }
//         progressBar.style.display = 'none';
//     });

//     xhr.open('POST', 'your-upload-url'); // Replace with your actual upload URL
//     xhr.send(formData);
// }




// Function to display the chosen file name under the upload section
function displayFileName(type) {
    let fileInputId, fileNameId;

    // Determine which file input and label to use based on the type
    switch(type) {
        case 'inventory':
            fileInputId = 'inputGroupFileInventory';
            fileNameId = 'fileNameInventory';
            break;
        case 'openTasks':
            fileInputId = 'inputGroupFileOpenTasks';
            fileNameId = 'fileNameOpenTasks';
            break;
        case 'newUpload':
            fileInputId = 'inputGroupFileNewUpload';
            fileNameId = 'fileNameNewUpload';
            break;
        default:
            return;
    }

    // Get the file input and file name elements
    var fileInput = document.getElementById(fileInputId);
    var fileNameElement = document.getElementById(fileNameId);

    // Set the file name text if a file is selected
    if (fileInput && fileInput.files.length > 0) {
        fileNameElement.textContent = fileInput.files[0].name;
    } else {
        fileNameElement.textContent = 'No file chosen';
    }
}

// Function to handle the upload process with progress bar
function uploadFile(type) {
    let fileInputId, progressId;

    // Determine which file input and progress bar to use based on the type
    switch(type) {
        case 'inventory':
            fileInputId = 'inputGroupFileInventory';
            progressId = 'progressInventory';
            break;
        case 'openTasks':
            fileInputId = 'inputGroupFileOpenTasks';
            progressId = 'progressOpenTasks';
            break;
        case 'newUpload':
            fileInputId = 'inputGroupFileNewUpload';
            progressId = 'progressNewUpload';
            break;
        default:
            return;
    }

    // Get the file input element and progress bar
    var fileInput = document.getElementById(fileInputId);
    var progressBar = document.getElementById(progressId).querySelector('.progress-bar');

    // Ensure a file is selected
    if (fileInput.files.length === 0) {
        alert('Please select a file.');
        return;
    }

    // Prepare the form data
    var formData = new FormData();
    formData.append('file', fileInput.files[0]);

    // Display the progress bar
    document.getElementById(progressId).style.display = 'block';

    // Send the file using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);

    // Update progress bar during upload
    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            progressBar.style.width = percentComplete + '%';
            progressBar.setAttribute('aria-valuenow', percentComplete);
            progressBar.textContent = Math.round(percentComplete) + '%';
        }
    };

    // Handle the success of the upload
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('File uploaded successfully!');
        } else {
            alert('File upload failed. Please try again.');
        }
    };

    // Send the form data
    xhr.send(formData);
}
