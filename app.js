const templates = [
  {
    name: 'airplane',
    level: 'easy',
    img: [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0]],
  },
  {
    name: 'bat',
    level: 'easy',
    img: [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1]],
  },
  {
    name: 'tower',
    level: 'easy',
    img: [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]],
  },
  {
    name: 'dog',
    level: 'easy',
    img: [[0, 0, 0, 1, 0], [1, 0, 1, 1, 1], [0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0]],
  },
  {
    name: 'skull',
    level: 'easy',
    img: [[0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0]],
  },
  {
    name: 'tree',
    level: 'medium',
    img: [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 0, 0, 1, 1], [1, 1, 1, 0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
  },
  {
    name: 'tv',
    level: 'medium',
    img: [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]],
  },
  {
    name: 'snail',
    level: 'medium',
    img: [[0, 0, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 0, 1, 1, 1, 0, 0], [1, 0, 1, 1, 1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 0, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
  },
  {
    name: 'mouse',
    level: 'medium',
    img: [[0, 0, 1, 1, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 0, 1], [0, 1, 0, 1, 1, 1, 1, 1, 0, 1], [0, 0, 1, 1, 0, 1, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
  },
  {
    name: 'question',
    level: 'medium',
    img: [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
  },
  {
    name: 'deer',
    level: 'hard',
    img: [[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1], [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]],
  },
  {
    name: 'flower',
    level: 'hard',
    img: [[0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0], [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0], [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0]],
  },
  {
    name: 'castle',
    level: 'hard',
    img: [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1], [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
  },
  {
    name: 'duck',
    level: 'hard',
    img: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]],
  },
  {
    name: 'alarm',
    level: 'hard',
    img: [[0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]],
  }
];

class Game {
  constructor(templates) {
    this.templates = templates;

    this.isAudio = false;
    this.clickAudio = new Audio('assets/click.mp3');
    this.winAudio = new Audio('assets/win.mp3');
    this.crossAudio = new Audio('assets/cross.mp3');

    this.currentGame = this.templates[0];

    this.leftClues = this.createCluesElement('left', this.getLeftClues(this.currentGame.img));
    this.topClues = this.createCluesElement('top', this.getTopClues(this.currentGame.img));
    this.gameFrame = this.createFrameElement(this.currentGame.img);

    this.gameField = this.createGameFieldElement(this.topClues, this.leftClues, this.gameFrame);

    this.menu = this.createMenuElement();
    this.scoreTable = this.createScoreElement();
    this.updateScoreTable(JSON.parse(localStorage.getItem('results')));

    this.element = this.createGameElement(this.menu, this.scoreTable, this.gameField);
    document.body.append(this.element);

    this.isTimer = false;

    this.setCounters();

    this.addListeners();
  }

  createGameElement = (manageField, scoreTable, gameField) => {
    const game = document.createElement('section');
    game.classList.add('game');
    game.append(manageField, scoreTable, gameField);

    return game;
  }

  createMenuElement = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    const themeSoundHeader = document.createElement('h2');
    themeSoundHeader.classList.add('menu__name');
    themeSoundHeader.textContent = 'theme & sounds';
    menuContainer.append(themeSoundHeader);

    const themeBtn = document.createElement('button');
    themeBtn.classList.add('menu__btn');
    themeBtn.classList.add('theme-btn');
    themeBtn.dataset.btn = 'theme';
    themeBtn.textContent = 'theme: ';
    menuContainer.append(themeBtn);
    this.themeBtn = themeBtn;

    const themeBtnLeft = document.createElement('span');
    themeBtnLeft.classList.add('theme-btn__text');
    themeBtnLeft.textContent = 'light/';
    themeBtn.append(themeBtnLeft);

    const themeBtnRight = document.createElement('span');
    themeBtnRight.classList.add('theme-btn__text');
    themeBtnRight.textContent = 'dark';
    themeBtn.append(themeBtnRight);

    const soundBtn = document.createElement('button');
    soundBtn.classList.add('menu__btn');
    soundBtn.classList.add('sound-btn');
    soundBtn.dataset.btn = 'sound';
    soundBtn.textContent = 'sound: ';
    menuContainer.append(soundBtn);
    this.soundBtn = soundBtn;

    const soundBtnLeft = document.createElement('span');
    soundBtnLeft.classList.add('sound-btn__text');
    soundBtnLeft.textContent = 'on/';
    soundBtn.append(soundBtnLeft);

    const soundBtnRight = document.createElement('span');
    soundBtnRight.classList.add('sound-btn__text');
    soundBtnRight.textContent = 'off';
    soundBtn.append(soundBtnRight);

    const saveContinueHeader = document.createElement('h2');
    saveContinueHeader.classList.add('menu__name');
    saveContinueHeader.textContent = 'save & continue';
    menuContainer.append(saveContinueHeader);

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('menu__btn');
    saveBtn.classList.add('save-btn');
    saveBtn.dataset.btn = 'save';
    saveBtn.textContent = 'save game';
    menuContainer.append(saveBtn);
    this.saveBtn = saveBtn;

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('menu__btn');
    continueBtn.classList.add('continue-btn');
    continueBtn.dataset.btn = 'continue';
    continueBtn.textContent = 'continue last game';
    menuContainer.append(continueBtn);
    this.continueBtn = continueBtn;

    const templatesHeader = document.createElement('h2');
    templatesHeader.classList.add('menu__name');
    templatesHeader.textContent = 'templates';
    menuContainer.append(templatesHeader);

    const templatesSelect = document.createElement('select');
    templatesSelect.classList.add('menu__select');
    templatesSelect.classList.add('template-select');
    templatesSelect.dataset.select = 'template';
    templatesSelect.name = 'template';
    menuContainer.append(templatesSelect);
    this.templatesSelect = templatesSelect;

    const easySelectGroup = document.createElement('optgroup');
    easySelectGroup.label = 'easy 5x5';
    templatesSelect.append(easySelectGroup);

    const mediumSelectGroup = document.createElement('optgroup');
    mediumSelectGroup.label = 'medium 10x10';
    templatesSelect.append(mediumSelectGroup);

    const hardSelectGroup = document.createElement('optgroup');
    hardSelectGroup.label = 'hard 15x15';
    templatesSelect.append(hardSelectGroup);

    this.templates.forEach(e => {
      const option = document.createElement('option');
      option.value = e.name;
      option.textContent = e.name;
      if (e.level === 'easy') {
        easySelectGroup.append(option);
      }
      if (e.level === 'medium') {
        mediumSelectGroup.append(option);
      }
      if (e.level === 'hard') {
        hardSelectGroup.append(option);
      }
    });

    const optionsHeader = document.createElement('h2');
    optionsHeader.classList.add('menu__name');
    optionsHeader.textContent = 'more options';
    menuContainer.append(optionsHeader);

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('menu__btn');
    resetBtn.classList.add('reset-btn');
    resetBtn.dataset.btn = 'reset';
    resetBtn.textContent = 'reset game';
    menuContainer.append(resetBtn);
    this.resetBtn = resetBtn;

    const solutionBtn = document.createElement('button');
    solutionBtn.classList.add('menu__btn');
    solutionBtn.classList.add('solution-btn');
    solutionBtn.dataset.btn = 'solution';
    solutionBtn.textContent = 'solution';
    menuContainer.append(solutionBtn);
    this.solutionBtn = solutionBtn;

    const randomBtn = document.createElement('button');
    randomBtn.classList.add('menu__btn');
    randomBtn.classList.add('random-btn');
    randomBtn.dataset.btn = 'random';
    randomBtn.textContent = 'random game';
    menuContainer.append(randomBtn);
    this.randomBtn = randomBtn;

    const timer = document.createElement('p');
    timer.classList.add('menu__timer');
    timer.textContent = '00:00';
    menuContainer.append(timer);
    this.timer = timer;

    return menuContainer;
  }

  createCluesElement = (side, clues) => {
    const cluesContainer = document.createElement('div');
    cluesContainer.classList.add(`field__${side}-clues`);
    cluesContainer.classList.add(`${side}-clues`);

    const cluesNodes = clues.map(e => {
      const cluesRow = document.createElement('div');
      cluesRow.classList.add(`${side}-clues__row`);

      e.forEach(el => {
        const cluesEl = document.createElement('span');
        cluesEl.classList.add(`${side}-clues__el`);
        cluesEl.textContent = el;

        cluesRow.append(cluesEl);
      });

      return cluesRow;
    });

    cluesContainer.append(...cluesNodes);

    return cluesContainer;
  }

  createFrameElement = (gameImg) => {
    const frameContainer = document.createElement('div');
    frameContainer.classList.add('field__frame');
    frameContainer.classList.add('frame');

    gameImg.forEach(el => {
      el.forEach(el => {
        const frameCell = document.createElement('div');
        frameCell.classList.add('frame__cell');
        frameCell.dataset.value = el;
        frameCell.dataset.color = 'w';

        frameContainer.append(frameCell);
      })
    });

    return frameContainer;
  }

  createGameFieldElement = (topClues, leftClues, frame) => {
    const gameField = document.createElement('div');
    gameField.classList.add('field');
    gameField.style.setProperty("--size", this.getFieldSize(this.currentGame.level));
    gameField.append(topClues, leftClues, frame);

    return gameField;
  }

  createModalElement = (time) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container');

    const modalMsg = document.createElement('p');
    modalMsg.classList.add('modal__msg');
    modalMsg.textContent = `Great! You have solved the nonogram in ${time} seconds!`;

    const resetModalBtn = document.createElement('button');
    resetModalBtn.classList.add('modal__btn');
    resetModalBtn.textContent = 'reset game';
    resetModalBtn.onclick = this.modalResetHandler;

    const randomModalBtn = document.createElement('button');
    randomModalBtn.classList.add('modal__btn');
    randomModalBtn.textContent = 'random game';
    randomModalBtn.onclick = this.modalRandomHandler;

    modalContainer.append(modalMsg, resetModalBtn, randomModalBtn);
    modal.append(modalContainer);
    this.modal = modal;

    return modal;
  }

  modalResetHandler = () => {
    this.modal.remove();
    this.resetGame();
  }

  modalRandomHandler = () => {
    this.modal.remove();
    this.setRandomGame();
  }

  createScoreElement = () => {
    const container = document.createElement('section');
    container.classList.add('scores');

    const scoresTitle = document.createElement('h2');
    scoresTitle.classList.add('scores__title');
    scoresTitle.textContent = 'last 5 scores:';
    container.append(scoresTitle);

    const scoreList = document.createElement('ol');
    scoreList.classList.add('scores__list');
    container.append(scoreList);
    this.scores = scoreList;

    return container;
  }

  updateScoreTable = (scores) => {
    this.scores.innerHTML = '';
    if (scores) {
      const sortTime = (a, b) => {
        const aSec = +a.time.slice(0, 2) * 60 + +a.time.slice(3);
        const bSec = +b.time.slice(0, 2) * 60 + +b.time.slice(3);
        return aSec - bSec;
      };
      const sortScores = scores.sort(sortTime);
      sortScores.forEach(e => {
        const li = document.createElement('li');
        li.classList.add('scores__item');
        li.textContent = `${e.game} - ${e.level} - ${e.time}`;
        this.scores.append(li);
      });
    }
  }

  getFieldSize = (gameLevel) => {
    if (gameLevel === 'easy') {
      return 5;
    }
    if (gameLevel === 'medium') {
      return 10;
    }
    if (gameLevel === 'hard') {
      return 15;
    }
  }

  getLeftClues = (gameImg) => {
    const leftClues = [];
    gameImg.forEach(e => {
      let block = 0;
      const row = [];

      const firstIndex = e.indexOf(1);
      if (firstIndex !== -1) {
        for (let i = firstIndex; i < e.length; i++) {
          if (e[i] !== 0) {
            block++;
          } else if (block !== 0) {
            row.push(block);
            block = 0;
          }
        }
      }

      if (block !== 0) {
        row.push(block);
      }

      leftClues.push(row);
    });

    return leftClues;
  }

  getTopClues = (gameImg) => {
    const topClues = [];

    for (let i = 0; i < gameImg.length; i++) {
      topClues[i] = [];
      for (let j = 0; j < gameImg.length; j++) {
        topClues[i].push(gameImg[j][i]);
      }
    }

    return this.getLeftClues(topClues);
  }

  startTimer = (m = 0, s = 0) => {
    this.isTimer = true;
    let sec = s;
    let min = m;
    this.timerFunc = setInterval(() => {
      sec += 1;
      if (sec === 60) {
        sec = 0;
        min += 1;
      }
      this.timer.textContent = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    }, 1000);
  }

  stopTimer = () => {
    const time = this.timer.textContent;
    this.isTimer = false;
    clearInterval(this.timerFunc);
    this.timer.textContent = `00:00`;
    return time;
  }

  saveGame = () => {
    const savedGame = {};
    savedGame.name = this.currentGame.name;
    savedGame.cells = [...this.gameFrame.childNodes].map(e => {
      const cell = {};
      cell.color = e.dataset.color;
      cell.isCross = e.classList.contains('cross');
      return cell;
    });
    savedGame.time = this.timer.textContent;
    savedGame.wCounter = this.wrongCounter;
    savedGame.tCounter = this.trueCounter;
    localStorage.setItem('savedGame', JSON.stringify(savedGame));
  }

  loadGame = () => {
    if (!localStorage.getItem('savedGame')) {
      return;
    }

    const savedGame = JSON.parse(localStorage.getItem('savedGame'));

    this.changeGame(savedGame.name);
    this.setSelectValue();

    savedGame.cells.forEach((e, i) => {
      this.gameFrame.childNodes[i].dataset.color = e.color;
      if (e.isCross) {
        this.gameFrame.childNodes[i].classList.add('cross');
      }
    });

    const min = +savedGame.time.slice(0, 2);
    const sec = +savedGame.time.slice(3);
    this.startTimer(min, sec);

    this.wrongCounter = savedGame.wCounter;
    this.trueCounter = savedGame.tCounter;
  }

  saveResult = (data) => {
    if (!localStorage.getItem('results')) {
      const saveData = [];
      saveData.push(data);
      localStorage.setItem('results', JSON.stringify(saveData));
    } else {
      const prevData = JSON.parse(localStorage.getItem('results'));
      if (prevData.length < 5) {
        prevData.push(data);
        localStorage.setItem('results', JSON.stringify(prevData));
      } else {
        prevData.pop();
        prevData.unshift(data);
        localStorage.setItem('results', JSON.stringify(prevData));
      }
    }
  }

  getSaveData = (name, level, endTime) => {
    const saveObj = {
      game: name,
      level: level,
      time: endTime,
    };
    return saveObj;
  }

  checkEndGame = () => {
    if (!this.wrongCounter && !this.trueCounter) {
      if (this.isAudio) {
        this.winAudio.play();
      }
      return true;
    }
    return false;
  }

  checkAnswer = (cell) => {
    const value = cell.dataset.value;
    const color = cell.dataset.color;

    if (value === '1' && color === 'b') {
      this.trueCounter -= 1;
    }

    if (value === '1' && color === 'w') {
      this.trueCounter += 1;
    }

    if (value === '0' && color === 'b') {
      this.wrongCounter += 1;
    }

    if (value === '0' && color === 'w') {
      this.wrongCounter -= 1;
    }
  }

  changeCell = (cell) => {
    const cellColor = cell.dataset.color;
    if (cellColor === 'w') {
      cell.dataset.color = 'b';
      return;
    }
    if (cellColor === 'b') {
      cell.dataset.color = 'w';
    }
  }

  gameFrameHandler = (event) => {
    const target = event.target.closest('.frame__cell');
    if (event.button === 0) {
      if (target) {
        if (this.isAudio) {
          this.clickAudio.play();
        }
        if (!this.isTimer) {
          this.startTimer();
        }
        this.changeCell(target);
        this.checkAnswer(target);
        if (this.checkEndGame()) {
          const endTime = this.stopTimer();
          this.saveResult(this.getSaveData(this.currentGame.name, this.currentGame.level, endTime));
          this.updateScoreTable(JSON.parse(localStorage.getItem('results')));
          document.body.append(this.createModalElement(endTime));
        }
      }
    }
  }

  gameFrameRightClickHandler = (event) => {
    event.preventDefault();
    const target = event.target.closest('.frame__cell');
    if (target) {
      if (this.isAudio) {
        this.crossAudio.play();
      }
      if (!this.isTimer) {
        this.startTimer();
      }
      target.classList.toggle('cross');
    }
  }

  addListeners = () => {
    this.addMenuListeners();
    this.addGameFrameListeners();
  }

  addMenuListeners = () => {
    this.resetBtn.addEventListener('click', this.resetGame);
    this.themeBtn.addEventListener('click', this.changeTheme);
    this.solutionBtn.addEventListener('click', this.showSolution);
    this.randomBtn.addEventListener('click', this.setRandomGame);
    this.templatesSelect.addEventListener('change', this.selectGameHandler);
    this.soundBtn.addEventListener('click', this.switchSound);
    this.saveBtn.addEventListener('click', this.saveGame);
    this.continueBtn.addEventListener('click', this.loadGame);
  }

  addGameFrameListeners = () => {
    this.gameFrame.addEventListener('pointerdown', this.gameFrameHandler);
    this.gameFrame.addEventListener('contextmenu', this.gameFrameRightClickHandler);
  }

  removeGameFrameListeners = () => {
    this.gameFrame.removeEventListener('pointerdown', this.gameFrameHandler);
    this.gameFrame.removeEventListener('contextmenu', this.gameFrameRightClickHandler);
  }

  switchSound = () => {
    if (this.isAudio) {
      this.isAudio = false;
    } else {
      this.isAudio = true;
    }
    this.soundBtn.classList.toggle('on-sound');
  }

  selectGameHandler = (event) => {
    this.changeGame(event.target.value);
  }

  changeGame = (gameName) => {
    this.currentGame = this.templates.find(e => e.name === gameName);
    this.setGame();
    this.stopTimer();
  }

  setSelectValue = () => {
    this.templatesSelect.value = this.currentGame.name;
  }

  setGame = () => {
    this.gameField.remove();
    this.leftClues = this.createCluesElement('left', this.getLeftClues(this.currentGame.img));
    this.topClues = this.createCluesElement('top', this.getTopClues(this.currentGame.img));
    this.gameFrame = this.createFrameElement(this.currentGame.img);
    this.gameField = this.createGameFieldElement(this.topClues, this.leftClues, this.gameFrame);
    this.element.append(this.gameField);
    this.setCounters();
    this.addGameFrameListeners();
  }

  setCounters = () => {
    this.wrongCounter = 0;
    this.trueCounter = this.gameFrame.querySelectorAll(`[data-value="1"]`).length;
  }

  resetGame = () => {
    this.gameFrame.childNodes.forEach(e => {
      e.dataset.color = 'w';
      e.classList.remove('cross');
    });
    this.setCounters();
    this.unBlockgame();
    this.stopTimer();
  }

  changeTheme = () => {
    document.body.classList.toggle('dark-theme');
    this.themeBtn.classList.toggle('on-dark');
  }

  showSolution = () => {
    this.gameFrame.childNodes.forEach(e => {
      if (e.dataset.value === '0') {
        e.dataset.color = 'w';
      } else if (e.dataset.value === '1') {
        e.dataset.color = 'b';
      }
    });
    this.blockGame();
    this.stopTimer();
  }

  blockGame = () => {
    this.menu.classList.add('disable');
    this.themeBtn.disabled = true;
    this.soundBtn.disabled = true;
    this.saveBtn.disabled = true;
    this.continueBtn.disabled = true;
    this.templatesSelect.disabled = true;
    this.solutionBtn.disabled = true;
    this.randomBtn.disabled = true;
    this.removeGameFrameListeners();
  }

  unBlockgame = () => {
    this.addGameFrameListeners();
    this.menu.classList.remove('disable');
    this.themeBtn.disabled = false;
    this.soundBtn.disabled = false;
    this.saveBtn.disabled = false;
    this.continueBtn.disabled = false;
    this.templatesSelect.disabled = false;
    this.solutionBtn.disabled = false;
    this.randomBtn.disabled = false;
  }

  setRandomGame = () => {
    this.currentGame = this.templates[Math.floor(Math.random() * this.templates.length)];
    this.setGame();
    this.setCounters();
    this.setSelectValue();
    this.stopTimer();
  }
}

const game = new Game(templates);