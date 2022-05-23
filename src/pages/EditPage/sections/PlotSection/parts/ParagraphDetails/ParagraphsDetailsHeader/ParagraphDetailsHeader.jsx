import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../../../../../store/supportSlice';
import { Modal, Button } from './../../../../../../../ui-kit';
import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import { TrashIcon, ArrowLeftIcon, SaveIcon } from "../../../../../../../img/icons";
import styles from "./ParagraphDetailsHeader.module.scss";

const ParagraphDetailsHeader = () => {
  const dispatch = useDispatch();
  const { delete_paragraphs } = useSelector((state) => state.support.modals);

  return (
    <SectionContainer className={styles.header}>
      <div className={styles.headerArrowL}>
        <ArrowLeftIcon />
      </div>
      <span className={styles.headerParagraphNumber}>{1}</span>
      <p
        className={styles.headerParagraphName}
      >{`${"Параграф"} ${"#"} ${1}`}</p>
      <div className={styles.headerParagraphIcons}>
        <div className={styles.headerParagraphSave}>
          <SaveIcon />
        </div>
        <div className={styles.headerParagraphRemove} onClick={() => dispatch(toggleModal("delete_paragraphs"))}>
          <TrashIcon />
        </div>
      </div>
      <Modal title={"Удалить параграф?"} active={delete_paragraphs} id={"delete_paragraphs"}>
        <div className={styles.headerModalButtonsRoot}>
          <Button
            bgWhite
            onClick={() => dispatch(toggleModal("delete_paragraphs"))}
          >
            Закрыть
          </Button>
          <Button>Удалить</Button>
        </div>
      </Modal>
    </SectionContainer>
  );
};

export default ParagraphDetailsHeader;
