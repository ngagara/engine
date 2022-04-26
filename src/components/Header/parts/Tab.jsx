import { Link } from "react-router-dom";
import styles from "./Tab.module.scss";

const Tab = ({ key, name, link }) => {
  return (
    <div className={styles.tab}>
      <Link to={link} key={key}>
        {name}
      </Link>
    </div>
  );
};

export default Tab;
