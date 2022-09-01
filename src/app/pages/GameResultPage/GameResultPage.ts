import { baseUrl, IWord } from '../../basic';
import { Button, Creator } from '../../components';
import './result.scss';

export default class GameResultPage extends Creator {
  constructor(parent: HTMLElement, gameWords: IWord[], gameResult: boolean[], onExit: () => void) {
    super(
      parent,
      'div',
      'result',
      ` <input type="radio" class="result__radio" name="radio" id="radio1" checked>
        <input type="radio" class="result__radio" name="radio" id="radio2">`
    );
    // const radio1 = new Creator<HTMLInputElement>(this.node, 'input', 'result__checkbox');
    // radio1.node.type = 'radio';
    // radio1.node.name = 'radio';
    // radio1.node.id = 'radio1';
    // radio1.node.checked = true;
    // const radio2 = new Creator<HTMLInputElement>(this.node, 'input', 'result__checkbox');
    // radio2.node.type = 'radio';
    // radio2.node.name = 'radio';
    // radio2.node.id = 'radio2';

    const rightAnswers = gameResult.filter((el) => el).length;
    const wnd = new Creator(this.node, 'div', 'result__main-window');

    // Левое окно
    const wndLeft = new Creator(
      wnd.node,
      'div',
      'result__window-left',
      ` <div class="result__word_middle"><div class="result__result-sign result-sign_right"></div>
          <span>Правильных ответов: ${rightAnswers}</span></div>
        <div class="result__word_middle"><div class="result__result-sign result-sign_wrong"></div>
          <span>Неправильных ответов: ${gameResult.length - rightAnswers}</span></div>
        <br>
        <div class="result__word_middle">Ваш результат: ${Math.round((rightAnswers * 100) / gameResult.length)} %</div>`
    );
    const svgWrapper = new Creator(wndLeft.node, 'div', 'result__svg-wrapper');
    const diagram = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    diagram.setAttributeNS(null, 'viewBox', '0 0 100 100');
    diagram.setAttributeNS(null, 'width', '200');
    diagram.setAttributeNS(null, 'height', '200');
    this.drawPie(diagram, rightAnswers / gameResult.length);
    svgWrapper.node.append(diagram);

    // Правое окно
    const rightWnd = new Creator(wnd.node, 'div', 'result__window-right');
    const frame = new Creator(rightWnd.node, 'div', 'result__frame');
    gameWords.forEach((word: IWord, index) => {
      const audio = new Audio(`${baseUrl}/${word.audio}`);
      const line = new Creator(frame.node, 'div', 'result__line');
      const result = new Creator(line.node, 'div', 'result__result-sign');
      result.node.classList.add(gameResult[index] ? 'result-sign_right' : 'result-sign_wrong');
      const btn = new Button(line.node, 'result__play', '', () => audio.play());
      btn.node.disabled = true;
      audio.oncanplaythrough = () => {
        btn.node.disabled = false;
      };
      new Creator(line.node, 'span', 'result__word', word.word);
      new Creator(line.node, 'span', 'result__trascript', word.transcription);
      new Creator(line.node, 'span', 'result__word', ` - ${word.wordTranslate}`);
    });
    const lowBar = new Creator(
      this.node,
      'div',
      'low-bar',
      `<div></div><div class="low-bar__label-wrapper">
          <label for="radio1" class="low-bar__label"></label>
          <label for="radio2" class="low-bar__label"></label>
        </div>`
    );
    new Button(lowBar.node, 'result__exit', 'Exit', () => onExit());
  }

  drawPie(element: SVGSVGElement, angle: number) {
    const drSegment = function (style: string, ange1: number, ange2: number) {
      let dir = '0';
      if (ange2 - ange1 > 0.5) dir = '1';
      const angle1 = Math.PI * 2 * ange1;
      const angle2 = Math.PI * 2 * ange2;

      const rad = 45,
        cx = 50,
        cy = 50;

      const dx1 = Math.sin(angle1) * rad + cx;
      const dy1 = -Math.cos(angle1) * rad + cy;

      const dx2 = Math.sin(angle2) * rad + cx;
      const dy2 = -Math.cos(angle2) * rad + cy;

      const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      el.setAttributeNS(null, 'style', style);
      el.setAttributeNS(null, 'd', `M ${dx1},${dy1} A ${rad},${rad} 0 ${dir} 1 ${dx2},${dy2} L ${cx},${cy} Z`);

      element.appendChild(el);
    };

    if (angle !== 0) {
      drSegment('fill:lime; stroke:black; stroke-width:3;', 0, angle);
      drSegment('fill:red; stroke:black; stroke-width:3;', angle, 1);
    } else {
      drSegment('fill:red; stroke:black; stroke-width:3;', 0, 0.99);
    }
  }
}
