import Avatar from "../assets/Avatar.png";

const Staff = () => {
  return (
    <section>
      <h2>Как выглядит база кандидатов</h2>
      <div className="flex gap-[32px]">
        <div className="w-[300px] h-[338px] rounded-[12px] bg-white 
        flex flex-col items-center pt-[28px]">
          <img src={Avatar} alt="" />
          <h3 className="text-[20px]">Анциферов Владимир</h3>
          <p className='text-center text-[#979797] text-[16px]'>Директор по маркетингу </p>
          <p>Опыт:более 13 лет</p>
          <p>Зарплата:
          200 тыс. ₽</p>
          <button>Посмотреть справку</button>
        </div>
      </div>
    </section>
  );
};

export default Staff;
