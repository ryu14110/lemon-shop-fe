// import { css } from "@emotion/css"; 나중에 이거 노션보고 스타일드 css 바꾸기

export default function Footer() {
  return (
    <>
      <div>
        services
        <ul>
          <button>customer service</button>
        </ul>
      </div>
      <div>
        S T I C K Y L E M O N
        <ul>
          <button>ABOUT</button>
        </ul>
      </div>
      <div>
        N E W S L E T T E R
        <ul>
          <input />
          <button>GO!</button>
        </ul>
      </div>
    </>
  );
}

// const Button = styled`
//   --accent-color: white;

//   /* This renders the buttons above... Edit me! */
//   background: transparent;
//   border-radius: 3px;
//   border: 1px solid var(--accent-color);
//   color: var(--accent-color);
//   display: inline-block;
//   margin: 0.5rem 1rem;
//   padding: 0.5rem 0;
//   transition: all 200ms ease-in-out;
//   width: 11rem;

//   &:hover {
//     filter: brightness(0.85);
//   }
