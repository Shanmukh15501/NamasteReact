const rootElement = document.getElementById("root");

// Create a React element
const divparent = React.createElement("div",{id:"parent"},
                    React.createElement("div", {id:"child1"}, [
                                                                React.createElement("h1",{},"Welcome to h1 tag"),
                                                                React.createElement("h2",{},"Welcome to h2 tag"),  
                                                            
                                                        ],
                                                        
                    React.createElement("div", {id:"child2"}, [
                                                                React.createElement("h1",{},"Welcome to h1 child tag"),
                                                                React.createElement("h2",{},"Welcome to h2 childtag"),  
                                                                
                                                                
                                                              ]
                                                            )))

// Create a root and render the element
const root = ReactDOM.createRoot(rootElement);

root.render(divparent);
