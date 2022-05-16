import { SectionContainer } from '../../../parts/SectionContainer/SectionContainer';
import { PlusIcon } from '../../../../../../img/icons/PlusIcon';
import Paragraph from '../Paragraph/Paragraph';
import styles from "./Paragraphs.module.scss";

const Paragraphs = () => {
    return (
        <div className={styles.paragraphs}>
            <SectionContainer className={styles.paragraphsRootTitle}>
                <p className={styles.paragraphsTitle}>Оглавление</p>
                <div className={styles.paragraphsAddIcon}>
                    <PlusIcon />
                </div>
            </SectionContainer>
            <Paragraph number={1} name={'Огромныыыыый текст пиздец'} error />
            <Paragraph number={2} name={'Параграф'} error />
            <Paragraph number={3} name={'Параграф'} error />
        </div>
    )
}

export default Paragraphs
