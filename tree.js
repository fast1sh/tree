const renderTree = (n) => {
  const width = n + n - 1;

  const render = (currentLvl, points, acc) => {
    if (currentLvl === n) {
      return acc;
    }

    const [ start, finish ] = points;
    const hasToy = currentLvl % 2 === 0 ? true : false;
    const toyPosition = start + Math.floor(Math.random() * (finish + 1 - start));
    let newLine = ``;

    for(let i = 0; i < width; i += 1) {

      if (hasToy && i === toyPosition) {
        newLine = `${newLine}o`;
        continue;
      }

      const item = i < start || i > finish ? '_' : '*';
      newLine = `${newLine}${item}`;
    }

    const newAcc = `${newLine}\n${acc}`;

    return render(currentLvl + 1, [start + 1, finish - 1], newAcc);
  };

  console.log(render(0, [0, width - 1], ``));
};
