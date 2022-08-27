function update_refresh_vertices_text()
{
    let vLimit = verticesLimitElement.value;
    let bLimit = edgesLimitElement.value;

    if (vLimit > 25)
    {
        vLimit = 25;
    }
    if (vLimit < 2)
    {
        vLimit = 2;
    }

    if (bLimit > vLimit * (vLimit - 1) / 2)
    {
        edgesLimitElement.value = vLimit * (vLimit - 1) / 2;
    }

    if (edgesLimitElement.value > 100)
    {
        edgesLimitElement.value = 100;
    }

    if (edgesLimitElement.value < 0)
    {
        edgesLimitElement.value = 0;
    }

    startVertex.value = 0
    verticesLimitElement.value = vLimit;
    endVertex.value = verticesLimitElement.value -1;
}