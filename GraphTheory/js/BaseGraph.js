class BaseGraph extends Brush
{
    /**
     * 節點陣列
     * vertices = [
     *      id: { 節點編號
     *          name:  節點名稱
     *          theta:  離 Y+ 軸的角度
     *          x: X 軸簡座標
     *          y: Y 軸簡座標
     *      }
     * ]
     */
    vertices = [];

    /**
     * 節點總數，預設為 10
     */
    vertexLimit = 10;

    /**
     * 鄰接矩陣
     * edges = [
     *      id: [
     *          id:0, id:0, id:0...
     *      ],
     *      id: [
     *          id:0, id:0, id:0...
     *      ],
     *      id: [
     *          id:0, id:0, id:0...
     *      ],
     *      ...
     * ]
     */
    edges = [];

    /**
     * 邊數，預設為 10
     */
    edgeLimit = 10;

    shortestPath = [];

    shortestDistance = 0;

    /**
     * 初始化節點陣列
     */
    innitialize_vertices()
    {
        try
        {
            // 初始化節點陣列
            this.vertices = [];
            // 取得所有節點在圓上的內角
            let theta = this.get_theta(this.vertexLimit);
            // 迴圈次數等於節點總數
            for (let n = 0; n < this.vertexLimit; n++)
            {
                // 透過內角取得座標
                let coords = this.get_trigonometric_coords(theta[n]);
                // 寫入節點座標資料
                this.vertices[n] = {
                    theta: theta[n],
                    x: coords.x,
                    y: coords.y
                }
            }
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 初始化節點之間的邊
     */
    innitialize_edges()
    {
        try
        {
            // 回傳資料皆為 0 的二維陣列
            this.edges = get_2d_array(this.vertexLimit);
            // 鄰接的暫存陣列
            let tempEdges = get_2d_array(this.vertexLimit);
            // 鄰接節點編號的暫存陣列
            let tempEdgesId = [];
            // 權重
            let weight;

            // 建立所有邊
            for (let i = 0; i < this.vertexLimit; i++)
            {
                for (let j = 0; j < this.vertexLimit; j++)
                {
                    // 若兩節點相同或邊已存在則跳出
                    if (i == j || tempEdges[i][j] || tempEdges[j][i])
                    {
                        continue;
                    }
                    // 取得兩節點距離（即權重）
                    weight = this.get_edge_weight(i, j);
                    // 將兩節點寫入鄰接的暫存陣列
                    tempEdges[i][j] = weight;
                    // 將兩節點寫入鄰接節點編號的暫存陣列
                    tempEdgesId.push([i, j]);
                }
            }

            // 隨機選擇邊並寫入 this.edges
            for (let i = 0; i < this.edgeLimit; i++)
            {
                // 若所有節點皆以鄰接則跳出
                if (!tempEdgesId.length)
                {
                    return;
                }
                // 從鄰接節點編號的暫存陣列隨機取出一份資料
                let tempEdge = tempEdgesId.splice(get_random_int(tempEdgesId.length -1), 1)[0];
                let id1 = tempEdge[0];
                let id2 = tempEdge[1];
                // 將隨機取出的資料寫入 this.edges
                this.edges[id1][id2] = tempEdges[id1][id2];
                this.edges[id2][id1] = tempEdges[id1][id2];
            }

        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 啟用指定節點索引的節點
     * @param {int} id 節點編號
     */
    activate_vertex(id)
    {
        try
        {
            this.draw_circle(this.vertices[id].theta);
            this.draw_text(string_padding(id), this.vertices[id].x, this.vertices[id].y);
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 啟用指定編號的邊
     * @param {int} id1 節點編號 1
     * @param {int} id2 節點編號 2
     */
    activate_edge(id1, id2)
    {
        try
        {
            this.draw_line(this.vertices[id1].x, this.vertices[id1].y,
                           this.vertices[id2].x, this.vertices[id2].y);
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 回傳兩節點的距離
     * @param {int} id1 節點 1
     * @param {int} id2 節點 2
     */
    get_edge_weight(id1, id2)
    {
        try
        {
            let x1 = this.vertices[id1].x;
            let y1 = this.vertices[id1].y;
            let x2 = this.vertices[id2].x;
            let y2 = this.vertices[id2].y;
            return this.get_distance(x1, y1, x2, y2);
        }
        catch (e)
        {
            console.log(e.message);
            throw e;
        }
    }

    /**
     * 使用戴克斯特拉演算法取得兩節點間最短距離，並回傳路徑及距離
     * @param {int} id1 起點節點
     * @param {int} id2 終點節點
     * @returns {object} path:路徑, distance:最短距離
     */
    dijkstra(id1 = startVertex.value, id2 = endVertex.value)
    {
        try
        {
            this.shortestDistance = 0;
            this.shortestPath = [];

            // unvisited[index] = 未造訪的節點 id
            let unvisited = [];

            // distances[id] = 距起點最短距離
            let distances = [];

            // sources[id] = 源頭 id
            let sources = [];

            // 將所有 distance 設為最大值
            // 將所有 source 設為空
            for (let i = 0; i < this.vertexLimit; i++)
            {
                unvisited[i]  = i;
                distances[i]  = Number.MAX_SAFE_INTEGER;
                sources[i]    = null;
            }
        
            // 設起點的 distance 設為 0
            distances[id1] = 0;

            let safeLock = 50;

            while (unvisited.length)
            {
                if (safeLock-- < 0)
                {
                    console.log("error");
                    return {
                        path: [],
                        distances: -1
                    };
                }

                let vc              = null;
                let vcIdInUnvisited = null;
                let largestDistance = Number.MAX_SAFE_INTEGER;

                // 取得未造訪且 distance 最短的 Vc（編號）
                for (let uvId = 0; uvId < unvisited.length; uvId++)
                {
                    // 若此節點是前所未有的短則紀錄
                    if (distances[unvisited[uvId]] < largestDistance)
                    {
                        vc              = unvisited[uvId];
                        vcIdInUnvisited = uvId;
                        largestDistance = distances[unvisited[uvId]];
                    }
                }

                // 檢查 Vc 的每個鄰居 Vn
                for (let vn = 0; vn < this.vertexLimit; vn++)
                {
                    // 若 Vc 與 Vn 不鄰接則跳過
                    if (vc == null || !this.edges[vc][vn])
                    {
                        continue;
                    }
                    // 若發現該鄰居有更短的 distance 則更新其 distance 即 source
                    if (distances[vc] + this.edges[vc][vn] < distances[vn])
                    {
                        distances[vn] = distances[vc] + this.edges[vc][vn];
                        sources[vn] = vc;
                    }
                }
                // 將 Vc 移除 unvisited
                unvisited.splice(vcIdInUnvisited, 1);
            }

            // 從終點節點開始進行 source 回朔
            let vc = id2;
            // 若 Vc 尚有 source
            while (sources[vc] != null)
            {
                // 將其 source 寫入 shortestPath
                this.shortestPath.push(vc);
                // 將 Vc 更新為其 source
                vc = sources[vc];
            }
            // 最後將起點寫入 shortestPath
            this.shortestPath.push(id1);
            // 設 shortestDistance 為 id2 的 distance
            this.shortestDistance = distances[id2];
            // 翻轉 shortestPath
            return this.shortestPath.reverse();
        }
        catch (e)
        {
            console.log(e);
        }
    }
}