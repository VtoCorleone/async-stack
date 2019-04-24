async function one() {
  throw new Error("blah");
}

async function breaker() {
  return true;
}

async function stack() {
  await breaker();
}

async function two() {
  await stack();
  await one();
}

async function three() {
  await two();
}

async function four() {
  try {
    await three();
  } catch (e) {
    console.log(e);
  }
}

four();