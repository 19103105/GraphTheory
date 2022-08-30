class AdjacencyMatrix extends Brush
{
    matrixSize = 10;

    matrix = [];

    constructor()
    {
        try
        {
            super();
            this.set_canvas("#adjacency-matrix");
            this.canvasElement.height = 400;
            this.canvasElement.width = 400;
            this.canvas.strokeStyle = "#ffffff";
            this.canvas.fillStyle  = "#ffffff";
            this.canvas.textAlign  = "center";
        }
        catch (e)
        {
            console.log(e.message);
        } 
    }

    /**
     * 設定矩陣大小
     * @param {int} matrixSize 矩陣大小
     */
    set_matrix_size(matrixSize)
    {
        try
        {
            this.matrixSize = parseInt(matrixSize);
        }
        catch (e)
        {
            console.log(e.message);
        } 
    }
    set_adjacency(data)
    {
        try
        {
            this.matrix = data;
        }
        catch (e)
        {
            console.log(e.message);
        } 
    }
    set_grids()
    {
        try
        {
            this.erase_canvas();

            let cSize = this.canvasElement.width;

            let gridSize = cSize / (this.matrixSize + 1);
            let halfGridSize = gridSize / 2;

            this.canvas.font = `${halfGridSize + 1}px Arial`;

            for (let $i = 0; $i < this.matrixSize; $i++)
            {
                let gridSpace = ($i + 1) * gridSize;
                let textCoordY = gridSpace + halfGridSize;

                this.draw_text(string_padding($i), halfGridSize + 10, textCoordY - 5);
                this.draw_text(string_padding($i), textCoordY + 10, halfGridSize - 5);

                if (this.matrix[$i] == undefined)
                {
                    this.matrix[$i] = [];
                }

                for (let $j = 0; $j < this.matrixSize; $j++)
                {
                    if (this.matrix[$i][$j] == undefined)
                    {
                        this.matrix[$i][$j] = 0;
                    }
                    let gridSpace = ($j + 1) * gridSize;
                    let textCoordX = gridSpace + halfGridSize;

                    this.draw_text(this.matrix[$i][$j], textCoordX + 10, textCoordY - 5);
                }
            }
        }
        catch (e)
        {
            console.log(e.message);
        }
    }
}