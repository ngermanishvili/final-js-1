

var splide = new Splide( '.splide', {
  type: "loop",
    autoplay: true,
    interval: 1500,
  direction: 'rtl',
  perPage  : 3,
  height   : '40rem',
  autoScroll: {
    speed: 1,
  },
} );

splide.mount();


// You need to transpile this code
// import Splide from '@splidejs/splide';
// import { Grid } from '@splidejs/splide-extension-grid';

// const splide = new Splide( '.splide', {
//   type       : 'loop',
//   height     : '14rem',
//   perPage    : 2,
//   perMove    : 1,
//   grid       : {
//     // You can define rows/cols instead of dimensions.
//     dimensions: [ [ 1, 1 ], [ 2, 2 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ], [ 3, 2 ] ],
//     gap: {
//       row: '6px',
//       col: '6px',
//     },
//   },
//   breakpoints: {
//     640: {
//       height : '8rem',
//       perPage: 1,
//       grid   : {
//         dimensions: [ [ 2, 2 ], [ 1, 1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ] ],
//       },
//     },
//   },
// } );

// splide.mount( { Grid } );