// // import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // import React,{useState,useEffect}from 'react';
// // import Api from "./components/Api";
// // export default function App() {
// //   const [data, setData] = useState([]);
// // useEffect(() => {
// //   (async () => {
// //     const res= await fetch('https://api.com/posts');
// //     const data = await res.json();
// //     setData(data);
// //     console.log(data);
// // })();

// // return (
// //   <div>
// //     <accordion data={data} />
// //     <accordionItem title="title1" content="content1"/>
// //     <accordionItem title="title2" content="content2"/>
// //     <accordionItem title="title3" content="content3"/>
// //     <button
// //       link="google.com"
// //       color="red"
// //       text="click me"
// //       Hovercolor="blue"
// //     />
// //   </div>
// // );

// // }, []);
// // };

// // function Accordion({data}) {
// //   const{items,title,subtitle}=data;

// //   return (
// //     <div className="accordion">
// //       <h1>{title}</h1>
// //       <p>{subtitle}</p>
// //       {items.map((el,i)=>( 
// //         <accordionItem key={i} title={el.title} content={el.content}/>
// //       ))}
// //     </div>
// //   )

// // }
// // function AccordionItem({title,content}) {
// //   const [curOpen,setCurOpen]=useState(false);

// //   return(
// //     <div onClick={setCurOpen(!curOpen)}>
// //       <p>{title}</p>
// //       <div classname={'data {$curOpen ? "open": ""}'}>
// //         <p>{content}</p>
// //       </div>  
// //     </div>

// //   )

// // }
// // <accordionItem key={i} title={el.title} content={el.content}/>




// import React, { useState } from 'react';

// function Tabs() {
//   const [activeTab, setActiveTab] = useState('London');

//   const handleTabClick = (cityName) => {
//     setActiveTab(cityName);
//   };

//   return (
//     <div>
//       <div className="tab">
//         <button className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => handleTabClick('London')}>London</button>
//         <button className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>Paris</button>
//         <button className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => handleTabClick('Tokyo')}>Tokyo</button>
//       </div>

//       <div>
//         {activeTab === 'London' && (
//           <TabContent title="London" description="London is the capital city of England." />
//         )}
//         {activeTab === 'Paris' && (
//           <TabContent title="Paris" description="Paris is the capital of France." />
//         )}
//         {activeTab === 'Tokyo' && (
//           <TabContent title="Tokyo" description="Tokyo is the capital of Japan." />
//         )}
//       </div>
//     </div>
//   );
// }

// function TabContent({ title, description }) {
//   return (
//     <div className="tabcontent">
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default Tabs;


