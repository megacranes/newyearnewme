const LANDING_PAGE = {
  component: 'landing-page',
  like: 'contact',
  navigationName: 'Home'
}

const CONTACT = {
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
  component: 'team',
  navigationName: 'Team'
}

const FLEET = {
  component: 'fleet',
  navigationName: 'Fleet'
}

const SERVICES = {
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
