const domainsContainer = document.getElementById('domainsContainer');
 
  function addDomain(domain){
    domainsContainer.innerHTML+=` <div class="domain-box" data-domain-id="${domain.DOMAIN_ID}">
  <div id="domain-id">${domain.DOMAIN_ID}</div>
  <div id="domain-name">${domain.DOMAIN_NAME}</div>
</div> `
  }

document.addEventListener("DOMContentLoaded", () => {
fetch(' http://localhost:8000/domains')
  .then(response => response.json())
  .then(domains => {
    domainsContainer.innerHTML="";
    domains.forEach((domain) => {
      addDomain(domain)
    });
    const domainBoxes = document.querySelectorAll('.domain-box');

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