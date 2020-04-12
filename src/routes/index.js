import Header from '../templates/header';
import Home from '../pages/home';
import Characters from '../pages/characters';
import Error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id':Characters,
    '/Contact':'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const section = null || document.getElementById('section');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    section.innerHTML = await render();
};

export default router;