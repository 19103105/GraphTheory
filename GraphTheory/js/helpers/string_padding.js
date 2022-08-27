/**
 * 將所有輸入以二位數的格式回傳
 * @param {int} i 輸入
 */
function string_padding(i)
{
    try
    {
        if (i < 10)
        {
            return '0' + i
        }
        return i;
    }
    catch (e)
    {
        console.log(e.message);
        throw e;
    }
}