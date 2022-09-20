import "./styles.css";

console.log("index.jsからconsole.log()表示のメッセージ");

document.getElementById("app").innerHTML = `
<h1>Hello VanillaJS!</h1>
<h1>Hello VanillaJS2!</h1>
<h1>Hello VanillaJS3!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
