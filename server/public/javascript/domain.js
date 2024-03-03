const domainsContainer = document.getElementById('domainsContainer');
 
  function addDomain(domain){
    domainsContainer.innerHTML+=`  
<section class="card" data-domain-id="${domain.DOMAIN_ID}">
        <h2 class="card_title">${domain.DOMAIN_NAME}</h2>
        <p class="card_content">${domain.DESCRIPTION}</p>
        <img class="card_img" src="${domain.IMAGE}" alt="Supervisor">
      </section> `
  }
document.addEventListener("DOMContentLoaded", () => {
fetch(' http://localhost:8006/domains')
  .then(response => response.json())
  .then(domains => {
    domainsContainer.innerHTML="";
    domains.forEach((domain) => {
      addDomain(domain)
    });
    const domainBoxes = document.querySelectorAll('.card');

    domainBoxes.forEach(domain => {
    console.log("inside")
      domain.addEventListener('click', () => {
        console.log("clicked")
          const domainId = domain.getAttribute('data-domain-id');
          window.location.href = '/course?id=' + domainId;
      });
  });
  })
});