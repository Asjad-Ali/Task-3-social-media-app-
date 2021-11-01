
const Table_Body=document.getElementById("listing-table")



const xhr = new XMLHttpRequest();

xhr.open('get', '/Scripts/data.json', "true");

xhr.onload = function() {
    const obj = JSON.parse(this.responseText);
    obj.forEach(element => {

        Table_Body.insertAdjacentHTML('beforeend', `

        <tr>
        <td scope="row">${element.key}</th>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.fundraiser}</td>
        <td>${element.amount}</td>
        <td>${element.date}</td>

        <td>
            <a style="color: orangered; text-decoration:
                    none;" class="p-1" href="#">

                <i class="fas fa-times"></i>
            </a>

            <a style="color: #0D6EFD; text-decoration:
                    none;" class="p-1" href="">

                <i class="fas fa-edit"></i> </td>
        </a>
    </tr>
        
        
        `);
    });


}

xhr.send();
