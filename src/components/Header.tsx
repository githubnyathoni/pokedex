import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  return (
    <div className='flex justify-center'>
      <img
        className='cursor-pointer'
        onClick={() => returnHome()}
        src='/pokedex-logo.png'
        width={150}
      />
    </div>
  );
}

export default Header;
