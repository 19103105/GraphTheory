function get_valid_edge_limit(edgeLimit)
{
    try
    {
        let vertexLimit  = verticesLimitElement.value;
        // n 個節點能被以 m 條邊連接？：n(n-1)/2
        let maxEdgeLimit = vertexLimit * (vertexLimit - 1) / 2;

        if (isNaN(edgeLimit))
        {
            edgeLimit = vertexLimit;
        }
        if (edgeLimit < 1)
        {
            edgeLimit = 1;
        }
        if (edgeLimit > maxEdgeLimit)
        {
            edgeLimit = maxEdgeLimit
        }
        return edgeLimit;
    }
    catch (e)
    {
        console.log(e.message);
        return 10;
    }
}