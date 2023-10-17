import "../../lib/styles/mainBar.css";

export default function MainBar() {
  return (
    <header>
      <div id="mainSentence">free shipping above € 100 in the Netherlands
      <button>shopping cart</button>
      <button>sign in</button>
      </div>
      <div>
        <h1 id="title">sticky lemon</h1>
      </div>
      <div>
        <nav id="navi">
          <ul>
            <li><a href="">shop all</a></li>
            <li><a href="">bags</a></li>
            <li><a href="">footwear</a></li>
            <li><a href="">accessories</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
