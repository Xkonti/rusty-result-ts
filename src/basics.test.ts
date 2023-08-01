import { test, expect } from 'vitest';
import { ok } from './ok';
import {err} from './err';
import {Result} from './result.ts';

test('test Ok object', () => {
  const value = 154987;
  const theOk = ok<number, string>(value);
  expect(theOk.isOk()).toBe(true);
  expect(theOk.isErr()).toBe(false);
  expect(theOk.value).toBe(value);
});

test('test Err object', () => {
  const error = 'error';
  const theErr = err<number, string>(error);
  expect(theErr.isOk()).toBe(false);
  expect(theErr.isErr()).toBe(true);
  expect(theErr.error).toBe(error);
});

test('test Result object', () => {
  const value = 'hello';
  let result: Result<string, number> = ok(value);
  expect(result.isOk()).toBe(true);
  expect(result.isErr()).toBe(false);
  expect(result.value).toBe(value);

  result = err(123);
  expect(result.isOk()).toBe(false);
  expect(result.isErr()).toBe(true);
  expect(result.error).toBe(123);
});