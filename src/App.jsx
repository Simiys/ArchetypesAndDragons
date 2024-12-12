import "./App.css";
import GradientBar from "./GradientBar";
import GradientCircle from "./GradientCirlcle";
import ThreeCirclesLayout from "./Triple";
import ThreeCirclesLayoutBot from "./TripleBot";
import ThreeCirclesLayoutLeft from "./TripleLeft";
import ThreeCirclesLayoutRight from "./TripleRight";
import { useEffect, useState } from "react";

function App() {
  const archs = {
    arch_manager: "Управленец",
    arch_expert: "Эксперт",
    arch_creator: "Создатель",
    arch_investigator: "Исследователь",
    arch_visionary: "Визионер",
    arch_leader: "Лидер",
    arch_innovator: "Новатор",
    arch_mentor: "Ментор",
    arch_partner: "Партнер",
    arch_speaker: "Спикер",
    arch_ideologist: "Идеолог",
    arch_communicator: "Коммуникатор",
  };

  const dragons = {
    dragon_tyrant: "Тиран",
    dragon_opportunist: "Приспособленец",
    dragon_impostor: "Самозванец",
    dragon_sad: "Жертва",
    dragon_hater: "Хейтер",
    dragon_narcissist: "Нарцисс",
    dragon_trickster: "Трикстер",
    dragon_savior: "Спасатель",
    dragon_perfectionist: "Перфекционист",
    dragon_lost: "Потеряшка",
    dragon_child: "Ребенок",
    dragon_manipulator: "Манипулятор",
  };

  const [paramMap, setParamMap] = useState(new Map());
  const [lidership, setlidership] = useState([]);
  const [communictation, setcommunictation] = useState([]);
  const [mastership, setmastership] = useState([]);
  const [expert, setexpert] = useState([]);
  const [lidershipD, setlidershipD] = useState([]);
  const [communictationD, setcommunictationD] = useState([]);
  const [mastershipD, setmastershipD] = useState([]);
  const [expertD, setexpertD] = useState([]);
  const [topArch, setTopArch] = useState([]);
  const [topDragon, setTopDragon] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    const map = new Map();
    queryParams.forEach((value, key) => {
      map.set(key, value);
    });

    setParamMap(map);
  }, []);

  const filterAndSortMapArch = (map) => {
    const filtered = Array.from(map)
      .filter(([key]) => key.startsWith("arch"))
      .map(([key, value]) => ({ key, value: parseInt(value, 10) }));

    filtered.sort((a, b) => b.value - a.value);

    return filtered.slice(0, 4);
  };

  const filterAndSortMapDragon = (map) => {
    const filtered = Array.from(map)
      .filter(([key]) => key.startsWith("dragon"))
      .map(([key, value]) => ({ key, value: parseInt(value, 10) }));

    filtered.sort((a, b) => b.value - a.value);

    return filtered.slice(0, 4);
  };

  useEffect(() => {
    const fillSpecialMaps = () => {
      console.log("alo");
      let list = [];
      list.push({ name: "Визионер", val: paramMap.get("arch_visionary") - 0 });
      list.push({ name: "Новатор", val: paramMap.get("arch_innovator") - 0 });
      list.push({ name: "Лидер", val: paramMap.get("arch_leader") - 0 });

      list.sort((a, b) => b.val - a.val);
      setlidership(list);

      list = [];

      list.push({ name: "Партнер", val: paramMap.get("arch_partner") - 0 });
      list.push({ name: "Спикер", val: paramMap.get("arch_speaker") - 0 });
      list.push({
        name: "Коммуникатор",
        val: paramMap.get("arch_communicator") - 0,
      });

      list.sort((a, b) => b.val - a.val);
      setcommunictation(list);

      list = [];

      list.push({ name: "Управленец", val: paramMap.get("arch_manager") - 0 });
      list.push({ name: "Ментор", val: paramMap.get("arch_mentor") - 0 });
      list.push({ name: "Создатель", val: paramMap.get("arch_creator") - 0 });

      list.sort((a, b) => b.val - a.val);
      setmastership(list);

      list = [];

      list.push({ name: "Эксперт", val: paramMap.get("arch_expert") - 0 });
      list.push({ name: "Идеолог", val: paramMap.get("arch_ideologist") - 0 });
      list.push({
        name: "Исследователь",
        val: paramMap.get("arch_investigator") - 0,
      });

      list.sort((a, b) => b.val - a.val);
      setexpert(list);

      list = [];
      list.push({ name: "Хейтер", val: paramMap.get("dragon_hater") - 0 });
      list.push({ name: "Жертва", val: paramMap.get("dragon_sad") - 0 });
      list.push({
        name: "Манипулятор",
        val: paramMap.get("dragon_manipulator") - 0,
      });
      list.sort((a, b) => b.val - a.val);
      setlidershipD(list);

      list = [];
      list.push({
        name: "Приспособленец",
        val: paramMap.get("dragon_opportunist") - 0,
      });
      list.push({
        name: "Нарцисс",
        val: paramMap.get("dragon_narcissist") - 0,
      });
      list.push({
        name: "Трикстер",
        val: paramMap.get("dragon_trickster") - 0,
      });
      list.sort((a, b) => b.val - a.val);
      setcommunictationD(list);

      list = [];
      list.push({ name: "Тиран", val: paramMap.get("dragon_tyrant") - 0 });
      list.push({ name: "Спасатель", val: paramMap.get("dragon_savior") - 0 });
      list.push({
        name: "Перфекционист",
        val: paramMap.get("dragon_perfectionist") - 0,
      });
      list.sort((a, b) => b.val - a.val);
      setmastershipD(list);

      list = [];
      list.push({
        name: "Самозванец",
        val: paramMap.get("dragon_impostor") - 0,
      });
      list.push({ name: "Потеряшка", val: paramMap.get("dragon_lost") - 0 });
      list.push({ name: "Ребенок", val: paramMap.get("dragon_child") - 0 });
      list.sort((a, b) => b.val - a.val);
      setexpertD(list);
    };

    console.log(paramMap);
    if (paramMap.size > 0) {
      fillSpecialMaps();
      setTopArch(filterAndSortMapArch(paramMap));
      setTopDragon(filterAndSortMapDragon(paramMap));
    }
  }, [paramMap]);

  const getColorsArch = (num) => {
    if (num > 26) {
      return ["#FEB298", "#FD7582"];
    } else if (num >= 20) {
      return ["#61F6EA", "#0EB1D7"];
    }
    return ["#7E59FD", "#6641E1"];
  };

  const getColorsDrag = (num) => {
    if (num > 10) {
      return ["#BA0026", "#91002D"];
    } else if (num >= 6) {
      return ["#B25998", "#A41E64"];
    }
    return ["#7300A9", "#6F00A0"];
  };

  const getSize = (num) => {
    if (num > 26) {
      return 80;
    } else if (num >= 20) {
      return 65;
    }
    return 50;
  };

  return (
    <div className="background-color">
      <div className="background">
        <div className="header-name">
          {paramMap.get("name")}, {paramMap.get("desc")}
        </div>
        <div id="header">
          <div className="header-text">
            <h2 id="h-text-1">Результаты теста</h2>
            <p id="text-1">
              Привет, {paramMap.get("name")}! На этой картинке ты наглядно
              видишь, какие из 12-ти суперсил-архетипов доминируют, активны или
              подавлены у тебя на текущий момент.
            </p>
          </div>
          <div id="exampleCircles">
            <GradientCircle
              size={45}
              colors={["#FEB298", "#FD7582"]}
              text="26-30"
            />
            <GradientCircle
              size={35}
              colors={["#61F6EA", "#0EB1D7"]}
              text="20-25"
            />
            <GradientCircle
              size={30}
              colors={["#7E59FD", "#6641E1"]}
              text="<20"
            />
          </div>
          <div id="exCirclesText">
            <p id="ex-text-1">Доминирующие</p>
            <p id="ex-text-2">Активные</p>
            <p id="ex-text-3">Подавленные</p>
          </div>
        </div>
        <div id="mainCircles">
          <div id="topC">
            <ThreeCirclesLayout
              circles={
                lidership.length === 3
                  ? lidership.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsArch(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#FEB298", "#FD7582"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7E59FD", "#6641E1"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#61F6EA", "#0EB1D7"],
                      },
                    ]
              }
            />
          </div>
          <div id="leftC">
            <ThreeCirclesLayoutLeft
              circles={
                expert.length === 3
                  ? expert.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsArch(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#FEB298", "#FD7582"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#61F6EA", "#0EB1D7"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7E59FD", "#6641E1"],
                      },
                    ]
              }
            />
          </div>
          <div id="rightC">
            <ThreeCirclesLayoutRight
              circles={
                communictation.length === 3
                  ? communictation.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsArch(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#FEB298", "#FD7582"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#61F6EA", "#0EB1D7"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7E59FD", "#6641E1"],
                      },
                    ]
              }
            />
          </div>
          <div id="botC">
            <ThreeCirclesLayoutBot
              circles={
                mastership.length === 3
                  ? mastership.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsArch(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#FEB298", "#FD7582"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#61F6EA", "#0EB1D7"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7E59FD", "#6641E1"],
                      },
                    ]
              }
            />
          </div>
        </div>
        <div className="footer" id="botDevider">
          <div className="header-text-2">
            <h2 id="h-text-2">Ведущие силы</h2>
            <p id="text-2">
              Это твои общие баллы по четырем жизненным стратегиям — они
              считаются как сумма трех архетипов внутри каждой стратегии. Обрати
              внимание, какие стратегии у тебя лидируют и какие архетипы
              занимают первых 4 места — на это можно делать ставку при выборе
              сферы реализации и роли в ней.
            </p>
          </div>
          <div id="bars-1">
            <h3 className="bars-t-h">стратегии</h3>
            <p className="bars-t">
              Лидерство {paramMap.get("strategy_leader")} из 90
            </p>
            <GradientBar
              percentage={(paramMap.get("strategy_leader") * 100) / 90}
              gradientColors={["#B723DC", "#9100EE"]}
            />
            <p className="bars-t">
              Коммуникация {paramMap.get("strategy_communicator")} из 90
            </p>
            <GradientBar
              percentage={(paramMap.get("strategy_communicator") * 100) / 90}
              gradientColors={["#FE9787", "#FD5F69"]}
            />
            <p className="bars-t">
              Мастерство {paramMap.get("strategy_master")} из 90
            </p>
            <GradientBar
              percentage={(paramMap.get("strategy_master") * 100) / 90}
              gradientColors={["#FEA355", "#FDC86C"]}
            />
            <p className="bars-t">
              Экспертиза {paramMap.get("strategy_expert")} из 90
            </p>
            <GradientBar
              percentage={(paramMap.get("strategy_expert") * 100) / 90}
              gradientColors={["#0E85FF", "#0EE2FF"]}
            />
          </div>
          {topArch.length > 0 && (
            <div id="bars-2">
              <h3 className="bars-t-h">архетипы</h3>
              <p className="bars-t">
                {archs[topArch[0].key]} {topArch[0].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topArch[0].value - 0) / 30}
                gradientColors={["#FEB298", "#FD7582"]}
              />
              <p className="bars-t">
                {archs[topArch[1].key]} {topArch[1].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topArch[1].value - 0) / 30}
                gradientColors={["#FEB298", "#FEB298"]}
              />
              <p className="bars-t">
                {archs[topArch[2].key]} {topArch[2].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topArch[2].value - 0) / 30}
                gradientColors={["#61F6EA", "#0EB1D7"]}
              />
              <p className="bars-t">
                {archs[topArch[3].key]} {topArch[3].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topArch[3].value - 0) / 30}
                gradientColors={["#61F6EA", "#61F6EA"]}
              />
            </div>
          )}
        </div>
        <div id="header">
          <div className="header-text">
            <h2 id="h-text-1" style={{ fontSize: "0.8rem", width: "100%" }}>
              Мешающие убеждения, баги, привычки, ограничения
            </h2>
            <p id="text-1">
              Выход на новый уровень жизни и реализации, большую финансовую цель
              или любую другую лежит через дракона, которого придется приручить.
              Дракон — это внутренняя мешающая тебе часть, оборотная сторона
              силы или огромный заряд энергии, вытесненный в тень.
            </p>
          </div>
          <div id="exampleCircles">
            <GradientCircle
              size={45}
              colors={["#BA0026", "#91002D"]}
              text="11-15"
            />
            <GradientCircle
              size={35}
              colors={["#B25998", "#A41E64"]}
              text="6-11"
            />
            <GradientCircle
              size={30}
              colors={["#7300A9", "#650086"]}
              text="<6"
            />
          </div>
          <div id="exCirclesText">
            <p id="ex-text-1">Доминирующие</p>
            <p id="ex-text-2">Активные</p>
            <p id="ex-text-3">Прирученные</p>
          </div>
        </div>
        <div id="mainCircles">
          <div id="topC">
            <ThreeCirclesLayout
              circles={
                lidershipD.length === 3
                  ? lidershipD.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsDrag(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#BA0026", "#91002D"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7300A9", "#6F00A0"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#B25998", "#A41E64"],
                      },
                    ]
              }
            />
          </div>
          <div id="leftC">
            <ThreeCirclesLayoutLeft
              circles={
                expertD.length === 3
                  ? expertD.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsDrag(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#BA0026", "#91002D"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#B25998", "#A41E64"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7300A9", "#6F00A0"],
                      },
                    ]
              }
            />
          </div>
          <div id="rightC">
            <ThreeCirclesLayoutRight
              circles={
                communictationD.length === 3
                  ? communictationD.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsDrag(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#BA0026", "#91002D"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#B25998", "#A41E64"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7300A9", "#6F00A0"],
                      },
                    ]
              }
            />
          </div>
          <div id="botC">
            <ThreeCirclesLayoutBot
              circles={
                mastershipD.length === 3
                  ? mastershipD.map((circle) => ({
                      size: getSize(circle.val),
                      text: circle.name + "\n" + circle.val,
                      colors: getColorsDrag(circle.val),
                    }))
                  : [
                      {
                        size: 80,
                        text: "Визионер",
                        colors: ["#BA0026", "#91002D"],
                      },
                      {
                        size: 65,
                        text: "Новатор",
                        colors: ["#B25998", "#A41E64"],
                      },
                      {
                        size: 50,
                        text: "Лидер",
                        colors: ["#7300A9", "#6F00A0"],
                      },
                    ]
              }
            />
          </div>
        </div>
        <div className="footer">
          <div className="header-text-2">
            <h2 id="h-text-2">Внутренние баги</h2>
            <p id="text-2">
              Чем больше дракон, тем больше твой потенциал к росту и
              положительным изменениям. Начни с самого доминирующего бага —
              легализуй эту часть себя, приручи эту силу и используй талант себе
              и окружающим во благо.
            </p>
          </div>
          {topDragon.length > 0 && (
            <div id="bars-1" style={{ marginLeft: "50px" }}>
              <h3 className="bars-t-h">Драконы</h3>
              <p className="bars-t">
                {dragons[topDragon[0].key]} {topDragon[0].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topDragon[0].value - 0) / 30}
                gradientColors={["#BA0026", "#91002D"]}
              />
              <p className="bars-t">
                {dragons[topDragon[1].key]} {topDragon[1].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topDragon[1].value - 0) / 30}
                gradientColors={["#BA0026", "#91002D"]}
              />
              <p className="bars-t">
                {dragons[topDragon[2].key]} {topDragon[2].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topDragon[2].value - 0) / 30}
                gradientColors={["#B25998", "#A41E64"]}
              />
              <p className="bars-t">
                {dragons[topDragon[3].key]} {topDragon[3].value} из 30
              </p>
              <GradientBar
                percentage={(100 * topDragon[3].value - 0) / 30}
                gradientColors={["#B25998", "#A41E64"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
