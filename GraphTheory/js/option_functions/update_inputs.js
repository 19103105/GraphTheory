function adjust_inputs()
{
    try
    {
        // 節點數修正
        verticesLimitElement.value = get_valid_vertex_limit(verticesLimitElement.value);

        // 修正邊的數量
        edgesLimitElement.value = get_valid_edge_limit(edgesLimitElement.value);

        // 修正路徑起點與終點
        let path = get_valid_path(startVertexElement.value, endVertexElement.value);
        startVertexElement.value = path[0];
        endVertexElement.value   = path[1];
    }
    catch (e)
    {
        console.log(e.message);
    }
}