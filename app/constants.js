const gutterWidth = '1rem';
const outerMargin = '2rem';
//TODO relate gutterCompensation and halfGutterWidth to gutterWidth
const gutterCompensation = '-0.5rem';
const halfGutterWidth = '0.5rem';

//TODO figure out how to dedup these wierd declarations
const xsMin = 30;
const smMin = 48;
const mdMin = 64;
const lgMin = 75;

const screenXsMin = `${xsMin}em`;
const screenSmMin = `${smMin}em`;
const screenMdMin = `${mdMin}em`;
const screenLgMin = `${lgMin}em`;

const containerSm = `calc(${smMin} + ${gutterWidth})`
const containerMd = `calc(${mdMin} + ${gutterWidth})`
const containerLg = `calc(${lgMin} + ${gutterWidth})`

//TODO alias breakpoints also
const phone = `@media only screen and (min-width: 48em)`
const tablet = `@media only screen and (min-width: 64em)`
const desktop = `@media only screen and (min-width: 75em)`
