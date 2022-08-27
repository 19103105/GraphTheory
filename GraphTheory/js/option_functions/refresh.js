/**
 * 重整畫布
 */
function refresh_canvas()
{
    update_refresh_vertices_text();
    graph.generate(verticesLimitElement.value, edgesLimitElement.value);
}