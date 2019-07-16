import React from 'react';


const mid = () => {
  return (
    <>
      <style jsx>{`
        $color-deco: blue;
        $color-link: #ffa6a6;

        .section {
          background: rgb(255, 255, 255);
          position: relative;
        }

        .content {
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          padding: 6rem 0;
          counter-reset: figure; 
        }

        .item {
          margin: 10vh auto;
          max-width: 100%;
          position: relative;
          will-change: transform;
        }

        .item::before {
          counter-increment: figure;
          content: counter(figure, decimal-leading-zero);
          position: absolute;
          font-family: paralucent, sans-serif;
          font-size: 10rem;
          color: lighten(desaturate($color-deco, 50%), 30%);
          bottom: calc(100% - 3rem);
        }

        .item:nth-child(even)::before {
          right: 0;
        }

        .item__img-wrap {
          --aspect-ratio: 1/1.5;
          overflow: hidden;
          width: 500px;
          margin: 0 auto;
          padding-bottom: calc(100% / (var(--aspect-ratio)));
          max-width: calc(100% - 2rem);
          will-change: transform;
        }

        .item:first-child .item__img-wrap {
          --aspect-ratio: 8/10;
          --image: url(gallery/1.jpg);
        }

        .item:nth-child(2) .item__img-wrap {
          width: 1000px;
          --aspect-ratio: 120/76;
          --image: url(gallery/2.jpg);
        }

        .item:nth-child(3) .item__img-wrap {
          --aspect-ratio: 60/75;
          --image: url(gallery/3.jpg);
        }

        .item:nth-child(4) .item__img-wrap {
          width: 800px;
          --aspect-ratio: 900/505;
          --image: url(gallery/4.jpg);
        }

        .item:nth-child(5) .item__img-wrap {
          --aspect-ratio: 6/8;
          --image: url(gallery/5.jpg);
        }

        .item__img {
          --overflow: 40px;
          height: calc(100% + (2 * var(--overflow)));
          top: calc( -1 * var(--overflow));
          width: 100%;
          position: absolute;
          background-image: var(--image);
          background-size: cover;
          background-position: 50% 0%;
          will-change: transform;
        }

        .item__img--t1 {
          --overflow: 60px;
        }

        .item__img--t2 {
          --overflow: 80px;
        }

        .item__img--t3 {
          --overflow: 120px;
        }

        .item__caption {
          padding: 2rem 1rem;
        }

        .item__caption-title {
          font-weight: 400;
          font-size: 3rem;
          margin: 0;
        }

        .item__caption-copy {
          margin: 0;
        }

      `}

      </style>
      <section className="section">
        <div className="section-content pt-5">
        <div className="content">
					<div className="item">
						<div className="item__img-wrap"><div className="item__img item__img--t1"></div></div>
						<div className="item__caption">
							<h2 className="item__caption-title">Central view</h2>
							<p className="item__caption-copy">Great turbulent clouds emerged into consciousness citizens.</p>
						</div>
					</div>
					<div className="item">
						<div className="item__img-wrap"><div className="item__img item__img--t2"></div></div>
						<div className="item__caption">
							<h2 className="item__caption-title">Lost in time</h2>
							<p className="item__caption-copy">Brain is the seed of intelligence the sky calls to us a very small stage.</p>
						</div>
					</div>
					<div className="item">
						<div className="item__img-wrap"><div className="item__img item__img--t2"></div></div>
						<div className="item__caption">
							<h2 className="item__caption-title">Connections</h2>
							<p className="item__caption-copy">Two ghostly white figures in coveralls and helmets are softly dancing vastness.</p>
						</div>
					</div>
				</div>
        </div>
      </section>
    </>    
  );
}

export default mid;