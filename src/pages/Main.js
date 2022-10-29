import Logo2 from '../assets/images/logo2.png';
import Video from '../components/Video.js';

const Main = () => {
  return (
    <div>
      <img src={Logo2} className='logo2' alt='logo' />
      <img src={Logo2} className='logo2' alt='logo' />
      <img src={Logo2} className='logo2' alt='logo' />
      <br />
      <h2 className='main'>
        <p style={{ color: 'rgb(16, 16, 140', fontWeight: 'bold' }}>
          What Does It Mean To Be An Earth Angel?
        </p>
      </h2>
      <br />
      <h3 className='main-sub'>
        {' '}
        <p style={{ color: 'rgb(16, 16, 140', fontWeight: 'bold' }}>
          {' '}
          Being an Earth Angel doesn’t mean you are perfect, it doesn’t mean
          you’re an angel (the angelic path is different from the path of
          humanity) and it doesn’t even mean that you’re saint-like. Like all of
          humanity, Earth Angels make mistakes, experience challenges, and feel
          disconnected at times. Being an Earth Angel means that you’re called
          at the soul level to help others, spread kindness, have compassion and
          make a difference on Earth by bringing the light and love of the
          higher spiritual realms into physical reality. <br /> <br />  This is a site for those in need and those who need to give back.
          <Video videoId='Z8oJV_mBY9g' /> <br />
       
        </p>
      </h3>
    </div>
  );
};

export default Main;
