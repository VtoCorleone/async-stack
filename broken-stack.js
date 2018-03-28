async function one() {
  throw new Error("blah");
}

async function breaker() {
  return true;
}

async function stack() {
  try {
    await breaker();
  } catch (error) {
    throw error;
  }
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