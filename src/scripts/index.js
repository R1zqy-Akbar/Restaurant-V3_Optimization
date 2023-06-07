import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  // fot button
  button: document.querySelector('#hamburgerButton'),
  // for navigation
  drawer: document.querySelector('#navigationDrawer'),
  // for content
  content: document.querySelector('#mainContent'),
});

// event listener ketika url hash diubah
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// event listener ketika halam dimuat
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
