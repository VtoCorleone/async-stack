async function one() {
  throw new Error("blah");
}

async function two() {
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