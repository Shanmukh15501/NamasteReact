import React from "react";
import  ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id:"head"}, "welcome to React");
const parent = React.createElement("div",
                                        {id:"parent"} ,
                                       [ React.createElement("div",{id:"child"},

                                            [
                                                React.createElement("h1",{id:"h1"},"Welcome to h1 tag"),
                                                React.createElement("h2",{id:"h2"},"Welcome to h2 tag")

                                            ]
                                            
                                  ),


                                  React.createElement("div",{id:"child2"},

                                    [
                                        React.createElement("h1",{id:"h12"},"Welcome to h1 tag"),
                                        React.createElement("h2",{id:"h22"},"Welcome to h2 tag")

                                    ]
                                    
                          )

                                ]
                                        
)

const root = ReactDOM.createRoot(document.getElementById("root"));

const app = React.createElement("div", null, heading, parent);

root.render(app);

// #React.createElement creates objects and the attributes you pass are props/

// cdn----->
// We get two 2 cdn links 
// 1.dom react.js helps to insert doms and interact with browser
// 2.developmemt.js helps to create dom elements 