/**
 * 取得 0 ~ MAX 的隨機整數
 * @param {*} max 最大值
 * @returns 隨機整數
 */
function get_random_int(max)
{
    try
    {
        return Math.floor(Math.random() * max);
    }
    catch (e)
    {
        console.log(e.message);
        throw e;
    }
}