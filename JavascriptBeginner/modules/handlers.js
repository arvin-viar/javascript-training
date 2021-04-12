/* eslint-disable no-plusplus */
/* eslint-disable no-console */
export async function handleButtonClick(event) {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
