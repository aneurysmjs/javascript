import { describe, it, expect } from '@jest/globals';

import { add } from './manipulation';

describe('manipulation', () => {
  describe('add', () => {
    it('adds an object with a single property with empty object as default value', () => {
      const target = {};
      const result = { some: {} };

      expect(add(target, 'some')).toStrictEqual(result);
    });

    it('adds a nested object with empty object as default value', () => {
      const target = {};
      const result = { some: { nested: {} } };

      expect(add(target, 'some.nested')).toStrictEqual(result);
    });

    it('adds an object with a single property with a given value', () => {
      const target = {};
      const result = { some: 'foo' };

      expect(add(target, 'some', 'foo')).toStrictEqual(result);
    });

    it('adds a nested object with a given value', () => {
      const target = {};
      const result = { some: { nested: 'value' } };

      expect(add(target, 'some.nested', 'value')).toStrictEqual(result);
    });

    it('adds an object from other with a single property with empty object as default value', () => {
      const target = { other: {} };
      const result = { other: {}, some: {} };

      expect(add(target, 'some')).toStrictEqual(result);
    });

    it('adds an object from other with a single property with a given value', () => {
      const target = { other: {} };
      const result = { other: {}, some: 'value' };

      expect(add(target, 'some', 'value')).toStrictEqual(result);
    });

    it('adds an object from other with a single property with empty object as default value', () => {
      const target = { other: {} };
      const result = { other: {}, some: {} };

      expect(add(target, 'some')).toStrictEqual(result);
    });

    it('adds an object to an existing path', () => {
      const target = { other: {} };
      const result = { other: 'value' };

      expect(add(target, 'other', 'value')).toStrictEqual(result);
    });

    it('adds an object to a nested existing path', () => {
      const target = { other: { nested: {} } };
      const result = { other: { nested: 'value' } };

      expect(add(target, 'other.nested', 'value')).toStrictEqual(result);
    });
  });
});
