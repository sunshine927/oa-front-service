(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21729e"],{c60e:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},c=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("div",{attrs:{id:"#canvas"}})])}],o=e("0fea"),s={data:function(){return{msg:""}},methods:{initing:function(){var n=this,t="/demo/info/hello";Object(o["getAction"])(t).then((function(t){t.success&&(n.msg=t.result)}))}},created:function(){this.initing(),a()}};function a(){var n=new BpmnViewer({container:"#canvas"});n.importXML(pizzaDiagram,(function(t){t?console.log("something went wrong:",t):(console.log("success!"),n.get("canvas").zoom("fit-viewport"))}))}var r=s,u=e("2877"),l=Object(u["a"])(r,i,c,!1,null,null,null);t["default"]=l.exports}}]);