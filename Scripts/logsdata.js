
const userLogTable = document.querySelector(".LogTable");

const userLog = localStorage.getItem("currentUser");

const UserLogIp = localStorage.getItem("userIp");

console.log(UserLogIp);

const keysOfUL = Object.keys(localStorage);
for (let key of keysOfUL) {
    
    if (key === userLog) {
        const CurrentUserData = JSON.parse(localStorage.getItem(key));
        // console.log(CurrentUserData);

        userLogTable.insertAdjacentHTML("afterbegin", `

        <tr>
        <td>${CurrentUserData.name}</td>
        <td>${CurrentUserData.email}</td>
        <td>${CurrentUserData.UserAgent}</td>
        <td>${CurrentUserData.SignUpTime}</td>
        <td>${UserLogIp}</td>
    </tr>

        `);
    }
}