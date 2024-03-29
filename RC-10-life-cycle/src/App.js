import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Clock from "./components/Clock";
import UseEffectAxiosFetch from "./components/UseEffectAxiosFetch";

function App() {
	const [show, setShow] = useState(true);
	return (
		<div className="container text-center-4 mt-4">
			<button className="btn btn-danger" onClick={() => setShow(!show)}>
				SHOW
			</button>

			{/* {show && <LifeCycleMethods />} */}
			{/* {show && <Clock />} */}
			<UseEffectAxiosFetch />
		</div>
	);
}

export default App;
