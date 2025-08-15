/*
 * DOMContentLoaded
 * Event fires when the HTML document has been completely parsed
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load host
  const dev = document.location.host

  // Check dev mode
  if (dev.includes(':3000')) {
    // Get all cards links
    const links = document.querySelectorAll(
      'section#container-group div.row div.card div.card-body a.btn'
    )

    // Change attributes to work local for each link
    links.forEach((l) => {
      // Change hrer
      l.setAttribute(
        'href',
        l.href.replaceAll('https://federicomp.github.io/frontend-skills', '')
      )
      // Change target
      l.setAttribute('target', '_self')
    })
  }
})
