function search() {

    const myTable = document.querySelector(".table-body");
    const tr = myTable.getElementsByTagName('tr');

    let searchKey = document.querySelector("#searchData").value.toUpperCase();
    console.log(searchKey);

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            console.log(textvalue);

            if (textvalue.toUpperCase().indexOf(searchKey) > -1) {
                tr[i].style.display = "";
                console.log("second if");
            } else {
                console.log("else");
                tr[i].style.display = "none";
            }
        }
    }
};
