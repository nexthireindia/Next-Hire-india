// ===============================
// Next Hire India - Script
// ===============================

import {
  database,
  ref,
  push,
  get,
  child,
  remove
} from "./firebase.js";


// ---------- ADD JOB (Dashboard) ----------
window.addJob = function () {

    let title = document.getElementById("title").value;
    let location = document.getElementById("location").value;
    let desc = document.getElementById("desc").value;

    if (!title || !location || !desc) {
        alert("All fields required");
        return;
    }

    const jobsRef = ref(database, "jobs");

    push(jobsRef, {
        title: title,
        location: location,
        desc: desc,
        time: Date.now()
    });

    alert("Job Added Successfully");

    document.getElementById("title").value = "";
    document.getElementById("location").value = "";
    document.getElementById("desc").value = "";
};


// ---------- LOAD JOBS (Home Page) ----------
window.loadJobs = function () {

    const jobsRef = ref(database);

    get(child(jobsRef, "jobs")).then((snapshot) => {

        let jobList = document.getElementById("jobList");

        jobList.innerHTML = "";

        if (!snapshot.exists()) {
            jobList.innerHTML = "<p>No jobs available</p>";
            return;
        }

        let data = snapshot.val();

        Object.keys(data).forEach(key => {

            let job = data[key];

            jobList.innerHTML += `
            <div class="card">
                <h3>${job.title}</h3>
                <p><b>Location:</b> ${job.location}</p>
                <p>${job.desc}</p>
                <a href="job.html"><button>Apply</button></a>
            </div>
            `;
        });

    });

};


// Auto load on homepage
if (document.getElementById("jobList")) {
    loadJobs();
                                     }
