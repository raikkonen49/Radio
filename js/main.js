// fetch('../img/2223.svg')
//   .then(res => res.text())
//   .then(svg => {
//     // Принудительно заменим все fill на red
//     let coloredSvg = svg.replace(/fill="[^"]*"/g, 'fill="red"');
//     coloredSvg = coloredSvg.replace(/style="[^"]*fill:[^;"]*;?[^"]*"/g, 'style="fill:red"');

//     // Кодируем и вставляем
//     const svg64 = btoa(coloredSvg);
//     const svgDataUrl = `url("data:image/svg+xml;base64,${svg64}")`;
//     document.querySelector('.custom-frame-wrap').style.setProperty('--svg-bg', svgDataUrl);
//   });