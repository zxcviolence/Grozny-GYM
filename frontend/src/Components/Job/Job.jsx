import React from "react";
import styles from "./Job.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Job = () => {
  return (
    <div className={styles.main} style={{backgroundColor: '#1f272c'}}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h1>Вакансии</h1>
      </div>
      <article className={styles.textBlock}>
        <div style={{ color: "white", textAlign: 'center' }}>
          Grozny Gym, это яркий, уникальный проект, который с вами станет
          безусловным лидером на рынке.
        </div>
        <div className={styles.jobBlock}>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Администратор рецепции</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  Обязанности
                  <li>встреча членов клуба</li>
                  <li>запись членов клуба на уроки и тренировки;</li>
                  <li>информирование членов клуба об услугах клуба;</li>
                  <li> взаимодействие с другими подразделениями клуба;</li>
                  <li>прием входящих звонков.</li>
                </ul>
                <ul>
                  Требования
                  <li>грамотная речь;</li>
                  <li>коммуникабельность;</li>
                  <li>уверенный пользователь ПК;</li>
                  <li>стрессоустойчивость;</li>
                  <li>умение расставлять приоритеты;</li>
                  <li>ответственность;</li>
                  <li>дисциплинированность;</li>
                  <li>умение работать в команде.</li>
                </ul>
                <ul>
                  Условия
                  <li>официальное оформление по ТК РФ;</li>
                  <li>работа в крупной стабильной компании;</li>
                  <li>
                    обучение, профессиональный и карьерный рост в активно
                    развивающейся фитнес-сети;
                  </li>
                  <li>возможность бесплатно заниматься в фитнес-клубе;</li>
                  <li>гибкий график: 5/2 и 2/2.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Косметолог</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  Требования
                  <li>от 25 лет;</li>
                  <li>опыт работы от 2 лет;</li>
                  <li>среднее медицинское образование;</li>
                  <li>коммуникабельность;</li>
                  <li>исполнительность;</li>
                  <li>стрессоустойчивость;</li>
                  <li>пунктуальность.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Массажист</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  Обязанности
                  <li>выполнение массажа и Spa &ndash; программ;</li>
                  <li>консультирование членов клуба;</li>
                  <li>информирование членов клуба об услугах клуба;</li>
                  <li>соблюдение санитарных норм и требований.</li>
                </ul>
                <ul>
                  Требования
                  <li>
                    знания и практические навыки различных техник массажа;
                  </li>
                  <li>образование не ниже среднего медицинского;</li>
                  <li>наличие действующего сертификата;</li>
                  <li>
                    предпочтительно наличие сертификатов повышения квалификации;
                  </li>
                  <li>опыт работа от 2 &ndash; х лет;</li>
                  <li>знание Spa &ndash; этикета;</li>
                  <li>клиентоориентированность, ответственность.</li>
                </ul>
                <ul>
                  Условия
                  <li>возможность бесплатно заниматься в фитнес-клубе;</li>
                  <li>скидки на дополнительные услуги клуба;</li>
                  <li>
                    обеспечение расходными материалами и косметическими
                    средствами;
                  </li>
                  <li>обеспечение брендированной формой;</li>
                  <li>оплата труда: выход +%;</li>
                  <li>график работы: 2/2.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Менеджер отдела продаж</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <div bis_skin_checked="1">
                    <b>Обязанности:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; выполнение личного и коллективного плана;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; сервисное сопровождение членов клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; ведение документооборота и отчетности;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; четкое ведение информации в Базе данных;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; обеспечение высокого уровня продаж и сервиса.
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    <b>Требования:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">&bull; высшее образование;</div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; опыт работы в аналогичной должности не менее 2 лет;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; основы делопроизводства;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; основные принципы и методы прогнозирования;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; правила, принципы и структура продаж;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; принципы стратегического планирования;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">&bull; этика делового общения;</div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; опыт ведения переговоров;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; способность к самостоятельной работе и принятию
                    решений;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; пунктуальность, коммуникабельность, вежливость,
                    тактичность, надежность, дисциплинированность;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; навыки работы в команде.
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    <b>Условия:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; официальное оформление по ТК РФ;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; возможность профессионального роста и развития;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; возможность бесплатно заниматься в фитнес-клубе;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; скидки на дополнительные услуги клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">&bull; график работы: 2/2.</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>Парикмахер-стилист</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <div bis_skin_checked="1">
                    <div bis_skin_checked="1">
                      <b>Обязанности:</b>
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; знания и практические навыки стрижек и окрашивания
                      в различных техниках;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; качественное выполнение стрижек, укладок,
                      окрашивания, Spa &ndash; уходов;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; грамотное консультирование членов клуба;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; соблюдение санитарных норм и требований;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; знание правил и норм обработки инструментов.
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      <b>Требования:</b>
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; наличие диплома, подтверждающего квалификацию;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; наличие сертификатов повышения квалификации;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; опыт работа от 2 &ndash; х лет;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; знание Spa &ndash; этикета;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; клиентоориентированность, ответственность.
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      <b>Условия:</b>
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; официальное оформление по ТК РФ;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; возможность бесплатно заниматься в фитнес-клубе;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; скидки на дополнительные услуги клуба;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; обеспечение расходными материалами и косметическими
                      средствами;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; обеспечение брендированной формой;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">
                      &bull; оплата труда: выход +%;
                    </div>
                    <div bis_skin_checked="1"></div>
                    <div bis_skin_checked="1">&bull; график работы: 2/2.</div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>Техник</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <div bis_skin_checked="1">
                    <div bis_skin_checked="1">
                      <div bis_skin_checked="1">
                        <b>Обязанности:</b>
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; эксплуатация и ремонт систем вентиляции,
                        кондиционирования, отопления и
                        водопроводно-канализационных сетей фитнес-клубов;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; составление графиков по обслуживанию, ведение
                        необходимой технической документации;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; эксплуатация и ремонт оборудования систем
                        водоподготовки бассейнов, а также сантехнических систем;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; формирование заявок на запасные части и
                        материалы;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; аудит действующих систем и поддержание
                        работоспособности.
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        <b>Требования:</b>
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; опыт эксплуатации бассейнов;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; опыт работы от 3 лет на аналогичной позиции;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; владение ПК на уровне уверенного пользователя;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; умение принимать самостоятельные решения для
                        устранения аварийных ситуаций;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; наличие допуска по электробезопасности не ниже
                        III группы;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; лидерские качества, умение работать в команде,
                        принятие нестандартных решений.
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        <b>Условия:</b>
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; официальное оформление по ТК РФ;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; работа в крупной стабильной компании;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; бесплатные занятия в фитнес-клубе для
                        сотрудников;
                      </div>
                      <div bis_skin_checked="1"></div>
                      <div bis_skin_checked="1">
                        &bull; сменный график: 1/3,5/2;
                      </div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography>Тренер боевых искусств</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <div bis_skin_checked="1">
                    <b>Обязанности:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; дежурство в зале боевых искусств фитнес-клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; проведение персональных тренировок по боевым
                    искусствам;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; контроль соблюдения правил гостями клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; обеспечение безопасности в зале;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; оказание первой медицинской помощи при необходимости;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; проведение первичного инструктажа для членов клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; продвижение дополнительных услуг клуба;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; выполнение плана по проведению персональных
                    тренировок.
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    <b>Требования:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; среднее / высшее образование (приветствуется
                    физкультурно-педагогическое, медицинское);
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; наличие дополнительного образования;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; приветствуется наличие опыта работы в
                    фитнес-индустрии;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; коммуникабельность, ответственность, желание
                    развиваться в компании.
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    <b>Условия:</b>
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; обучение, профессиональный и карьерный рост в активно
                    развивающейся фитнес-сети;
                  </div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">&bull; гибкий график;</div>
                  <div bis_skin_checked="1"></div>
                  <div bis_skin_checked="1">
                    &bull; сдельная оплата, % от персональных тренировок.
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography>Тренер водных программ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <b>Обязанности:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; дежурство в бассейне фитнес-клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; контроль соблюдения правил гостями клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обеспечение безопасности в бассейне;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; оказание первой медицинской помощи при необходимости;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение первичного инструктажа для членов клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение персональных тренировок;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение групповых занятий;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; продвижение дополнительных услуг клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; выполнение плана по проведению персональных тренировок;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; участие в клубных мероприятиях.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Требования:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; спортивное прошлое (водные виды спорта), наличие
                  разряда приветствуется;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; среднее / высшее образование (приветствуется
                  физкультурно-педагогическое, медицинское);
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; наличие дополнительного образования (курсы инструкторов
                  Аквафитнеса, ФФАР и т.д.);
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; приветствуется наличие опыта работы в фитнес-индустрии;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; коммуникабельность, ответственность, желание
                  развиваться в компании.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Условия:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обучение, профессиональный и карьерный рост в активно
                  развивающейся фитнес-сети;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; гибкий график;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; % от персональных тренировок.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography>Тренер групповых программ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <b>Обязанности:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение групповых занятий по фитнес - направлениям
                  (аэробика, степ, пилатес, йога, сайкл, силовые программы и
                  т.д.) и персональных тренировок;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение первичного инструктажа для членов клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; продвижение дополнительных услуги клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; ведение учетно-отчетной документации;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; участие в клубных мероприятиях.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Требования:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; образование: высшее физкультурное/ педагогическое/
                  медицинское образование или непрофильное высшее образование +
                  звание мастера спорта или наличие сертификата о повышении
                  квалификации по программе &laquo;Тренер групповых
                  программ&raquo;;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; опыт работы: от 1 года приветствуется, желательно
                  наличие сертификатов;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; знание методик базовых программ (аэробика, степ,
                  силовые программы);
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; умение привлекать и удерживать внимание занимающихся;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; коммуникабельность, доброжелательность, активность,
                  энергичность;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; креативное мышление, желание работать в команде
                  профессионалов и развиваться в компании.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Условия:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обучение, профессиональный и карьерный рост в активно
                  развивающейся фитнес-сети;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; гибкий график;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; ставка за групповое занятие и % от персональных
                  тренировок.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography>Тренер детского клуба</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <b>Обязанности:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение детских групповых и персональных занятий;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; дежурство в детской комнате;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; участие в клубных мероприятиях;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Требования:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; опыт работы с детьми;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; опыт работы в фитнесе;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; готовность к обучению;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; инициативность, ответственность, коммуникабельность.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Условия:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обучение, профессиональный и карьерный рост в активно
                  развивающейся фитнес-сети;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">&bull; гибкий график;</div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; ставка за часы дежурства и % от персональных
                  тренировок.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.firstBlock}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel10a-content"
              id="panel10a-header"
            >
              <Typography>Тренер тренажерного зала</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div bis_skin_checked="1">
                  <b>Обязанности:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; дежурство в тренажерном зале фитнес-клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обеспечение безопасности в зале;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; оказание первой медицинской помощи при необходимости;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение первичного инструктажа для членов клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; проведение персональных тренировок;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; выполнение плана по проведению персональных тренировок;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; продвижение дополнительных услуг клуба;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; контроль соблюдения правил гостями клуба.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Требования:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; среднее / высшее образование (приветствуется
                  физкультурно-педагогическое, медицинское);
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; наличие дополнительного образования (курсы инструкторов
                  тренажерного зала, Б. Вейдера, ФФАР, FPA, и т.д.);
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; приветствуется наличие опыта работы в фитнес-индустрии;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; коммуникабельность, ответственность, желание
                  развиваться в компании.
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  <b>Условия:</b>
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; обучение, профессиональный и карьерный рост в активно
                  развивающейся фитнес-сети;
                </div>
                <div bis_skin_checked="1"></div>
                <div bis_skin_checked="1">
                  &bull; гибкий график; &bull; сдельная оплата, % от
                  персональных тренировок.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </article>
    </div>
    </div>
  );
};

export default Job;
