import Market from "../assets/direction_icon.png"
import Market2 from "../assets/direction_icon (1).png"
import Market3 from "../assets/direction_icon (2).png"
import Market4 from "../assets/direction_icon (3).png"
import Market5 from "../assets/direction_icon (4).png"
import Market6 from "../assets/direction_icon (5).png"
import Market7 from "../assets/direction_icon (6).png"
import Market8 from "../assets/direction_icon (7).png"


const Works = () => {
  return (
    <div>
        <h2>Выберите направление работы</h2>
        <div>
            <div>
                <img src={Market} alt="" />
                <p>Маркетинг</p>
            </div>
            <div>
                <img src={Market3} alt="" />
                <p>Разработка</p>
            </div>
            <div>
                <img src={Market4} alt="" />
                <p>Аналитика</p>
            </div>
            <div>
                <img src={Market5} alt="" />
                <p>Комьюнити</p>
            </div>
            <div>
                <img src={Market2} alt="" />
                <p>Дизайн</p>
            </div>
            <div>
                <img src={Market6} alt="" />
                <p>Продажи</p>
            </div>
            <div>
                <img src={Market7} alt="" />
                <p>Контент</p>
            </div>
            <div>
                <img src={Market8} alt="" />
                <p>Топ-менеджмент</p>
            </div>
        </div>
    </div>
  )
}

export default Works