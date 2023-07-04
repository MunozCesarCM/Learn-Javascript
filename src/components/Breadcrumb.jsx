import { Link } from 'react-router-dom';

const formatText = (value) => {
  let items = value.split('-');

  items = items.map((item) =>
    item.charAt(0).toUpperCase() + item.slice(1)
  );

  return items.join(' ');
}

const Breadcrumb = () => {
  const url = window.location.href;
  const path = url.split('/').slice(3);

  return (
    <nav>
      {path.map((item, index) => (
        <span key={item}>
          <Link to={'/' + path.slice(0, index + 1).join('/')}>
            <span className='hover:underline cursor-pointer'>
              {formatText(item, index === path.length - 1)}
            </span>
          </Link>
          {index !== path.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  )
};

export default Breadcrumb;
