/**
 * 檢查最大節點數是否為合法輸入
 * @param {int} limit 最大節點數
 * @returns 布林值
 */
function is_valid_limit(limit)
{
    try
    {
        if (isNaN(limit))
        {
            return false;
        }
        if (limit > 25)
        {
            return false;
        }
        else if (limit < 2)
        {
            return false;
        }
        return true;
    }
    catch (e)
    {
        console.log(e.message);
    }
}