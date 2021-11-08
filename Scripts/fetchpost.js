  // 
  // System: Basic Social Media App
  // Developer: Asjad Ali (Frontend Trainee)
  // Date: November 8,2021
  // Organization: Programmer Force
  // Purpose: This file fetch.js is responsible to handle 
  // all the action and control of the index Page using javascript.




// Fetch User Post

var ApiKey = "61837354e425806572666e65";
sessionStorage.setItem("postNum",10)

var postNum = Number(sessionStorage.getItem("postNum"))
const loadMoreBtn = document.getElementById("loadMoreBtn")


loadMoreBtn.addEventListener('click',()=>{

  postNum=Number(sessionStorage.getItem("postNum"));
  postNum=postNum+10;
  sessionStorage.setItem("postNum",postNum);
  postCall()

});



function postCall(){


  
    const req = fetch("https://dummyapi.io/data/v1/post?limit="+postNum, { 
         method: 'GET',    
         headers: { 
            'app-id': "61837354e425806572666e65",    
        }
        });
    
    req.then(function(response) {   
         console.log(response);   
          return response.json();
        })
        .then(function(data) {
        console.log(data);
        postDiv = document.getElementById("postDivId");
        let out="";
        data.data.forEach( user => {
            // debugger;
            out+=`<div class="postDiv flex ">
            <div class="row profilePicRow">
              <div class="col-1 profilePicDiv">
                <img src="${user.owner.picture}" alt="profile Image">
              </div>
              <div class="col-10 profileNameDiv">
                  <div class="col"><h6>${user.owner.title} ${user.owner.firstName} ${user.owner.lastName}</h6></div>
                  <div class="col"><p>${user.publishDate}</p></div>
              </div>
              <div class="col-1">
              <i style="margin-top:10px" class="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <h6 style="color:#0D6EFD" font-weight:bold>${user.tags}</h6>
            <h6>${user.text}</h6>
            <div class="postImg">
              <img src=${user.image} alt="Picture">
            </div>
            
            <div class="row likeCommentDiv">
              <div><hr></div>
              <div class="col-4">
               <a href=""> <p><i class="fas fa-thumbs-up like"></i>  ${user.likes} Likes</p></a>
              </div>
              <div class="col-4">
               <a href=""><p><i class="fas fa-comment-dots"></i> Comments</p> </a>            
              </div>
              <div class="col-4">
                <a href=""><p><i class="fas fa-share-square"></i>Share</p></a>            
              </div>
              <div><hr></div>
            </div>
         </div>`
    
        });
        postDiv.innerHTML = out;
    });
    }
postCall()




// =========>  Fetch User <===============
// friends
function friendCall(){
const req = fetch('https://dummyapi.io/data/v1/user?limit=7', {    
  method: 'GET',    
  headers: { 
              'app-id': "61837354e425806572666e65",    
          }});

req.then(function(response) {   
     console.log(response);   
      return response.json();}).then(function(data) {

    console.log(data);

    friend = document.getElementById("userDivID");
    let fr="";
    data.data.forEach( F=>{
        fr+=`<div class="col-3">
          <img src="${F.picture}" alt="profile Image">
        </div>
        <div class="col-4 d-flex flex-column userNameDiv">
          <h6>${F.firstName} ${F.lastName}</h6>
          <p>56 mutual friends</p>
        </div>
        <div class="col-5 d-flex flex-column align-items-center userNameDiv">
          <div>
            <button type="button" class="btn btn-primary btn-sm removebtn">Remove</button>
          </div>
        </div>`

    });
    friend.innerHTML = fr;

});
}
friendCall()






        // Suggested Friends



function suggestfriendCall(){
  const req = fetch('https://dummyapi.io/data/v1/user?limit=5', {    
    method: 'GET',    
    headers: { 
                'app-id': "61837354e425806572666e65",    
            }});
  
  req.then(function(response) {   
       console.log(response);   
        return response.json();}).then(function(data) {
  
      console.log(data);
  
      friend = document.getElementById("sugestUserDivID");
      let fr="";
      data.data.forEach( F=>{
          fr+=`<div class="col-3">
            <img src="${F.picture}" alt="profile Image">
          </div>
          <div class="col-4 d-flex flex-column userNameDiv">
            <h6>${F.firstName} ${F.lastName}</h6>
            <p>56 mutual friends</p>
          </div>
          <div class="col-5 d-flex flex-column align-items-center userNameDiv">
            <div>
                <button type="button" class="btn btn-primary btn-sm smallBtn">Add Friend</button>
            </div>
          </div>`
  
      });
      friend.innerHTML = fr;
  
  });
  }
  suggestfriendCall()






  // =========> Tag <=============

  
function showTagfun(){
  const req = fetch('https://dummyapi.io/data/v1/tag?limit=2', {    
      method: 'GET',    
      headers: {
          'app-id': "61837354e425806572666e65",    
      }});
  
  req.then(function(response) {   
       console.log(response);   
        return response.json();
      })
      .then(function(data) {
      console.log(data);
  
      Tag = document.getElementById("showTag");
      let tg="";
      data.data.forEach( (Tags)=>{
          tg+=`<a style="padding: 10px; margin 15px; height:10ps;"  href="#">${Tags}</a>`
      });
      Tag.innerHTML = tg;
  
  });
  }
  showTagfun()




  








  