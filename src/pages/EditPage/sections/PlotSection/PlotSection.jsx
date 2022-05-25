import Paragraphs from './parts/Paragraphs/Paragraphs';
import ParagraphDetails from './parts/ParagraphDetails/ParagraphDetails';
import styles from "./PlotSection.module.scss";

const PlotSection = () => {
  return <div className={styles.section}>
    <Paragraphs />
    <ParagraphDetails />
  </div>;
};

export default PlotSection;
