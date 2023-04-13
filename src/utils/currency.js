import Numeral from 'numeral';
import 'numeral/locales/pt-br';

// switch between locales
Numeral.locale('pt-br');

export const convertCurrencyBRLToFloat = inputValue => {
  if (!inputValue) inputValue = '0.00';

  return parseFloat(
    inputValue
      .replace(/[^0-9,\.]/g, '')
      .replace(/[\.]/g, '')
      .replace(',', '.')
  );
};

export const floatToBRL = (money, currencySymbol) => {
  if (!currencySymbol) return Numeral(money).format('0,0.00');
  return Numeral(money).format('$0,0.00');
};