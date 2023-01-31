import type { Node } from './base.mjs';
import type { Expressions } from './expressions.mjs';

export interface Program extends Omit<Node, 'type'> {
  type: 'Program';
  body: Expressions[];
}
