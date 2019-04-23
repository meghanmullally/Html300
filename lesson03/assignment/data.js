
$(function () {

  let dataHTML = data.map(function(n) {
    let data = 
   `<div class="right">
    <img class="profile" src="img/unsplash-headshot.jpg" alt="Steve Smith's profile picture">
    <div class="name">
      <h2 class="data_name">${n.name}</h2>
      <h4 class="job_title">${n.job_title}</h4>
    </div>
  </div>
  <div class="info">
    <p class="data_company"><span class="bold">Company:</span> ${n.company}</p>
    <p class="data_experience"><span class="bold">Experience:</span> ${n.experience}</p>
    <p> class="data_school"<span class="bold">${n.school}</span> UW</p>
    <p class="data_major"><span class="bold">${n.major}</span> Marketing</p>
    <p class="data_email"> <span class="bold">${n.email}</span> steve@fedc.com</p>
    <img class="linkedin" src="img/linkedin.svg" alt="linkedin-logo">
    <p class="data_LinkedinURL">${n.linkedinUrl}</p>
  </div>`;

    $(".data").append(dataHTML);

  });

});