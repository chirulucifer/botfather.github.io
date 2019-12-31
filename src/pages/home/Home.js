import React from 'react';
import { useSelector } from 'react-redux';
import TopBar from '../../components/topbar';
import Profile from '../../components/profile';
import Skillset from '../../components/skillset';

const Home = () => {
  const { initials } = useSelector(({ home }) => home);
  return (
    <>
      <TopBar
        initials={initials}
        onActionButtonClick={() => {
          window.open(
            "mailto:hi@tusharmohan.co?subject=Hey Tushar! Let's talk :)"
          );
        }}
      />
      <Profile />
      <Skillset />
    </>
  );
};

export default Home;
