webpackJsonp([0xc0fe21aef640],{310:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=l(1),n=a(s),r=l(9),c=a(r),u=l(14),d=a(u),o=l(28),i=a(o),m=l(5),f=a(m),p=l(16),y=a(p),h=l(50),E=a(h);t.default=function(){return n.default.createElement(d.default,{title:"Styling"},n.default.createElement("p",null,"To style the component, use"," ",n.default.createElement("a",{href:"https://github.com/gpbl/react-day-picker/blob/master/src/style.css"},"src/style.css")," ","as template and update it to fit the desired style. Then, just include it with your CSS files."),n.default.createElement("blockquote",null,n.default.createElement("p",null,"The CSS classes follow a"," ",n.default.createElement("a",{href:"https://css-tricks.com/bem-101/"},"BEM-like syntax"),". If you need to customize the CSS class names, use the"," ",n.default.createElement("a",{href:"/api/DayPicker#classnames"},n.default.createElement("code",null,"classNames"))," ","prop. Using this prop you can import a"," ",n.default.createElement("a",{href:"#css-modules"},"CSS Module"),".")),n.default.createElement("h3",null,"Importing the style template"),n.default.createElement("p",null,"Import and extend the CSS template in your Sass files, for example from"," ",n.default.createElement("code",null,"node_modules"),":"),n.default.createElement(y.default,{language:"css"},'@import "../node_modules/react-day-picker/lib/style"'),n.default.createElement("p",null,"or in your JS files (e.g. when using"," ",n.default.createElement("a",{href:"https://github.com/webpack/css-loader"},"webpack-css-loader"),"):"),n.default.createElement(y.default,null,'import "react-day-picker/lib/style.css";'),n.default.createElement("p",null,"The stylesheet is also available from unpkg:"),n.default.createElement(y.default,{language:"html"},'<link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css">'),n.default.createElement("h2",null,"Styling modifiers"),n.default.createElement("p",null,n.default.createElement(c.default,{to:"/docs/matching-days"},"Modifiers")," added to react-day-picker via the"," ",n.default.createElement("a",{href:"/api/DayPicker#modifiers"},n.default.createElement("code",null,"modifiers"))," ","prop becomes CSS modifiers for the ",n.default.createElement("code",null,"DayPicker-day")," class. For example, if you use a ",n.default.createElement("code",null,"firstOfMonth")," modifier, the CSS class for the matched day cells will be ",n.default.createElement("code",null,"DayPicker-day--firstOfMonth"),"."),n.default.createElement("h3",null,"Inline styles with modifiers"),n.default.createElement("p",null,"Using the"," ",n.default.createElement(c.default,{to:"/api/DayPicker#modifiersstyles"},n.default.createElement("code",null,"modifiersStyles"))," ","prop, you can inline-style the cells for the specified modifiers:"),n.default.createElement(f.default,{name:"styling-inline"}),n.default.createElement("h2",{id:"css-modules"},"Styling with CSS Modules"),n.default.createElement("p",null,"Once you have setup your build system to import"," ",n.default.createElement("a",{href:"https://github.com/css-modules/css-modules"},"CSS Modules"),", use the"," ",n.default.createElement("a",{href:"/api/DayPicker#classnames"},n.default.createElement("code",null,"classNames"))," ","prop to use the imported styles:"),n.default.createElement(y.default,null,"import React from 'react';\nimport DayPicker from 'react-day-picker';\n\nimport styles from '../styles/cssmodules.css';\n\nexport default function CSSModules() {\n  return <DayPicker classNames={ styles } />\n}"),n.default.createElement(i.default,{id:"styling-css-modules"}),n.default.createElement("h3",null,"Styling modifiers with CSS Modules"),n.default.createElement("p",null,"Since you can’t use the default’s BEM-like modifiers CSS classes, you need to specify modifiers using the class names from the imported module:"),n.default.createElement(y.default,null,"import React from 'react';\nimport DayPicker from 'react-day-picker';\nimport styles from '../styles/cssmodules.css';\n\nexport default function CSSModules() {\n  return (\n    <DayPicker \n      classNames={ styles } \n      modifiers={{\n        [styles.birthday]: new Date(2018, 8, 19)\n      }}\n    />\n  );\n}"),n.default.createElement(E.default,{to:"/docs/localization",label:"Localization"}))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-docs-styling-js-53f54ca40b32dbd9e102.js.map