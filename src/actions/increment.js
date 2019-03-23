export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function incCounter(inc) {
  return {
    type: INCREMENT_COUNTER,
    payload: inc
  }
}