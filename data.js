export let array = [];
class Stronghold {
  constructor(
    bomber,
    archer,
    box,
    finisher,
    scoreTeam,
    scoreOponent,
    time,
    win
  ) {
    this.bomber = bomber;
    this.archer = archer;
    this.box = box;
    this.monikaFinisher = finisher;
    this.scoreTeam = scoreTeam;
    this.scoreOponent = scoreOponent;
    this.time = time;
    this.win = win;
  }
}

array.push(new Stronghold(4, 1, true, true, 425, 160, 127, true));
array.push(new Stronghold(5, 0, false, true, 435, 95, 141, true));
array.push(new Stronghold(4, 0, false, false, 425, 110, 144, true));
array.push(new Stronghold(5, 0, false, false, 625, 170, 815, false));
array.push(new Stronghold(4, 0, false, false, 515, 130, 354, false));

export let global = {
  games: array.length,
  bomber: 0,
  archer: 0,
  box: 0,
  monikaFinisher: 0,
  scoreTeam: 0,
  scoreOponent: 0,
  time: 0,
  win: 0,
};

for (let ele of array) {
  for (let x in ele) {
    if (ele[x]) {
      global[x] += ele[x];
    }
  }
}

export let average = {
  bomber: global.bomber / array.length,
  archer: global.archer / array.length,
};
