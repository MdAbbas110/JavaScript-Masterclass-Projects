//A function that checks two function and compare which one id return higher value

function largestFun(f1, f2) {
  const f1Returns = f1();
  const f2Returns = f2();

  if (f1Returns === f2Returns) return 'no one';

  return f1Returns > f1Returns ? 'F1' : 'F2';
}
