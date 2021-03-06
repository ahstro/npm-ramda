import R_mergeWith = require('../ramda/dist/src/mergeWith');

declare const number_number_to_string: (a: number, b: number) => string;
declare const a_1_c_1: { a: 1; c: 1 };
declare const b_2_c_2: { b: 2; c: 2 };

// @dts-jest:pass:snap -> Pick<{ a: 1; c: 1; }, "a"> & Pick<{ b: 2; c: 2; }, "b"> & Record<"c", string>
R_mergeWith(number_number_to_string)(a_1_c_1)(b_2_c_2);
// @dts-jest:pass:snap -> Pick<{ a: 1; c: 1; }, "a"> & Pick<{ b: 2; c: 2; }, "b"> & Record<"c", string>
R_mergeWith(number_number_to_string, a_1_c_1, b_2_c_2);
