import styles from "./PlotSection.module.scss";
import Paragraphs from './parts/Paragraphs/Paragraphs';
import { Container } from './../../../../ui-kit/Container/Container';
import ParagraphDetails from './parts/ParagraphDetails/ParagraphDetails';

const PlotSection = () => {
  return <div className={styles.section}>
    <Paragraphs />
    <ParagraphDetails />
  </div>;
};

export default PlotSection;
