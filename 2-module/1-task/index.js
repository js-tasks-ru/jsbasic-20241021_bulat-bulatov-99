function sumSalary(salaries) {
  let sum = 0;
  for(let item in salaries) {
    let value = salaries[item];
    if (typeof value === 'number' && Number.isFinite(value)) {
      sum += value;
    }
  }
  return sum;
}
