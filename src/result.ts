import { Ok } from './ok';
import { Err } from './err';

export type Result<T, E> = Ok<T, E> | Err<T, E>
