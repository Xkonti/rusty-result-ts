import { Ok } from './ok'

export class Err<T, E> {
  // eslint-disable-next-line node/handle-callback-err
  public constructor (public readonly error: E) {}

  public isOk (): this is Ok<T, E> {
    return false
  }

  public isErr (): this is Err<T, E> {
    return true
  }
}

/**
 * Construct a new Err result value.
 */
export const err = <T, E>(error: E): Err<T, E> => new Err(error)
