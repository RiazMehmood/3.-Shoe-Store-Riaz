import { shoes } from './Data';
import { Link } from 'react-router-dom';

export function LaunchIndex()  {

return (
      <ul>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <li key={slug}>
            <Link to={`/launch/${slug}`}>
              <h2>{name}</h2>
              <img src={img} alt={name} />
            </Link>
          </li>
        ))}
      </ul>
    );
}
  