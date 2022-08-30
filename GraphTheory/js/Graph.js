class Graph extends BaseGraph
{
    /**
     * 設定節點數
     */
    set_vertex_limit()
    {
        try
        {
            this.vertexLimit = verticesLimitElement.value;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 設定邊數
     */
    set_edge_limit()
    {
        try
        {
            this.edgeLimit = edgesLimitElement.value;
        }
        catch (e)
        {
            console.log(e.message);
        }
    }

    /**
     * 設定路徑起點與終點
     */
    set_path()
    {
        try
        {
            this.startVertexId = startVertexElement.value;
            this.endVertexId   = endVertexElement.value;
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
    generate(updateVertices, updateEdges, updatePath)
    {
        try
        {
            this.erase_canvas();
            if (updateVertices || this.vertices.length == 0)
            {
                this.update_vertices();
            }
            if (updateEdges || this.edges.length == 0)
            {
                this.randomize_edges();
            }
            if (updatePath)
            {
                this.set_path();
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
            for (let i = 0; i < this.edges.length; i++)
            {
                for (let j = 0; j < this.edges.length; j++)
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
            let temp = "最短路徑：<br>";

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