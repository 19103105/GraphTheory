class Graph extends BaseGraph
{
    /**
     * 設定節點數
     * @param {int} vertexLimit 節點數
     */
    set_vertex_limit(vertexLimit)
    {
        try
        {
            this.vertexLimit = vertexLimit;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 設定邊數
     * @param {int} edgeLimit 邊數
     */
    set_edge_limit(edgeLimit)
    {
        try
        {
            this.edgeLimit = edgeLimit;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 設定路徑起點與終點
     * @param {int} startVertexId 起點節點編號
     * @param {int} endVertexId 終點節點編號
     */
    set_path(startVertexId, endVertexId)
    {
        try
        {
            this.startVertexId = startVertexId;
            this.endVertexId   = endVertexId;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 建立圖
     * @param {int} vertexLimit 最大節點數
     * @param {int} edgeLimit 最大邊數
     * @returns 不回傳值
     */
    generate(updateVertices = 1, updateEdges = 1)
    {
        try
        {
            this.erase_canvas();
            if (updateVertices)
            {
                this.update_vertices();
            }
            if (updateEdges)
            {
                this.update_edges();
            }
            this.show_vertices();
            this.show_edges();
            this.dijkstra();
            this.print_graph_data();
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 顯示節點
     */
    show_vertices()
    {
        try
        {
            // 逐一實現節點資料
            for (let i = 0; i < this.vertexLimit; i++)
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
     * 顯示邊
     * @param {int} edgeLimit 最大邊數
     */
    show_edges()
    {
        try
        {
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

            if (this.shortestPath.length == 2 && this.shortestPath[0] == this.shortestPath[1])
            {
                logCtn.innerHTML = "起點即終點。<br><br>最短距離:<br>0";
                return;
            }
            if (this.shortestPath.length == 1)
            {
                temp += "此路徑不通。<br>";
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
                temp += `<br>最短距離:<br>${this.shortestDistance}<br>`;
            }

            logCtn.innerHTML = temp;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }
}