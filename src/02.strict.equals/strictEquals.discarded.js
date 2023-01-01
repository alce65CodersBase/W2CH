export const strictEquals9 = (a, b) => {
  if (
    (Object.is(a, NaN) && Object.is(NaN, b)) ||
    (Object.is(0, b) && Object.is(a, -0)) ||
    (Object.is(-0, b) && Object.is(a, 0))
  ) {
    return !Object.is(a, b);
  }

  return Object.is(a, b);
};

export const strictEquals10a = (a, b) => {
  // Exceptions

  // Excepción nº1.   NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  // Excepción nº2. 0 y -0
  if (
    (Object.is(a, -0) && Object.is(b, 0)) ||
    (Object.is(b, -0) && Object.is(a, 0))
  ) {
    return true;
  }
  // Todas las demás comparaciones devuelven booleano correcto
  return Object.is(a, b);
};

export function strictEquals10b(a, b) {
  if (Object.is(a, b)) {
    // eslint-disable-next-line no-unneeded-ternary
    return !(Object.is(a, NaN) && Object.is(b, NaN)) ? true : false;
  }
  // eslint-disable-next-line no-unneeded-ternary
  return (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
    ? true
    : false;
}
