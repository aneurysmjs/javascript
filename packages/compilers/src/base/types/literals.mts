import type { Node } from './base.mjs';

export interface NumberLiteral extends Omit<Node, 'type'> {
  type: 'NumberLiteral';
  value: number;
}

export interface StringLiteral extends Omit<Node, 'type'> {
  type: 'StringLiteral';
  value: string;
}

export type Literal = {};
