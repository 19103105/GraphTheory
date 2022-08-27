const verticesLimitElement = document.querySelector("#vertices-limit-input");
const verticesRefreshBtn   = document.querySelector("#vertices-refresh-btn");
const edgesLimitElement    = document.querySelector("#edges-limit-input");
const edgesRefreshBtn      = document.querySelector("#edges-refresh-btn");
const logCtn               = document.querySelector("#log-ctn");
const startVertex          = document.querySelector("#start-vertex-input");
const endVertex            = document.querySelector("#end-vertex-input");

update_refresh_vertices_text();

let graph = new Graph();

startVertex.value = 0;
endVertex.value = verticesLimitElement.value;

refresh_canvas();