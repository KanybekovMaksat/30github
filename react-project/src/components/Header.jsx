import LogoImg from '../assets/Logo.png';
import seachImg from '../assets/search.png'

const Header = () => {
  return (
    <header className='w-[1280px] mx-auto flex items-center 
    justify-between py-[25px] border-b border-[#E8E8E8]'>
      <img src={LogoImg} alt="" />
      <nav className='flex gap-[32px]'>
        <a href="">Найти кандидата</a>
        <a href="">Попасть в базу</a>
        <a href="">О сервисе</a>
        <a href="">Портал</a>
      </nav>
      <div className='flex items-center border border-[gray] 
      rounded-full py-[10px] px-[14px] gap-[8px]'>
        <img src={seachImg} alt="" className='w-[20px] h-[20px]' />
        <input type="text" placeholder="Поиск" className='outline-none' />
      </div>
      <div className='flex gap-[12px] items-center'>
        <h5>Иннокентий</h5>
        <div className='w-[40px] h-[40px] bg-[#C7D2FE] 
        rounded-full flex items-center justify-center'>И</div>
      </div>
    </header>
  );
};

export default Header;
