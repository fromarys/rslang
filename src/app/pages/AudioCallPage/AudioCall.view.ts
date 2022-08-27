import { Creator } from '../../components/Creator';
import Rules from './Rules/Rules';

export default class AudioCallView extends Creator {
  rules: Rules;
  constructor(parent: HTMLElement) {
    super(parent, 'div', 'audiocall__window');
    this.rules = new Rules(this.node);
  }
}
