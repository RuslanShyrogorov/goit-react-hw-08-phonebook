import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import { Header } from 'components/AppBar/AppBar';

export function Layout() {
  return (
    <>
      <Header />

      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
}
