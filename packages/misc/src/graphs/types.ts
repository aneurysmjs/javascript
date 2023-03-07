export interface Node {
  id: number;
  label: string;
}

export interface Edge {
  source: number;
  target: number;
}

export interface BaseGraph {
  nodes: Node[];
  edges: Edge[];
}

export type AdjancencyList = Map<number, number[]>;
