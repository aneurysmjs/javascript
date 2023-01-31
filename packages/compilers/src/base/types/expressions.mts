import type { Node } from './base.mjs';
import type { NumberLiteral } from './literals.mjs';

export interface Expression extends Node {}

export interface CallExpression extends Omit<Expression, 'type'> {
  type: 'CallExpression';
  name: string;
  arguments: NumberLiteral[];
}

export type Expressions = CallExpression;
