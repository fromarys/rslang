import { Header, Main, Footer } from './app';

import './styles/index.scss';

const root = <HTMLElement>document.querySelector('.root');

const header: Header = new Header(root);
const main: Main = new Main(root);
const footer: Footer = new Footer(root);

header.init();
main.init();
footer.init();
