// STAGES!
const STAGES = {

  stage1: {
    player: {
      top: 50,
      left: 50
    },
    enemies: [
      {
        top: 380,
        left: 260,
        id: 'enemy1',
        cssClass: 'enemy01',
        distance: 3,
        path: [{ direction: 1, times: 85 }, { direction: 3, times: 85 }]
      }
    ],
    goal: {
      top: 300,
      left: 540,
      width: 30,
      height: 60
    },
    obstacles: [
      {
        top: 30,
        left: 250,
        width: 92,
        height: 90,
        id: 'obstacle1',
        clase: 'obstacle01'
      },
      {
        top: 120,
        left: 470,
        width: 92,
        height: 90,
        id: 'obstacle2',
        clase: 'obstacle01'
      },
      {
        top: 170,
        left: 470,
        width: 92,
        height: 90,
        id: 'obstacle3',
        clase: 'obstacle01'
      },
      {
        top: 0,
        left: 0,
        width: 640,
        height: 70,
        id: 'obstacle4',
        clase: 'wall'
      }
    ],
    time: 100,
    backgroundImage: 'url(./assets/graphics/bg-game1_1.png)'
  },

  stage2: {
    player: {
      top: 400,
      left: 50
    },
    enemies: [
      {
        top: 150,
        left: 150,
        id: 'enemy1',
        cssClass: 'enemy02',
        distance: 1,
        path: [{ direction: 4, times: 150 }, { direction: 2, times: 150 }]
      },
      {

        top: 120,
        left: 250,
        id: 'enemy2',
        cssClass: 'enemy01',
        distance: 1,
        path: [{ direction: 3, times: 110 }, { direction: 1, times: 110 }]
      },
      {
        top: 310,
        left: 500,
        id: 'enemy3',
        cssClass: 'enemy03',
        distance: 3,
        path: [{ direction: 4, times: 80 }, { direction: 2, times: 80 }]
      }
    ],
    goal: {
      top: 40,
      left: 550,
      width: 30,
      height: 60
    },
    obstacles: [
      {
        top: 25,
        left: 0,
        width: 410,
        height: 72,
        id: 'obstacle1',
        clase: 'obstacle02'
      },
      {
        top: 55,
        left: 0,
        width: 410,
        height: 72,
        id: 'obstacle2',
        clase: 'obstacle02'
      },
      {
        top: 120,
        left: 470,
        width: 80,
        height: 72,
        id: 'obstacle3',
        clase: 'obstacle02'
      },
      {
        top: 150,
        left: 450,
        width: 80,
        height: 72,
        id: 'obstacle4',
        clase: 'obstacle02'
      },
      {
        top: 430,
        left: 140,
        width: 500,
        height: 50,
        id: 'obstacle5',
        clase: 'obstacle04'
      },
      {
        top: 405,
        left: 140,
        width: 500,
        height: 50,
        id: 'obstacle6',
        clase: 'obstacle04'
      },
      {
        top: 380,
        left: 140,
        width: 500,
        height: 50,
        id: 'obstacle7',
        clase: 'obstacle04'
      },
      {
        top: 0,
        left: 0,
        width: 640,
        height: 70,
        id: 'obstacle8',
        clase: 'wall'
      }
    ],
    time: 100,
    backgroundImage: 'url(./assets/graphics/bg-game2_1.png)'
  },

  stage3: {
    player: {
      top: 420,
      left: 580
    },
    enemies: [
      {
        top: 100,
        left: 180,
        id: 'enemy1',
        cssClass: 'enemy01',
        distance: 2,
        path: [{ direction: 4, times: 80 }, { direction: 3, times: 40 }, { direction: 2, times: 80 }, { direction: 1, times: 40 }]
      },
      {
        top: 30,
        left: 280,
        id: 'enemy2',
        cssClass: 'enemy02',
        distance: 4,
        path: [{ direction: 3, times: 50 }, { direction: 1, times: 50 }]
      },
      {
        top: 330,
        left: 370,
        id: 'enemy3',
        cssClass: 'enemy03',
        distance: 2,
        path: [{ direction: 4, times: 110 }, { direction: 2, times: 110 }]
      }
    ],
    goal: {
      top: 300,
      left: 30,
      width: 30,
      height: 60
    },
    obstacles: [
      {
        top: 100,
        left: 380,
        width: 150,
        height: 50,
        id: 'obstacle1',
        clase: 'obstacle05'
      },
      {
        top: 135,
        left: 360,
        width: 150,
        height: 50,
        id: 'obstacle2',
        clase: 'obstacle05'
      },
      {
        top: 170,
        left: 400,
        width: 150,
        height: 50,
        id: 'obstacle3',
        clase: 'obstacle05'
      },
      {
        top: 385,
        left: 0,
        width: 540,
        height: 90,
        id: 'obstacle4',
        clase: 'obstacle03'
      },
      {
        top: 355,
        left: 20,
        width: 490,
        height: 90,
        id: 'obstacle5',
        clase: 'obstacle03'
      },
      {
        top: 250,
        left: 180,
        width: 100,
        height: 50,
        id: 'obstacle6',
        clase: 'obstacle06'
      },
      {
        top: 275,
        left: 180,
        width: 100,
        height: 50,
        id: 'obstacle7',
        clase: 'obstacle06'
      },
      {
        top: 300,
        left: 180,
        width: 100,
        height: 50,
        id: 'obstacle8',
        clase: 'obstacle06'
      },
      {
        top: 0,
        left: 0,
        width: 640,
        height: 70,
        id: 'obstacle9',
        clase: 'wall'
      }

    ],
    time: 100,
    backgroundImage: 'url(./assets/graphics/bg-game3_1.png)'
  }
}
