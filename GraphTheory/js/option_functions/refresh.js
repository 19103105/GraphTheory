/**
 * 重整畫布
 */
function refresh_vertices()
{
    adjust_inputs();
    graph.set_vertex_limit();
    adjacencyMatrix.set_matrix_size(verticesLimitElement.value);
    adjacencyMatrix.set_adjacency(graph.edges);
    adjacencyMatrix.set_grids();
    graph.generate(1, 0, 1);
}

function refresh_edges()
{
    adjust_inputs();
    graph.set_edge_limit();
    adjacencyMatrix.set_adjacency(graph.edges);
    adjacencyMatrix.set_grids();
    graph.generate(0, 1, 1);
}

function refresh_path()
{
    adjust_inputs();
    graph.set_path();
    graph.generate(0, 0, 1);
}