
'use strict'

let AddName = document.getElementById("addName")
let AddEmail = document.getElementById("addEmail")
let AddFundraiser = document.getElementById("c")
let AddAmount = document.getElementById("addAmount")
let AddDate = document.getElementById("addDate")

function addData(){
    const TableBody = document.querySelector(".table-body");


const xhr = new XMLHttpRequest();

xhr.open('get', "data.json", "true");

xhr.onload = function() {

    AddName=AddName.value;
    AddEmail=AddEmail.value;v
    AddFundraiser=AddFundraiser.value;
    AddAmount=AddAmount.value;
    AddDate=AddDate.value;

    const data = {
        name: AddName,
        email: AddEmail,
        password: AddFundraiser,
        amount: AddAmount,
        AddDate:AddDate
    }

    const obj = JSON.parse(data);
    // console.log(obj);
    let i = 1;
    obj.forEach(element => {

        TableBody.insertAdjacentHTML('beforeend', `

        <tr  class="tabRow">

        <th scope="row">${element.key}</th>
        <td>${element.date}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.fundraiser}</td>
        <td>${element.amount}</td>

        <td >
            <a    style="color: orangered; text-decoration:
                    none;" class="p-1 " href="#">

                <i  class="fas fa-times ali"></i>
            </a>

            <a style="color: #12b886; text-decoration:
                    none;" class="p-1" href="">

                <i class="fas fa-edit"></i> 
                
                
            </a>
            </td>
        </tr> 
        
        `);
    });
}

xhr.send();
}