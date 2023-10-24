import { Link } from 'react-router-dom';

export default function Sidebar() {
  // const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul className="orderlists">
          <li>
            <Link to="/" className="listitems">
              shop all
            </Link>
          </li>
          <li>
            <Link to="/?category={groceries}" className="listitems">
              bags
            </Link>
          </li>
          <li>
            <Link to="/footwear" className="listitems">
              footwear
            </Link>
          </li>
          <li>
            <Link to="/accessories" className="listitems">
              accessories
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
