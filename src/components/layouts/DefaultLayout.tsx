import { Outlet } from 'react-router-dom';
import Header from '../Header';

// Where you set layout app such as header, sidebar, etc.
function DefaultLayout() {
  return (
    <div className='container mx-auto min-h-screen flex flex-col p-6'>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default DefaultLayout;
