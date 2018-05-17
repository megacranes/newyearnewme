const LANDING_PAGE = {
  id: 'landing-page',
  component: 'landing-page',
  like: 'contact',
  navigationName: 'Home'
}

const CONTACT = {
  id: 'contact',
  component: 'landing-page',
  navigationName: 'Contact',
  onLoad: function () {
    let element = document.getElementById('contact-container')

    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }
}

const TEAM = {
  id: 'about',
  component: 'team',
  navigationName: 'Team'
}

const FLEET = {
  id: 'fleet',
  component: 'fleet',
  navigationName: 'Fleet'
}

const SERVICES = {
  id: 'services',
  component: 'services',
  navigationName: 'Services'
}

export {
  LANDING_PAGE,
  CONTACT,
  TEAM,
  FLEET,
  SERVICES
}
