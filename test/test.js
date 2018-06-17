import test from 'ava';
import getTicker from '../helpers/getTicker';
import getSupply from '../helpers/getCircuSupply';
import estimateHash from '../helpers/estimateHash';

test('getTicker', async t => {
  let { price, volume_24h } = await getTicker();
  t.not(price, null);
  t.not(volume_24h, null);
});

test('getCircSupply', async t => {
  let circSupply = await getSupply();
  t.not(circSupply, null);
  t.true(circSupply > 0);
});

test('estimateHash', async t => {
  let hashRate = await estimateHash();
  t.not(hashRate, null);
  t.true(hashRate > 0);
});

test('marketCap', async t => {
  let circSupply = await getSupply();
  let { price } = await getTicker();
  let marketCap = price * circSupply;
  t.not(marketCap, undefined);
  t.true(marketCap > 0);
});
