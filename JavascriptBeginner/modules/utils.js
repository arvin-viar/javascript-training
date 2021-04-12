const last = 'Viar';
const middle = 'Torrizo';

export function returnHi(name) {
  return `Hi ${name} ${last}`;
}
const first = 'Arvin';
// NAMED exports - we can have as many as we want
export { last, middle };
export default first;
