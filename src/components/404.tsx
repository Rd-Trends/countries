import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import Button from './Button';

const NotFoundPage = () => {
  return (
    <div
      className={`${styles.paddingX} mx-auto  ${styles.elementTextColor} flex flex-col items-center justify-center h-[calc(100vh-10rem)]`}
    >
      <span className=" text-[10rem] md:text-[14rem] drop-shadow-md font-bold">404</span>
      <p className=" text-[2.5rem] text-center">Page Not Found</p>
      <p className=" text-lg text-center mb-4">
        {`Sorry, we can't find the page you are looking for`}
      </p>
      <Button tag={Link} to="/">
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
