function soal1() {
    let pattern = '';
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5; j++) {
        pattern += (i * j) + ' ';
      }
      pattern += '\n';
    }
    return pattern;
}

export { soal1 };
