
$(function() {
  const info = 
  [
      {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "Company": "Front End Dev Co",
      "Experience": "3 years",
      "School": "UW",
      "Major": "Marketing",
      "Email": "steve@fedc.com",
      "LinkedInUrl": "steve.linkedinprofile.com"
    }, {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "Company": "Web Sites and More",
      "Experience": "5 years",
      "School": "SU",
      "Major": "Computer Science",
      "Email": "aaronNotMyEmail@uw.com",
      "LinkedInUrl": "aaron.linkedinprofile.com"
    }, {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "Company": "Chicago Cubs",
      "Experience": "12 years",
      "School": "USC",
      "Major": "Pitching",
      "Email": "kyleH@cubs.com",
      "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "Company": "Chicago Buls",
      "Experience": "20 years",
      "School": "UNC",
      "Major": "Trash Talking",
      "Email": "mJordan@bulls.com",
      "LinkedInUrl": "mJordan.linkedinprofile.com"
    }
    ];

  const dataHTML = info.map(function(i){
  const info =
   `<div class="right">
    <img class="profile" src="img/unsplash-headshot.jpg" alt="Steve Smith's profile picture">
    <div class="name">
      <h2 class="data_name">${i.name}</h2>
      <h4 class="job_title">${i.job_title}</h4>
    </div>
  </div>
  <div class="info">
    <p class="data_company"><span class="bold">Company:</span> ${i.company}</p>
    <p class="data_experience"><span class="bold">Experience:</span> ${i.experience}</p>
    <p> class="data_school"<span class="bold">${i.school}</span> UW</p>
    <p class="data_major"><span class="bold">${i.major}</span> Marketing</p>
    <p class="data_email"> <span class="bold">${i.email}</span> steve@fedc.com</p>
    <img class="linkedin" src="img/linkedin.svg" alt="linkedin-logo">
    <p class="data_LinkedinURL">${i.linkedinUrl}</p>
  </div>`;

    $(".template").append(dataHTML);

  });

});