class Brush extends Canvas
{
    /**
     * 預設節點半徑
     */
    circleRadious = 20;

    /**
     * 繪製線條
     * @param {int} fromX 下筆 X 座標
     * @param {int} fromY 下筆 Y 座標
     * @param {int} toX 收筆 X 座標
     * @param {int} toY 收筆 Y 座標
     */
    draw_line(fromX, fromY, toX, toY)
    {
        try
        {
            this.canvas.beginPath();
            this.canvas.moveTo(fromX, fromY);
            this.canvas.lineTo(toX, toY);
            this.canvas.stroke();
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 繪製
     * @param {int} theta 圓在圓周上的座標
     * @param {int} radious 圓半徑，預設為 20
     * @param {int} startAngle 圓弧起始角度，預設為 0
     * @param {int} endAngle 圓弧終末角度，預設為 PI * 2
     */
    draw_circle(theta, radious = this.circleRadious, startAngle = 0, endAngle = Math.PI * 2)
    {
        try
        {
            let coords = this.get_trigonometric_coords(theta);
            this.canvas.beginPath();
            this.canvas.arc(coords.x, coords.y, radious, startAngle, endAngle);
            this.canvas.stroke();
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }
    
    /**
     * 位置文字
     * @param {string} text 文字
     * @param {int} x 文字 X 座標
     * @param {int} y 文字 Y 座標
     */
    draw_text(text, x, y)
    {
        try
        {
            let coords = this.get_text_coords(x, y);
            this.canvas.beginPath();
            this.canvas.fillText(text, coords.x, coords.y);
            this.canvas.stroke();
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 清除畫布
     */
    erase_canvas()
    {
        try
        {
            this.canvas.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }
}