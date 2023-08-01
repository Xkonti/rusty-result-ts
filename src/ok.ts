import { Err } from './err';

export class Ok<T, E> {
  public constructor (public readonly value: T) {}

  public isOk (): this is Ok<T, E> {
    return true;
  }

  public isErr (): this is Err<T, E> {
    return false;
  }
}


/**
 * Construct a new Ok result value.
 */
export const ok = <T, E>(value: T): Ok<T, E> => new Ok(value);