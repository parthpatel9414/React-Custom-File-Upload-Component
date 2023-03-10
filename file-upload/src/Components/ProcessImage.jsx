import React, { useState } from 'react';

const ProcessImage = ({file}) => {
  console.log(file);
  const CDN_URI = `https://ucarecdn.com/${file.uuid}/-/preview/-/quality/smart/`;
  const [imageSrc, setImageSrc] = useState(CDN_URI);


  return(
    <div>
      <div className="font-loader uc-ip-preview text-center">
        <img src={imageSrc} alt={file.original_filename} width="auto"/>
      </div>
      <div className="uc-ip-actions-grp">
        <div className="uc-ip-actions">
          Corp
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/2000x1325/center/`)}>Corp Center</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/4:3/`)}>Corp Ratio</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/crop/face/1:1/`)}>Corp Face</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/scale_crop/400x800/smart/`)}>Smart Corp</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Filter
          <button onClick={() => setImageSrc(`${CDN_URI}-/filter/lavra/`)}>Lavra</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/filter/pamaya/`)}>Pamaya</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/filter/sewen/`)}>Sewen</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/filter/vevera/`)}>Vevera</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/filter/namala/`)}>Namala</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Rotate & Flip
          <button onClick={() => setImageSrc(`${CDN_URI}-/rotate/90/`)}>Rotate 90 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/rotate/180/`)}>Rotate 180 degree</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/flip/`)}>Flip It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/mirror/`)}>Mirror It</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
        <div className="uc-ip-actions">
          Blur & Sharpen
          <button onClick={() => setImageSrc(`${CDN_URI}-/blur_region/faces/`)}>Blur Face</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/sharp/10/`)}>Sharp 10</button>
          <button onClick={() => setImageSrc(`${CDN_URI}-/sharp/20/`)}>Sharp 20</button>
          <button onClick={() => setImageSrc(`${CDN_URI}`)}>Set Original</button>
        </div>
      </div>
    </div>  
  )
}

export default React.memo(ProcessImage);