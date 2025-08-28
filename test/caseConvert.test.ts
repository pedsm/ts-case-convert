import {
  objectToCamel,
  objectToSnake,
  toSnake,
  ToCamel,
  ToSnake,
  toCamel,
  ObjectToSnake,
  toPascal,
  objectToPascal,
  ToPascal,
  toConstant,
  objectToConstant,
  ToConstant,
} from '../src/caseConvert';

describe('Property name converter', () => {
  it('converts to camelCase', () => {
    const testToCamel = objectToCamel({
      hello_world: 'helloWorld',
      a_number: 5,
      an_array: [1, 2, 4],
      null_object: null,
      undef_object: undefined,
      an_array_of_objects: [{ a_b: 'ab', a_c: 'ac' }],
      an_object: {
        a_1: 'a1',
        a_2: 'a2',
        a_3: {
          b_4: 'b4',
        },
      },
      ['a-kebab']: 'k1',
    });

    expect('helloWorld' in testToCamel).toStrictEqual(true);
    expect('hello_world' in testToCamel).not.toStrictEqual(true);
    expect(testToCamel.aNumber).toEqual(5);
    expect(testToCamel.helloWorld).toEqual('helloWorld');
    expect(testToCamel.anArray).toEqual([1, 2, 4]);
    expect(testToCamel.nullObject).toBeNull();
    expect(testToCamel.undefObject).toBeUndefined();
    expect(testToCamel.anArrayOfObjects[0].aB).toEqual('ab');
    expect(testToCamel.anArrayOfObjects[0].aC).toEqual('ac');
    expect(testToCamel.anObject.a1).toEqual('a1');
    expect(testToCamel.anObject.a2).toEqual('a2');
    expect(testToCamel.anObject.a3.b4).toEqual('b4');
    expect(testToCamel.aKebab).toEqual('k1');
  });

  it('converts to snake_case', () => {
    const testToSnake = objectToSnake({
      helloWorld: 'helloWorld',
      aNumber: 5,
      anArray: [1, 2, 4],
      nullObject: null,
      undefObject: undefined,
      anArrayOfObjects: [{ aB: 'ab', aC: 'ac' }],
      anObject: {
        A1: 'a_1',
        A2: 'a_2',
        A3: {
          B4: 'b_4',
        },
      },
    });

    expect('helloWorld' in testToSnake).toStrictEqual(false);
    expect('hello_world' in testToSnake).toStrictEqual(true);
    expect(testToSnake.a_number).toEqual(5);
    expect(testToSnake.hello_world).toEqual('helloWorld');
    expect(testToSnake.an_array).toEqual([1, 2, 4]);
    expect(testToSnake.null_object).toBeNull();
    expect(testToSnake.undef_object).toBeUndefined();
    expect(testToSnake.an_array_of_objects[0].a_b).toEqual('ab');
    expect(testToSnake.an_array_of_objects[0].a_c).toEqual('ac');
    expect(testToSnake.an_object.a1).toEqual('a_1');
    expect(testToSnake.an_object.a2).toEqual('a_2');
    expect(testToSnake.an_object.a3.b4).toEqual('b_4');
  });

  it('converts to PascalCase from camelCase', () => {
    const testToPascal = objectToPascal({
      helloWorld: 'helloWorld',
      aNumber: 5,
      anArray: [1, 2, 4],
      nullObject: null,
      undefObject: undefined,
      anArrayOfObjects: [{ aB: 'ab', aC: 'ac' }],
      anObject: {
        A1: 'a_1',
        A2: 'a_2',
        A3: {
          B4: 'b_4',
        },
      },
    });

    expect('helloWorld' in testToPascal).toStrictEqual(false);
    expect('HelloWorld' in testToPascal).toStrictEqual(true);
    expect(testToPascal.ANumber).toEqual(5);
    expect(testToPascal.HelloWorld).toEqual('helloWorld');
    expect(testToPascal.AnArray).toEqual([1, 2, 4]);
    expect(testToPascal.NullObject).toBeNull();
    expect(testToPascal.UndefObject).toBeUndefined();
    expect(testToPascal.AnArrayOfObjects[0].AB).toEqual('ab');
    expect(testToPascal.AnArrayOfObjects[0].AC).toEqual('ac');
    expect(testToPascal.AnObject.A1).toEqual('a_1');
    expect(testToPascal.AnObject.A2).toEqual('a_2');
    expect(testToPascal.AnObject.A3.B4).toEqual('b_4');
  });

  it('converts to PascalCase from snake_case', () => {
    const testToPascal = objectToPascal({
      hello_world: 'helloWorld',
      a_number: 5,
      an_array: [1, 2, 4],
      null_object: null,
      undef_object: undefined,
      an_array_of_objects: [{ a_b: 'ab', a_c: 'ac' }],
      an_object: {
        a_1: 'a1',
        a_2: 'a2',
        a_3: {
          b_4: 'b4',
        },
      },
      ['a-kebab']: 'k1',
    });

    expect('helloWorld' in testToPascal).toStrictEqual(false);
    expect('HelloWorld' in testToPascal).toStrictEqual(true);
    expect(testToPascal.ANumber).toEqual(5);
    expect(testToPascal.HelloWorld).toEqual('helloWorld');
    expect(testToPascal.AnArray).toEqual([1, 2, 4]);
    expect(testToPascal.NullObject).toBeNull();
    expect(testToPascal.UndefObject).toBeUndefined();
    expect(testToPascal.AnArrayOfObjects[0].AB).toEqual('ab');
    expect(testToPascal.AnArrayOfObjects[0].AC).toEqual('ac');
    expect(testToPascal.AnObject.A1).toEqual('a1');
    expect(testToPascal.AnObject.A2).toEqual('a2');
    expect(testToPascal.AnObject.A3.B4).toEqual('b4');
    expect(testToPascal.AKebab).toEqual('k1');
  });

  it('converts to CONSTANT_CASE', () => {
    const testToConstant = objectToConstant({
      helloWorld: 'helloWorld',
      aNumber: 5,
      anArray: [1, 2, 4],
      nullObject: null,
      undefObject: undefined,
      anArrayOfObjects: [{ aB: 'ab', aC: 'ac' }],
      anObject: {
        A1: 'a_1',
        A2: 'a_2',
        A3: {
          B4: 'b_4',
        },
      },
    });

    expect('helloWorld' in testToConstant).toStrictEqual(false);
    expect('HELLO_WORLD' in testToConstant).toStrictEqual(true);
    expect(testToConstant.A_NUMBER).toEqual(5);
    expect(testToConstant.HELLO_WORLD).toEqual('helloWorld');
    expect(testToConstant.AN_ARRAY).toEqual([1, 2, 4]);
    expect(testToConstant.NULL_OBJECT).toBeNull();
    expect(testToConstant.UNDEF_OBJECT).toBeUndefined();
    expect(testToConstant.AN_ARRAY_OF_OBJECTS[0].A_B).toEqual('ab');
    expect(testToConstant.AN_ARRAY_OF_OBJECTS[0].A_C).toEqual('ac');
    expect(testToConstant.AN_OBJECT.A1).toEqual('a_1');
    expect(testToConstant.AN_OBJECT.A2).toEqual('a_2');
    expect(testToConstant.AN_OBJECT.A3.B4).toEqual('b_4');
  });

  it('converts to CONSTANT_CASE from snake_case', () => {
    const testToConstant = objectToConstant({
      hello_world: 'helloWorld',
      a_number: 5,
      an_array: [1, 2, 4],
      null_object: null,
      undef_object: undefined,
      an_array_of_objects: [{ a_b: 'ab', a_c: 'ac' }],
      an_object: {
        a_1: 'a1',
        a_2: 'a2',
        a_3: {
          b_4: 'b4',
        },
      },
      ['a_kebab']: 'k1',
    });

    expect('hello_world' in testToConstant).toStrictEqual(false);
    expect('HELLO_WORLD' in testToConstant).toStrictEqual(true);
    expect(testToConstant.A_NUMBER).toEqual(5);
    expect(testToConstant.HELLO_WORLD).toEqual('helloWorld');
    expect(testToConstant.AN_ARRAY).toEqual([1, 2, 4]);
    expect(testToConstant.NULL_OBJECT).toBeNull();
    expect(testToConstant.UNDEF_OBJECT).toBeUndefined();
    expect(testToConstant.AN_ARRAY_OF_OBJECTS[0].A_B).toEqual('ab');
    expect(testToConstant.AN_ARRAY_OF_OBJECTS[0].A_C).toEqual('ac');
    expect(testToConstant.AN_OBJECT.A_1).toEqual('a1');
    expect(testToConstant.AN_OBJECT.A_2).toEqual('a2');
    expect(testToConstant.AN_OBJECT.A_3.B_4).toEqual('b4');
    expect(testToConstant.A_KEBAB).toEqual('k1');
  });
});

describe('Regular expressions', () => {
  it('converts to camelCase', () => {
    expect(toCamel('hello_world')).toEqual('helloWorld');
    expect(toCamel('the_quick_brown_fox_jumps_over_the_lazy_dog')).toEqual(
      'theQuickBrownFoxJumpsOverTheLazyDog',
    );
    expect(toCamel('abc')).toEqual('abc');
    expect(toCamel('abc')).toEqual('abc');
    expect(toCamel('a_b_c')).toEqual('aBC');
    expect(toCamel('ab_c')).toEqual('abC');
    expect(toCamel('a_b')).toEqual('aB');
    expect(toCamel('a_b')).toEqual('aB');
    expect(toCamel('abc_d')).toEqual('abcD');
    expect(toCamel('abc_d')).toEqual('abcD');
    expect(toCamel('ab_cde')).toEqual('abCde');
    expect(toCamel('abc_d_e_f')).toEqual('abcDEF');
    expect(toCamel('ab_cdef_g')).toEqual('abCdefG');
    expect(toCamel('ab_cd_e_f_gh')).toEqual('abCdEFGh');
    expect(toCamel('A')).toEqual('a');
    expect(toCamel('a1')).toEqual('a1');
    expect(toCamel('a_1')).toEqual('a1');
    expect(toCamel('a_1c_2d')).toEqual('a1c2d');
    expect(toCamel('ab_1c_2_d')).toEqual('ab1c2D');
    expect(toCamel('ab_1c_2d')).toEqual('ab1c2d');
    expect(toCamel('ab_25')).toEqual('ab25');
    expect(toCamel('abc_e25_d50')).toEqual('abcE25D50');
    expect(toCamel('abc_25_d50')).toEqual('abc25D50');
    expect(toCamel('abc_25_a50')).toEqual('abc25A50');
    expect(toCamel('a-kebab_case')).toEqual('aKebabCase');
  });

  it('converts from PascalCase to camelCase', () => {
    expect(toCamel('HelloWorld')).toEqual('helloWorld');
    expect(toCamel('helloWorld')).toEqual('helloWorld');
    expect(toCamel('8HelloWorld')).toEqual('8HelloWorld');
    expect(toCamel('Abc')).toEqual('abc');
    expect(toCamel('ABC')).toEqual('aBC');
    expect(toCamel('AbC')).toEqual('abC');
    expect(toCamel('AB')).toEqual('aB');
    expect(toCamel('AbcD')).toEqual('abcD');
    expect(toCamel('AbCde')).toEqual('abCde');
    expect(toCamel('AbcDEF')).toEqual('abcDEF');
    expect(toCamel('AbCdefG')).toEqual('abCdefG');
    expect(toCamel('AbCdEFGh')).toEqual('abCdEFGh');
    expect(toCamel('A')).toEqual('a');
    expect(toCamel('A1')).toEqual('a1');
    expect(toCamel('A1c2d')).toEqual('a1c2d');
    expect(toCamel('Ab1c2D')).toEqual('ab1c2D');
    expect(toCamel('Ab1c2d')).toEqual('ab1c2d');
    expect(toCamel('Ab25')).toEqual('ab25');
    expect(toCamel('AbcE25D50')).toEqual('abcE25D50');
    expect(toCamel('Abc25D50')).toEqual('abc25D50');
    expect(toCamel('Abc25A50')).toEqual('abc25A50');
    expect(toCamel('Abc_def_jkl-mno')).toEqual('abcDefJklMno');
  });

  it('converts to PascalCase', () => {
    expect(toPascal('hello_world')).toEqual('HelloWorld');
    expect(toPascal('the_quick_brown_fox_jumps_over_the_lazy_dog')).toEqual(
      'TheQuickBrownFoxJumpsOverTheLazyDog',
    );
    expect(toPascal('abc')).toEqual('Abc');
    expect(toPascal('a_b_c')).toEqual('ABC');
    expect(toPascal('ab_c')).toEqual('AbC');
    expect(toPascal('a_b')).toEqual('AB');
    expect(toPascal('a_b')).toEqual('AB');
    expect(toPascal('abc_d')).toEqual('AbcD');
    expect(toPascal('abc_d')).toEqual('AbcD');
    expect(toPascal('ab_cde')).toEqual('AbCde');
    expect(toPascal('abc_d_e_f')).toEqual('AbcDEF');
    expect(toPascal('ab_cdef_g')).toEqual('AbCdefG');
    expect(toPascal('ab_cd_e_f_gh')).toEqual('AbCdEFGh');
    expect(toPascal('A')).toEqual('A');
    expect(toPascal('a1')).toEqual('A1');
    expect(toPascal('a_1')).toEqual('A1');
    expect(toPascal('a_1c_2d')).toEqual('A1c2d');
    expect(toPascal('ab_1c_2_d')).toEqual('Ab1c2D');
    expect(toPascal('ab_1c_2d')).toEqual('Ab1c2d');
    expect(toPascal('ab_25')).toEqual('Ab25');
    expect(toPascal('abc_e25_d50')).toEqual('AbcE25D50');
    expect(toPascal('abc_25_d50')).toEqual('Abc25D50');
    expect(toPascal('abc_25_a50')).toEqual('Abc25A50');
  });

  it('converts to snake case', () => {
    expect(toSnake('helloWorld')).toEqual('hello_world');
    expect(toSnake('theQuickBrownFoxJumpsOver')).toEqual(
      'the_quick_brown_fox_jumps_over',
    );
    expect(toSnake('Abc')).toEqual('abc');
    expect(toSnake('abc')).toEqual('abc');
    expect(toSnake('ABC')).toEqual('a_b_c');
    expect(toSnake('abC')).toEqual('ab_c');
    expect(toSnake('AB')).toEqual('a_b');
    expect(toSnake('aB')).toEqual('a_b');
    expect(toSnake('AbcD')).toEqual('abc_d');
    expect(toSnake('abcD')).toEqual('abc_d');
    expect(toSnake('abCde')).toEqual('ab_cde');
    expect(toSnake('abcDEF')).toEqual('abc_d_e_f');
    expect(toSnake('abCdefG')).toEqual('ab_cdef_g');
    expect(toSnake('AbCdEFGh')).toEqual('ab_cd_e_f_gh');
    expect(toSnake('A')).toEqual('a');
    expect(toSnake('A1')).toEqual('a1');
    expect(toSnake('a1')).toEqual('a_1');
    expect(toSnake('a1c2d')).toEqual('a_1c_2d');
    expect(toSnake('ab1c2D')).toEqual('ab_1c_2_d');
    expect(toSnake('ab1c2d')).toEqual('ab_1c_2d');
    expect(toSnake('ab25')).toEqual('ab_25');
    expect(toSnake('abcE25D50')).toEqual('abc_e25_d50');
    expect(toSnake('abc25D50')).toEqual('abc_25_d50');
    expect(toSnake('abc25A50')).toEqual('abc_25_a50');
  });

  it('converts to CONSTANT_CASE', () => {
    expect(toConstant('hello_world')).toEqual('HELLO_WORLD');
    expect(toConstant('the_quick_brown_fox_jumps_over_the_lazy_dog')).toEqual(
      'THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG',
    );
    expect(toConstant('abc')).toEqual('ABC');
    expect(toConstant('a_b_c')).toEqual('A_B_C');
    expect(toConstant('ab_c')).toEqual('AB_C');
    expect(toConstant('a_b')).toEqual('A_B');
    expect(toConstant('abc_d')).toEqual('ABC_D');
    expect(toConstant('ab_cde')).toEqual('AB_CDE');
    expect(toConstant('abc_d_e_f')).toEqual('ABC_D_E_F');
    expect(toConstant('ab_cdef_g')).toEqual('AB_CDEF_G');
    expect(toConstant('ab_cd_e_f_gh')).toEqual('AB_CD_E_F_GH');
    expect(toConstant('A')).toEqual('A');
    expect(toConstant('a1')).toEqual('A_1');
    expect(toConstant('a_1')).toEqual('A_1');
    expect(toConstant('a_1c_2d')).toEqual('A_1C_2D');
    expect(toConstant('ab_1c_2_d')).toEqual('AB_1C_2_D');
    expect(toConstant('ab_1c_2d')).toEqual('AB_1C_2D');
    expect(toConstant('ab_25')).toEqual('AB_25');
    expect(toConstant('abc_e25_d50')).toEqual('ABC_E_25_D_50');
    expect(toConstant('abc_25_d50')).toEqual('ABC_25_D_50');
    expect(toConstant('abc_25_a50')).toEqual('ABC_25_A_50');
    expect(toConstant('a-kebab_case')).toEqual('A-KEBAB_CASE');
  });

  it('converts from camelCase to CONSTANT_CASE', () => {
    expect(toConstant('helloWorld')).toEqual('HELLO_WORLD');
    expect(toConstant('theQuickBrownFoxJumpsOver')).toEqual(
      'THE_QUICK_BROWN_FOX_JUMPS_OVER',
    );
    expect(toConstant('Abc')).toEqual('ABC');
    expect(toConstant('abc')).toEqual('ABC');
    expect(toConstant('ABC')).toEqual('A_B_C');
    expect(toConstant('abC')).toEqual('AB_C');
    expect(toConstant('AB')).toEqual('A_B');
    expect(toConstant('aB')).toEqual('A_B');
    expect(toConstant('AbcD')).toEqual('ABC_D');
    expect(toConstant('abcD')).toEqual('ABC_D');
    expect(toConstant('abCde')).toEqual('AB_CDE');
    expect(toConstant('abcDEF')).toEqual('ABC_D_E_F');
    expect(toConstant('abCdefG')).toEqual('AB_CDEF_G');
    expect(toConstant('AbCdEFGh')).toEqual('AB_CD_E_F_GH');
    expect(toConstant('A')).toEqual('A');
    expect(toConstant('A1')).toEqual('A1');
    expect(toConstant('a1')).toEqual('A_1');
    expect(toConstant('a1c2d')).toEqual('A_1C_2D');
    expect(toConstant('ab1c2D')).toEqual('AB_1C_2_D');
    expect(toConstant('ab1c2d')).toEqual('AB_1C_2D');
    expect(toConstant('ab25')).toEqual('AB_25');
    expect(toConstant('abcE25D50')).toEqual('ABC_E25_D50');
    expect(toConstant('abc25D50')).toEqual('ABC_25_D50');
    expect(toConstant('abc25A50')).toEqual('ABC_25_A50');
  });
});

type NotAny<T> = T[] extends true[] ? T : T[] extends false[] ? T : never;
type AssertEqual<T, Expected> = NotAny<
  T extends Expected ? (Expected extends T ? true : false) : false
>;

type T0 = ToCamel<'hello_world'>;
const _t0: AssertEqual<T0, 'helloWorld'> = true;

type T1 = ToSnake<'helloWorld'>;
const _s1: AssertEqual<T1, 'hello_world'> = true;
type T2 = ToSnake<'theQuickBrownFoxJumpsOver'>;
const _s2: AssertEqual<T2, 'the_quick_brown_fox_jumps_over'> = true;
type T3 = ToSnake<'abc'>;
const _s3: AssertEqual<T3, 'abc'> = true;
type T4 = ToSnake<'Abc'>;
const _s4: AssertEqual<T4, 'abc'> = true;
type T5 = ToSnake<'ABC'>;
const _s5: AssertEqual<T5, 'a_b_c'> = true;
type T6 = ToSnake<'abC'>;
const _s6: AssertEqual<T6, 'ab_c'> = true;
type T7 = ToSnake<'ABc'>;
const _s7: AssertEqual<T7, 'a_bc'> = true;
type T8 = ToSnake<'AB'>;
const _s8: AssertEqual<T8, 'a_b'> = true;
type T9 = ToSnake<'aB'>;
const _s9: AssertEqual<T9, 'a_b'> = true;
type T10 = ToSnake<'AbcD'>;
const _s10: AssertEqual<T10, 'abc_d'> = true;
type T11 = ToSnake<'abcD'>;
const _s11: AssertEqual<T11, 'abc_d'> = true;
type T12 = ToSnake<'abCde'>;
const _s12: AssertEqual<T12, 'ab_cde'> = true;
type T13 = ToSnake<'abcDEF'>;
const _s13: AssertEqual<T13, 'abc_d_e_f'> = true;
type T14 = ToSnake<'abCdefG'>;
const _s14: AssertEqual<T14, 'ab_cdef_g'> = true;
type T15 = ToSnake<'AbCdEFGh'>;
const _s15: AssertEqual<T15, 'ab_cd_e_f_gh'> = true;
type T16 = ToSnake<'A'>;
const _s16: AssertEqual<T16, 'a'> = true;
type T161 = ToSnake<'A1'>;
const _s161: AssertEqual<T161, 'a1'> = true;
type T17 = ToSnake<'a1c2d'>;
const _s17: AssertEqual<T17, 'a_1c_2d'> = true;
type T18 = ToSnake<'ab1c2D'>;
const _s18: AssertEqual<T18, 'ab_1c_2_d'> = true;
type T19 = ToSnake<'ab1c2d'>;
const _s19: AssertEqual<T19, 'ab_1c_2d'> = true;
type T20 = ToSnake<'abc25'>;
const _s20: AssertEqual<T20, 'abc_25'> = true;
type T21 = ToSnake<'abcE25D50'>;
const _s21: AssertEqual<T21, 'abc_e25_d50'> = true;
type T22 = ToSnake<'abc25D50'>;
const _s22: AssertEqual<T22, 'abc_25_d50'> = true;
type T23 = ToSnake<'abc25A50'>;
const _s23: AssertEqual<T23, 'abc_25_a50'> = true;
type T25 = ToSnake<'a'>;
const _s25: AssertEqual<T25, 'a'> = true;
type T36 = ToSnake<'abc1'>;
const _s36: AssertEqual<T36, 'abc_1'> = true;

interface I24 {
  optionalObject?: {
    aProp: string;
    bProp:
      | {
          cProp: string;
        }
      | undefined;
  };
}

interface I242 {
  optional_object?: {
    a_prop: string;
    b_prop:
      | {
          c_prop: string;
        }
      | undefined;
  };
}

const _c24: I24 = {
  optionalObject: {
    aProp: 'a',
    bProp: {
      cProp: 'c',
    },
  },
};
const _c242: I242 = objectToSnake(_c24);

const _s24: AssertEqual<I242, ObjectToSnake<I24>> = true;

type T26 = ToCamel<'HelloWorld'>;
const _t26: AssertEqual<T26, 'helloWorld'> = true;
type T27 = ToCamel<'helloWorld'>;
const _t27: AssertEqual<T27, 'helloWorld'> = true;
type T28 = ToCamel<'8HelloWorld'>;
const _t28: AssertEqual<T28, '8HelloWorld'> = true;

type T29 = ToCamel<'abc-def-jkl-mno'>;
const _t29: AssertEqual<T29, 'abcDefJklMno'> = true;

type T30 = ToCamel<'abc_def-jkl_mno'>;
const _t30: AssertEqual<T30, 'abcDefJklMno'> = true;

type T31 = ToCamel<'abc_def_jkl_mno'>;
const _t31: AssertEqual<T31, 'abcDefJklMno'> = true;

type T32 = ToCamel<'abc-def_jkl-mno'>;
const _t32: AssertEqual<T32, 'abcDefJklMno'> = true;

type T33 = ToPascal<'abc_def-jkl_mno'>;
const _t33: AssertEqual<T33, 'AbcDefJklMno'> = true;

type T34 = ToPascal<'abc_def_jkl_mno'>;
const _t34: AssertEqual<T34, 'AbcDefJklMno'> = true;

type T35 = ToPascal<'abc-def_jkl-mno'>;
const _t35: AssertEqual<T35, 'AbcDefJklMno'> = true;

type TC1 = ToConstant<'hello_world'>;
const _tc1: AssertEqual<TC1, 'HELLO_WORLD'> = true;
type TC2 = ToConstant<'helloWorld'>;
const _tc2: AssertEqual<TC2, 'HELLO_WORLD'> = true;
type TC3 = ToConstant<'theQuickBrownFoxJumpsOver'>;
const _tc3: AssertEqual<TC3, 'THE_QUICK_BROWN_FOX_JUMPS_OVER'> = true;
type TC4 = ToConstant<'abc'>;
const _tc4: AssertEqual<TC4, 'ABC'> = true;
type TC5 = ToConstant<'Abc'>;
const _tc5: AssertEqual<TC5, 'ABC'> = true;
type TC6 = ToConstant<'ABC'>;
const _tc6: AssertEqual<TC6, 'A_B_C'> = true;
type TC7 = ToConstant<'abC'>;
const _tc7: AssertEqual<TC7, 'AB_C'> = true;
type TC8 = ToConstant<'AB'>;
const _tc8: AssertEqual<TC8, 'A_B'> = true;
type TC9 = ToConstant<'aB'>;
const _tc9: AssertEqual<TC9, 'A_B'> = true;
type TC10 = ToConstant<'AbcD'>;
const _tc10: AssertEqual<TC10, 'ABC_D'> = true;
type TC11 = ToConstant<'abcD'>;
const _tc11: AssertEqual<TC11, 'ABC_D'> = true;
type TC12 = ToConstant<'abCde'>;
const _tc12: AssertEqual<TC12, 'AB_CDE'> = true;
type TC13 = ToConstant<'abcDEF'>;
const _tc13: AssertEqual<TC13, 'ABC_D_E_F'> = true;
type TC14 = ToConstant<'abCdefG'>;
const _tc14: AssertEqual<TC14, 'AB_CDEF_G'> = true;
type TC15 = ToConstant<'AbCdEFGh'>;
const _tc15: AssertEqual<TC15, 'AB_CD_E_F_GH'> = true;
type TC16 = ToConstant<'A'>;
const _tc16: AssertEqual<TC16, 'A'> = true;
type TC17 = ToConstant<'A1'>;
const _tc17: AssertEqual<TC17, 'A1'> = true;
type TC18 = ToConstant<'a1'>;
const _tc18: AssertEqual<TC18, 'A_1'> = true;
type TC19 = ToConstant<'a1c2d'>;
const _tc19: AssertEqual<TC19, 'A_1C_2D'> = true;
type TC20 = ToConstant<'ab1c2D'>;
const _tc20: AssertEqual<TC20, 'AB_1C_2_D'> = true;
type TC21 = ToConstant<'ab1c2d'>;
const _tc21: AssertEqual<TC21, 'AB_1C_2D'> = true;
type TC22 = ToConstant<'ab25'>;
const _tc22: AssertEqual<TC22, 'AB_25'> = true;
type TC23 = ToConstant<'abcE25D50'>;
const _tc23: AssertEqual<TC23, 'ABC_E25_D50'> = true;
type TC24 = ToConstant<'abc25D50'>;
const _tc24: AssertEqual<TC24, 'ABC_25_D50'> = true;
type TC25 = ToConstant<'abc25A50'>;
const _tc25: AssertEqual<TC25, 'ABC_25_A50'> = true;

interface I243 {
  nullable_object: { a_prop: string } | null;
}

const _c243: I243 = {
  nullable_object: {
    a_prop: 'a',
  },
};
interface I2432 {
  nullableObject: { aProp: string } | null;
}

const _c2432: I2432 = objectToCamel(_c243);

const _s243: AssertEqual<I243, ObjectToSnake<I2432>> = true;
