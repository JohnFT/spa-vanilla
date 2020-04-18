import Header from '../components/Header'
import Home from '../pages/Home'
import Cheracter from '../pages/Character'
import NotFound from '../pages/NotFound'
import resolveRouter from '../utils/resolve-route'
import getHash from '../utils/getHash'

export const routes = {
  '/': Home,
  '/:id': Cheracter,
  '/about': 'About',
}

export const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRouter(hash)
  let render = routes[route] ? routes[route] : NotFound

  content.innerHTML = await render()
}
