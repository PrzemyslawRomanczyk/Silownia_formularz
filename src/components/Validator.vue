<template>
    <div class="row justify-content-md-center card-content">
      <div class="col-md-11 jumbotron jumb">
        <section class="section" id="section--2">
        <div id="container">
              
          <div>
              <label for="fileSrc" id="fileupload">
                  Upload file
              </label>
              <input 
                  type="file"
                  id="fileSrc" 
                  accept=".stl"
              >
          </div>
        
          <div>
              <p id="fileName"></p>
          </div>
        
          <div>
              <button 
                  id="uploadButton" 
                  disabled
              >
                  Send file to fixing
              </button>
          </div>
          
          <div>
              <ul id="operations"></ul>
          </div>
        
          <div>
              <a
                  href="#"
                  type="button" 
                  style="display: none;"
                  id="saveButton"
              >
                  Save fixed file
              </a>
          </div>
      </div>
      </section>
      </div>
    <div class="col-md-11 jumbotron jumb">

    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Validator"
});

const fileInput = document.getElementById("fileSrc"); 
const uploadButton = document.getElementById("uploadButton"); 
const saveButton = document.getElementById("saveButton"); 
const fileName = document.getElementById("fileName"); 
const operationsList = document.getElementById("operations"); 

const operationsArray = [];
let file = null;
let fixedFile = null;


function readFileDataAsBase64(f) { 
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

async function sendRepairRequest(obj) {
    try {
        const response = await fetch("https://localhost:5001/File", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        return await response.json();
    } catch(error) {
       
        return "error";
    }
}


async function getRepairStatusRequest(operationId) {
    try {
        const response = await fetch(`https://localhost:5001/File?operationId=${operationId}`, {
            method: 'GET',
        });

        return await response.json();
    } catch(error) {
       
        return "error";
    }
}


function removeHeaderFromBase64(file) {
    return /base64,(.+)/.exec(file)[1];
}


fileInput.addEventListener("change", event => {
    uploadButton.disabled = false; 
    file = event.target.files[0]; 
    fileName.textContent = `Wybrany plik: ${file.name}`;
});


function addOperationStatus(statusText) {
    const node = document.createElement("LI");
    const textnode = document.createTextNode(statusText);
    node.appendChild(textnode);
    operationsList.appendChild(node);
}


uploadButton.addEventListener("click", async () => {
    if(file) { 
        
        const fileBase64 = await readFileDataAsBase64(file); 
        const obj = {
            base64: removeHeaderFromBase64(fileBase64),
        }

        saveButton.style.display = "none";
        addOperationStatus("Uploading file"); 
        const operationId = await sendRepairRequest(obj);

        if(operationId) { 
            if(operationId === "error") { 
                addOperationStatus("Wystąpił błąd podczas naprawiania modelu");
                return;
            }
            
            await waitForRepairCompletedAndGetStatuses(operationId);
        }
    }
});


async function waitForRepairCompletedAndGetStatuses(operationId) {
    while(true) {
        const operation = await getRepairStatusRequest(operationId); 

        if(operation === "error") { 
            addOperationStatus("Wystąpił błąd podczas naprawiania modelu");
            break;
        }

        if(!operationsArray.includes(operation.status)) { 
            operationsArray.push(operation.status);
            addOperationStatus(operation.status);
        }

      
        if(operation.url) {
            saveButton.style.display = "block";
            fixedFile = operation.url;
            break;
        }
    }
}


function addOperationStatus(statusText) {
    const node = document.createElement("LI");
    const textnode = document.createTextNode(statusText);
    node.appendChild(textnode);
    operationsList.appendChild(node);
}


saveButton.addEventListener("click", async () => {
    if(fixedFile) {
        saveButton.setAttribute("href", fixedFile); 
    }
});
</script>

<style>
.col-md-8 {
  padding: 20px;
  text-align: center;
}
</style>
