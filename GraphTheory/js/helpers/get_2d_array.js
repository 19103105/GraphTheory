/**
 * 取得指定大小的二維陣列
 * @param {int} size 二維陣列大小
 * @return 二維陣列
 */
function get_2d_array(size)
{
    let array  =[];

    for (let i = 0; i < size; i++)
    {
        array[i] = [];

        for (let j = 0; j < size; j++)
        {
            array[i][j] = 0;
        }
    }
    return array;
}