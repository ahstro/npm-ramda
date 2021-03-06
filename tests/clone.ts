import { List } from '../ramda/dist/src/$types';
import R_clone = require('../ramda/dist/src/clone');

declare const number: number;
declare const string_list: List<string>;

// @dts-jest:pass:snap
R_clone(number);
// @dts-jest:pass:snap
R_clone(string_list);
