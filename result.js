var result1  = document.getElementById("result");
if(localStorage.getItem("testdata")==null){
    result1.innerHTML = result1.innerHTML + '<h1 class="text-center"> No Test Result Found </h1>';
}else{

    let obj = JSON.parse(localStorage.getItem("testdata"));
    let name = localStorage.getItem("loginUser");
    obj.forEach(element => {
        if (element.user == name) {
            element.test.forEach(ele => {
                let score = ((ele.score*100)/5).toFixed(2);
                let color = "success";
                if(score<50){
                    ele.status = "Fail";
                    color="danger";
                }
                result1.innerHTML = result1.innerHTML +  ` <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="single-team">
                    <div class="img-text text-center">
                        <h4>${ele.name}</h4>
                        <p class="mb-3">Beginner Level</p>
                        <h5 class="m-3 text-success">Score : ${score}% </h5>
                        <h7>Total Question : 5</h7><br>
                        <h7 class="mb-3">Correct Question : ${ele.score}</h7>                         
                        <h5 class="m-3 text-${color}">Status : ${ele.status} </h5>
                        <p>Date : ${ele.date}</p>
                        <a href="https://gateway.pinata.cloud/ipfs/${ele.hash}" target="_blank" class="btn btn-primary">View Test Result </a>
                    </div>
                </div>
              </div>`; 
            })
        }
    });
}