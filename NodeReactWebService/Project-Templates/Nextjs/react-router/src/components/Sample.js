// components/Sample.js

import React from 'react';
import { Link } from 'react-router-dom';


// JSX Basics
// In JSX, you need to group elements in a pair of <div>'s or use fragments (<> </>).
// IS ERROR:return <h1>About Page</h1> Make something nice;
// IS OKAY: return <div><h1>About Page</h1>Make something nice</div>;
// 			 - Use a <div> when styling or layout requires it, e.g., <div className="myClass">.
//
// IS OKAY: return <><h1>About Page</h1><span>Make something nice</span></>;
//  - Preferred: Using a fragment adds fewer nodes to the DOM, which is more efficient.
//  - Warning: Ensure that plain text ("Make something nice") is wrapped within a tag.
//    Otherwise, you risk the following error:  "TypeError: dispatcher is null"
//

import { useNavigate } from 'react-router-dom';   // for handleClickEvt

function Sample() 
{
  const navigate = useNavigate();                 // for handleClickEvt
	
	const codeSnippet = `
  // JSX Basics
  // In JSX, you need to group elements in a pair of <div>'s or use fragments (<> </>).
  // IS ERROR: return <h1>About Page</h1> Make something nice;
  // IS OKAY: return <div><h1>About Page</h1>Make something nice</div>;
  // 	- Use a <div> when styling or layout requires it, e.g., <div className="myClass">.
  //
  // IS OKAY: return <><h1>About Page</h1><span>Make something nice</span></>;
  //  - Preferred: Using a fragment adds fewer nodes to the DOM, which is more efficient.
  //  - Warning: Ensure that plain text ("Make something nice") is wrapped within a tag.
  //    Otherwise, you risk the following error: "TypeError: dispatcher is null"
  `;

  const handleClickEvt = () => 
  {
    // navigate('https://github.com/NicoJanE');             // Error. Only use for internal navigation
    // navigate('/about');                                  // Fine
    window.open('https://github.com/NicoJanE', '_blank','noopener,noreferrer');  // Use for external navigation
  };

  return (
    <>
      <h1><b> Sample Page </b> </h1>
      <span>Make something nice</span>
      <pre><code>{codeSnippet}</code></pre>
      
      <center>
        <button onClick={handleClickEvt} className="my-button-class mx-2 text-lg hover:text-blue-400">
          Sample using event
        </button>
      </center>

	  <center><Link to="/" className="mx-2 text-lg hover:text-blue-400">Back Home</Link>  </center>
    </>
  );
}

export default Sample;

