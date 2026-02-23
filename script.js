


let currentTab="all";

//<!-- function for update the dashboard -->
function updateDashboard(){

let cards=document.querySelectorAll(".job-card");

let interview=0;
let rejected=0;

cards.forEach(card=>{

if(card.dataset.status==="interview") interview++;

if(card.dataset.status==="rejected") rejected++;

});

document.getElementById("totalCount").innerText=cards.length;
document.getElementById("interviewCount").innerText=interview;
document.getElementById("rejectedCount").innerText=rejected;

}

//function for the staus 
function setStatus(button,status){

let card=button.closest(".job-card");

let badge=card.querySelector(".status-badge");

card.dataset.status=status;

badge.innerText=status.toUpperCase();

badge.className="badge status-badge";

if(status==="interview") badge.classList.add("badge-success");

else if(status==="rejected") badge.classList.add("badge-error");

else badge.classList.add("badge-info");

updateDashboard();
filterJobs();

}

//function for deletimng the job 

function deleteJob(button){

button.closest(".job-card").remove();

updateDashboard();
filterJobs();

}

//function for changing the tabs 
function changeTab(tab){

  currentTab = tab;

  document.querySelectorAll(".tab")
    .forEach(t => t.classList.remove("tab-active"));

  document.activeElement.classList.add("tab-active");

  filterJobs();
}

//function for filtering the jobs 

function filterJobs(){

let cards=document.querySelectorAll(".job-card");

let visible=0;

cards.forEach(card=>{

if(currentTab==="all" || card.dataset.status===currentTab){

card.style.display="block";
visible++;

}else{

card.style.display="none";

}

});

document.getElementById("tabCount").innerText=visible+" jobs";

if(visible===0)

document.getElementById("emptyState").classList.remove("hidden");

else

document.getElementById("emptyState").classList.add("hidden");

}


updateDashboard();
filterJobs();


