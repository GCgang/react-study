import AddCountry from "./components/AddCountry";
import CountriesList from "./components/CountriesList";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <main>
      <GlobalStyle />
      <h2>내가 가고싶은 나라들</h2>
      <AddCountry />
      <CountriesList />
    </main>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
* {
  box-sizing: border-box;
}
body {
	line-height: 1;
  background-color: #1E2730;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h2 {
  font-size: 2rem;
  margin: 10px
}
button {
  background-color: #0E151A;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  padding: 0px;
  cursor: pointer;
}
li {
  margin: 0px 10px;
}
input {
  margin: 10px;
}
`;
