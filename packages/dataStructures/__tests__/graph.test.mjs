import makeGraph from '../src/graph';

let graphAPI = {};

let graph = new Map();

const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const destinations = [['b', 'c'], ['d'], ['e'], ['f'], [], []];

beforeEach(() => {
  graphAPI = makeGraph();

  nodes.forEach(graphAPI.addNode);

  nodes.forEach((node, index) => {
    graphAPI.addEdge(node, destinations[index]);
  });

  graph = graphAPI.getGraph();
});

describe('Graph', () => {
  test('should have the proper methods', () => {
    expect(graphAPI).toHaveProperty('getGraph');
    expect(graphAPI).toHaveProperty('addNode');
    expect(graphAPI).toHaveProperty('addEdge');
    expect(graphAPI).toHaveProperty('depthFirstSearch');
    expect(graphAPI).toHaveProperty('breathFirstSearch');
  });

  test('should create a graph "as an adjacency list"', () => {
    const api = makeGraph();

    nodes.forEach(api.addNode);

    nodes.forEach((node, index) => {
      api.addEdge(node, destinations[index]);
    });

    const newGraph = api.getGraph();

    expect(newGraph.has('a')).toEqual(true);
    expect(newGraph.has('b')).toEqual(true);
    expect(newGraph.has('c')).toEqual(true);
    expect(newGraph.has('d')).toEqual(true);
    expect(newGraph.has('e')).toEqual(true);
    expect(newGraph.has('f')).toEqual(true);

    expect(newGraph.get('a')).toEqual(expect.arrayContaining(['b', 'c']));
    expect(newGraph.get('b')).toEqual(expect.arrayContaining(['d']));
    expect(newGraph.get('c')).toEqual(expect.arrayContaining(['e']));
    expect(newGraph.get('d')).toEqual(expect.arrayContaining(['f']));
    expect(newGraph.get('e')).toEqual(expect.arrayContaining([]));
    expect(newGraph.get('f')).toEqual(expect.arrayContaining([]));
  });

  test('DFS traverse', () => {
    const result = [];
    graphAPI.depthFirstSearch('a', (node) => result.push(node));

    expect(result).toStrictEqual(['a', 'b', 'd', 'f', 'c', 'e']);
  });

  test('BFS traverse', () => {
    const result = [];
    graphAPI.breathFirstSearch('a', (node) => result.push(node));

    console.log('result', result);

    expect(result).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});
