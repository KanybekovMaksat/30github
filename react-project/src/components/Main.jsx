import MainImg from '../assets/main.png';

const Main = () => {
  return (
    <section className="w-[1280px] mx-auto mt-[100px] flex justify-between">
      <div>
        <h1>
          Нанимайте проверенных <br /> <span>кандидатов</span>
        </h1>
        <p className='w-[522px]'>
          Мы уже со всеми провели собеседования и подтверждаем их
          профессионализм
        </p>
        <div className='flex gap-[20px]'>
          <button className='bg-[#F1DF6F] w-[214px] h-[48px] rounded-full'>Выбрать кандидата</button>
          <button className='w-[177px] h-[48px] border border-[#F1DF6F] rounded-full'>Попасть в базу</button>
        </div>
      </div>
      <img src={MainImg} alt="" />
    </section>
  );
};

export default Main;
