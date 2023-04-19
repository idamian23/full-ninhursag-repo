export function navbar() {
  //components
  const navbar = document.createElement('nav')
  const navbarFirstContainer = document.createElement('div')
  const navbarSecondContainer = document.createElement('div')
  const navbarThirdContainer = document.createElement('div')
  const navbarMenuSvg = document.createElement('div')
  const navbarMenuTitle = document.createElement('h3')
  const navbarMenuLogo = document.createElement('h2')
  const navbarMenuTeam = document.createElement('h2')

  //classes
  navbar.classList.add('navbar')
  navbarFirstContainer.classList.add('navbar__first-container')
  navbarSecondContainer.classList.add('navbar__second-container')
  navbarThirdContainer.classList.add('navbar__third-container')
  navbarMenuSvg.classList.add('navbar__menu--svg')
  navbarMenuTitle.classList.add('navbar__menu--title')
  navbarMenuLogo.classList.add('navbar__menu--logo')
  navbarMenuTeam.classList.add('navbar__menu--team')

  navbarMenuSvg.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      <path d="M13.412 7.348l-3.77 7.539c-.086.173-.282.236-.437.142-.155-.094-.225-.3-.155-.477l3.77-7.539c.086-.173.282-.236.437-.142.155.094.225.3.155.477z"/>
      <path d="M14.588 7.348c.07-.177.001-.383-.154-.477-.156-.094-.352-.031-.438.142l-3.77 7.539c-.07.177-.001.383.155.477.086.094.282.031.437-.142l3.77-7.539z"/>
    </svg>
  `

  navbarMenuTitle.textContent = 'Menu'
  navbarMenuLogo.textContent = 'Cibo Gustoso'
  navbarMenuTeam.textContent = 'Team'

  navbarFirstContainer.append(navbarMenuSvg)
  navbarFirstContainer.append(navbarMenuTitle)
  navbarSecondContainer.append(navbarMenuLogo)
  navbarThirdContainer.append(navbarMenuTeam)
  navbar.append(navbarFirstContainer)
  navbar.append(navbarSecondContainer)
  navbar.append(navbarThirdContainer)

  return navbar
}
