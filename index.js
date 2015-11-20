// FILL THESE IN
var USERNAME = 'BillDybas';
var PROJECTNAME = 'SimpleShowcase';
var PROJECTIMAGE = 'example.png';
var PROJECTDESCRIPTION = 'A simple static site generator centered around a GitHub project.';

var PROJECTURL = 'https://github.com/' + USERNAME + '/' + PROJECTNAME;

// Set the Project Name
var projectNames = document.getElementByClassName('project-name');
var p;
for(p = 0; p < projectNames.length; p++){
    projectNames[p].innerHTML = PROJECTNAME;
}

// Set the Project Description
var projectDes = document.getElementById('project-description');
projectDes.innerHTML = PROJECTDESCRIPTION;

// Set the Project URL
var projectUrls = document.getElementByClassname('project-url');
var u;
for(u = 0; u < projectUrls.length; u++){
    projectUrls[u].href = PROJECTURL;
}

// Set the Project Image
var projectImg = document.getElementById('project-image');
projectImg.src = PROJECTURL + '/blob/master/' + PROJECTIMAGE;
