console.log(fibonacci(10));

function fibonacci(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
