import ChevronUp from "../../assets/svg/chevronUp";
import ChevronDown from "../../assets/svg/chevronDown";

interface RateProps {
  isIncrement: boolean;
  rate: string | number;
}

const styles = {
  rate: `text-sm  flex items-center`,
  red: `ml-2 text-[#EA3943]`,
  green: `ml-2 text-[#00A854]`,
};

const Rate: React.FC<RateProps> = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill="#00A854" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  );
};

export default Rate;
