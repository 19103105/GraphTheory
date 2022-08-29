const verticesLimitElement = document.querySelector("#vertices-limit-input");
const verticesRefreshBtn   = document.querySelector("#vertices-refresh-btn");
const edgesLimitElement    = document.querySelector("#edges-limit-input");
const edgesRefreshBtn      = document.querySelector("#edges-refresh-btn");
const logCtn               = document.querySelector("#log-ctn");
const startVertexElement   = document.querySelector("#start-vertex-input");
const startRefresh         = document.querySelector("#start-vertex-refresh-btn");
const endVertexElement     = document.querySelector("#end-vertex-input");
const endRefresh           = document.querySelector("#end-vertex-refresh-btn");

update_inputs();

let graph = new Graph();

refresh_canvas();