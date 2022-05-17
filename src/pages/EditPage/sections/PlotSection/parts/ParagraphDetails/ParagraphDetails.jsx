import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionContainer } from "../../../parts/SectionContainer/SectionContainer";
import { TrashIcon, ArrowLeftIcon } from "../../../../../../img/icons";
import styles from "./ParagraphDetails.module.scss";

const ParagraphDetails = () => {
  return (
    <div className={styles.details}>
      <SectionContainer className={styles.detailsContainer}>
        <div className={styles.detailsArrowL}>
          <ArrowLeftIcon />
        </div>
        <span className={styles.detailsParagraphNumber}>{1}</span>
        <p
          className={styles.detailsParagraphName}
        >{`${"Параграф"} ${"#"} ${1}`}</p>
        <div className={styles.detailsParagraphRemove}>
          <TrashIcon />
        </div>
      </SectionContainer>
      {/* //TAbs */}
      <SectionContainer className={styles.detailsTabs}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabsList}>
            <Tab className={styles.tabsLink}>Выбор</Tab>
            <Tab className={styles.tabsLink}>Случайное событие</Tab>
          </TabList>
          <TabPanel className={styles.tabsPanel}>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </SectionContainer>
    </div>
  );
};

export default ParagraphDetails;
