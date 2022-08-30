const verticesLimitElement = document.querySelector("#vertices-limit-input");
const verticesRefreshBtn   = document.querySelector("#vertices-refresh-btn");
const edgesLimitElement    = document.querySelector("#edges-limit-input");
const edgesRefreshBtn      = document.querySelector("#edges-refresh-btn");
const logCtn               = document.querySelector("#log-ctn");
const startVertexElement   = document.querySelector("#start-vertex-input");
const startRefresh         = document.querySelector("#start-vertex-refresh-btn");
const endVertexElement     = document.querySelector("#end-vertex-input");
const endRefresh           = document.querySelector("#end-vertex-refresh-btn");

let graph = new Graph();
let adjacencyMatrix = new AdjacencyMatrix();
adjust_inputs();
refresh_vertices();
refresh_edges();
refresh_path();

adjacencyMatrix.set_matrix_size(graph.vertexLimit);
adjacencyMatrix.set_adjacency(graph.edges);
adjacencyMatrix.set_grids();