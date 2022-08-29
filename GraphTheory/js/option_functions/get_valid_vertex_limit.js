function get_valid_vertex_limit(vertexLimit = 10)
{
    try
    {
        if (isNaN(vertexLimit))
        {
            vertexLimit = 10;
        }
        if (vertexLimit < 2)
        {
            vertexLimit = 2;
        }
        if (vertexLimit > 25)
        {
            vertexLimit = 25
        }
        return vertexLimit;
    }
    catch (e)
    {
        console.log(e.message);
        return 10;
    }
}