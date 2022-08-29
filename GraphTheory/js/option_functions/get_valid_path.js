/**
 * 修正路徑起點與終點
 * @param {int} startVertexId 起點編號
 * @param {int} endVertexId 終點編號
 * @returns array 0:startVertexId, 1:endVertexId
 */
function get_valid_path(startVertexId, endVertexId)
{
    try
    {
        if (isNaN(startVertexId))
        {
            startVertexId = 0;
        }
        if (startVertexId < 0)
        {
            startVertexId = 0
        }
        if (startVertexId > verticesLimitElement.value -1)
        {
            startVertexId = verticesLimitElement.value -1
        }

        if (isNaN(endVertexId))
        {
            endVertexId = 0;
        }
        if (endVertexId < 0)
        {
            endVertexId = 0
        }
        if (endVertexId > verticesLimitElement.value -1)
        {
            endVertexId = verticesLimitElement.value -1
        }
        return [startVertexId, endVertexId];
    }
    catch (e)
    {
        console.log(e.message);
        return 10;
    }
}