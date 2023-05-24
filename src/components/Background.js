import React from 'react'
import blob from '../assests/blobanimationmain.svg';
import blobSec from '../assests/blobanimationsec.svg';

const Background = () => {
  return (
		<div className="background">
			<div className="blob blob-shadow">
				<img src={blob} alt="blob" />
			</div>
			<div className="blob">
				<img src={blob} alt="blob" />
			</div>
			<div className="blob-sec blob-shadow">
				<img src={blobSec} alt="blob" />
			</div>
			<div className="blob-sec">
				<img src={blobSec} alt="blob" />
			</div>
			<div className="blob-sec-bottom blob-shadow">
				<img src={blobSec} alt="blob" />
			</div>
			<div className="blob-sec-bottom">
				<img src={blobSec} alt="blob" />
			</div>
		</div>
  );
}

export default Background