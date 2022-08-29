/**
 * 重整畫布
 */
function refresh_canvas()
{
    update_inputs();
    graph.set_vertex_limit(verticesLimitElement.value);
    graph.set_edge_limit(edgesLimitElement.value);
    graph.set_path(startVertexElement.value, endVertexElement.value);
    graph.generate();
}

function refresh_edges()
{
    update_inputs();
    graph.set_edge_limit(edgesLimitElement.value);
    graph.set_path(startVertexElement.value, endVertexElement.value);
    graph.generate(0);
}

function refresh_path()
{
    update_inputs();
    graph.set_path(startVertexElement.value, endVertexElement.value);
    graph.generate(0, 0);
}