import { Outlet } from 'react-router-dom';

export function Launch() {
    return (
      <div>
        <h1>Launch</h1>
  
        <Outlet />
      </div>
    );
  }