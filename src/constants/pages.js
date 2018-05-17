const LANDING_PAGE = {
  id: 'landing-page',
  component: 'landing-page',
  navigationName: 'Home',
  onLoad: function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const CONTACT = {
  id: 'contact',
  component: 'landing-page',
  navigationName: 'Contact',
  onLoad: function () {
    let element = document.getElementById('contact-container')

    window.scrollTo({
      top: element.offsetTop,
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
