export interface Node {
  id: number;
  label: string;
}

export interface Edge {
  source: number;
  target: number;
}

export interface EdgeStr {
  source: string;
  target: string;
}

export interface BaseGraph {
  nodes: Node[];
  edges: Edge[];
}

export interface KeyedNodeGraph {
  nodes: {
    [K: string]: any;
  };
  edges: EdgeStr[];
}

export interface FlightEdge extends EdgeStr {
  distance: number;
  airline: string;
}

export type AdjacencyList = Map<number, number[]>;

export type AdjacencyListStr = Map<string, string[]>;

export type AdjacencyFlights = Map<string, FlightEdge[]>;
