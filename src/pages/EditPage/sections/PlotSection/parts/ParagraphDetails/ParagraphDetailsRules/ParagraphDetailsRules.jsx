import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  BoldIcon,
  ItalicIcon,
  UnderlinedIcon,
  StrikethroughIcon
} from "../../../../../../../img/icons";
import { Dropdown, Textarea } from "../../../../../../../ui-kit";
import FilesLoader from "../../../../parts/LoaderFiles/LoaderFiles";
import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import styles from "./ParagraphDetailsRules.module.scss";

const ParagraphDetailsRules = () => {
  const { delete_image, delete_sound } = useSelector(
    (state) => state.support.modals
  );

  return (
    <Tabs className={styles.tabs} defaultFocus={true}>
      <TabList>
        <SectionContainer className={styles.tabsList}>
          <Tab
            className={styles.tabsLink}
            selectedClassName={styles.tabsLinkActive}
          >
            Выбор
          </Tab>
          <Tab
            className={styles.tabsLink}
            selectedClassName={styles.tabsLinkActive}
          >
            Случайное событие
          </Tab>
        </SectionContainer>
      </TabList>
      <TabPanel className={styles.tabsPanel}>
        <Dropdown title={"Изображение"}>
          <img
            src={
              "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            }
            alt={"book.name"}
            className={styles.image}
          />
          <FilesLoader
            modalTitle={"Удалить изображение?"}
            active={delete_image}
            typeModal={"delete_image"}
          />
        </Dropdown>
        <Dropdown title={"Текст "}>
          <div className={styles.formatting}>
            <div className={styles.formattingIcon}>
              <BoldIcon />
            </div>
            <div className={styles.formattingIcon}>
              <ItalicIcon />
            </div>
            <div className={styles.formattingIcon}>
              <UnderlinedIcon />
            </div>
            <div className={styles.formattingIcon}>
              <StrikethroughIcon />
            </div>
          </div>
          <Textarea />
        </Dropdown>
        <Dropdown title={"Звук"}>
          <FilesLoader
            modalTitle={"Удалить Звук?"}
            active={delete_sound}
            typeModal={"delete_sound"}
          />
        </Dropdown>
      </TabPanel>
      <TabPanel className={styles.tabsPanel}>
        <Dropdown title={"Изображение"}>
          <img
            src={
              "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            }
            alt={"book.name"}
            className={styles.image}
          />
          <FilesLoader
            modalTitle={"Удалить изображение?"}
            active={delete_image}
            typeModal={"delete_image"}
          />
        </Dropdown>
        <Dropdown title={"Текст"}>
          <div className={styles.formatting}>
            <div className={styles.formattingIcon}>
              <BoldIcon />
            </div>
            <div className={styles.formattingIcon}>
              <ItalicIcon />
            </div>
            <div className={styles.formattingIcon}>
              <UnderlinedIcon />
            </div>
            <div className={styles.formattingIcon}>
              <StrikethroughIcon />
            </div>
          </div>
          <Textarea />
        </Dropdown>
        <Dropdown title={"Звук"}>
          <FilesLoader
            modalTitle={"Удалить Звук?"}
            active={delete_sound}
            typeModal={"delete_sound"}
          />
        </Dropdown>
      </TabPanel>
    </Tabs>
  );
};

export default ParagraphDetailsRules;
