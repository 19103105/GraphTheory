class Canvas
{
    /**
     * 畫布物件
     */
    canvasElement = document.querySelector("canvas");

    /**
     * 畫布
     */
    canvas = this.canvasElement.getContext("2d");

    /**
     * 建構畫布
     */
    constructor()
    {
        this.canvas.font = "20px Arial";
    }

    /**
     * 指定畫布元素
     * @param {string} id 元素 id
     */
    set_canvas(id)
    {
        try
        {
            this.canvasElement = document.querySelector(id);
            this.canvas = this.canvasElement.getContext("2d");
        }
        catch (e)
        {
            throw e;
        }
    }

    /**
     * 回傳指定兩點之間的距離
     * @param {*} x1 點 1 的 X 座標
     * @param {*} y1 點 1 的 Y 座標
     * @param {*} x2 點 2 的 X 座標
     * @param {*} y2 點 2 的 Y 座標
     * @returns 兩點之間的距離
     */
    get_distance(x1, y1, x2, y2)
    {
        try
        {
            let width  = Math.floor(Math.abs(x1 - x2));
            let height = Math.floor(Math.abs(y1 - y2));
            return this.get_triangle_side(width, height);;
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 回傳直角三角形上指定寬與高的邊長
     * @param {*} w 寬
     * @param {*} h 高
     * @returns 邊長
     */
    get_triangle_side(w, h)
    {
        try
        {
            // 公式：⌊ √ ( w² + h² ) ⌋
            return Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)));
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 回傳圓上指定節點數的所有內角
     * @param {int} max 節點數
     * @returns 內角陣列
     */
    get_theta(max)
    {
        try
        {
            let theta         = [];
            let adjustAngle   = Math.PI / 2;
            let maxThetaAngle = Math.PI * 2;
            /**
             * 公式: θₙ = 2π/max * n - π/2
             * 
             * θ = 內角
             * n = 第幾個節點
             * m = 節點數
             * π = 180°
             * 
             * 2π/max 可取得單個節點的內角
             * -π/2 可將預設內角移至 90° 的方向
             */
            for (let n = 0; n < max; n++)
            {
                theta[n] = maxThetaAngle / max * n - adjustAngle;
            }
            return theta;
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 取得三角函數上指定內角與半徑（距圓心距離）的座標
     * @see https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Trig_functions_on_unit_circle_zh.PNG/240px-Trig_functions_on_unit_circle_zh.PNG
     * @param {*} theta 內角
     * @param {int} radious 半徑，預設為 200
     * @returns 物件包裝 X 與 Y 座標
     */
    get_trigonometric_coords(theta, radious = 200)
    {
        try
        {
            /**
             * θ = 內角
             * x = cosθ
             * y = sinθ
             */
            return {
                x: (this.canvasElement.width / 2 + Math.cos(theta) * radious),
                y: (this.canvasElement.height / 2 + Math.sin(theta) * radious)
            }
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 取得文字的對齊座標
     * @param {*} x 座標
     * @param {*} y 座標
     * @returns 物件包裝 X 與 Y 座標
     */
    get_text_coords(x, y)
    {
        return {
            x: x - 10,
            y: y + 7
        }
    }
}