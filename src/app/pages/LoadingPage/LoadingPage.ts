import Creator from '../../components/Creator/Creator';
import './loadingpage.scss';

export default class LoadingPage extends Creator {
  constructor(parent: HTMLElement) {
    super(parent, 'div', 'loading');
    this.node.innerHTML = `
      <div class="loading__text">Loading...</div>
      <div class="loading__outer-box">
        <div class="loading__inner-box inner-box1"></div>
        <div class="loading__inner-box inner-box2"></div>
        <div class="loading__inner-box inner-box3"></div>
        <div class="loading__inner-box inner-box4"></div>
      </div>
    `;
  }
}
