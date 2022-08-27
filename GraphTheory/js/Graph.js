class Graph extends BaseGraph
{
    /**
     * 建立圖
     * @param {int} vertexLimit 最大節點數
     * @param {int} edgeLimit 最大邊數
     * @returns 不回傳值
     */
    generate(vertexLimit = this.vertexLimit, edgeLimit = this.edgeLimit)
    {
        try
        {
            this.erase_canvas();
            this.update_vertices(vertexLimit);
            this.update_edges(edgeLimit);
            this.dijkstra();
            this.print_graph_data();
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 更新節點
     * @param {int} vertexLimit 節點數
     */
    update_vertices(vertexLimit = this.vertexLimit)
    {
        try
        {
            // 若節點數有異常則設為預設值
            if (!is_valid_limit(vertexLimit))
            {
                vertexLimit = 10;
            }
            // 若節點數無異動則無須重新整理
            if (!this.vertices.length || vertexLimit != this.vertexLimit)
            {
                this.vertexLimit = vertexLimit;
                this.innitialize_vertices();
            }
            // 逐一實現節點資料
            for (let i = 0; i < vertexLimit; i++)
            {
                this.activate_vertex(i);
            }
        }
        catch (e)
        {
            console.log(e.message);
        }
    }
    
    /**
     * 更新邊
     * @param {int} edgeLimit 最大邊數
     */
    update_edges(edgeLimit = this.edgeLimit)
    {
        try
        {
            this.edgeLimit = edgeLimit;
            this.innitialize_edges();
            // 逐一實現鄰接矩陣內的資料
            for (let i = 0; i < this.vertexLimit; i++)
            {
                for (let j = 0; j < this.vertexLimit; j++)
                {
                    if (this.edges[i][j] != 0)
                    {
                        this.activate_edge(i, j);
                    }
                }
            }
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 印出圖的資料
     */
    print_graph_data()
    {
        try
        {
            let temp = "Shortest Path:<br>";

            if (this.shortestPath.length == 1)
            {
                temp += "No paths was found.<br>";
            }
            else
            {
                this.canvas.strokeStyle = "#ff0000";
                this.canvas.lineWidth  = 3;
                for (let i = 1; i < this.shortestPath.length; i++)
                {
                    this.activate_edge(this.shortestPath[i-1], this.shortestPath[i]);
                    temp += `V${string_padding(this.shortestPath[i-1])} -> V${string_padding(this.shortestPath[i])}<br>`;
                }
                this.canvas.lineWidth  = 1;
                this.canvas.strokeStyle = "#000000";
                temp += `<br>Distance:<br>${this.shortestDistance}<br>`;
            }
            

            temp += "<br>Adjacency Data:<br>";

            for (let i = 0; i < this.edges.length; i++)
            {
                for (let j = 0; j < this.edges.length; j++)
                {
                    if (!this.edges[i][j])
                    {
                        continue;
                    }
                    temp += `E(${string_padding(i)}, ${string_padding(j)}) = ${this.edges[i][j]}<br>`;
                }
            }

            logCtn.innerHTML = temp;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }
}