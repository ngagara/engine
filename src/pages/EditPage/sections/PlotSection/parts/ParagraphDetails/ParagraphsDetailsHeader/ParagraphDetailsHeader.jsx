import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import { TrashIcon, ArrowLeftIcon } from "../../../../../../../img/icons";
import styles from "./ParagraphDetailsHeader.module.scss";

const ParagraphDetailsHeader = () => {
  return (
    <SectionContainer className={styles.header}>
      <div className={styles.headerArrowL}>
        <ArrowLeftIcon />
      </div>
      <span className={styles.headerParagraphNumber}>{1}</span>
      <p
        className={styles.headerParagraphName}
      >{`${"Параграф"} ${"#"} ${1}`}</p>
      <div className={styles.headerParagraphRemove}>
        <TrashIcon />
      </div>
    </SectionContainer>
  );
};

export default ParagraphDetailsHeader;
