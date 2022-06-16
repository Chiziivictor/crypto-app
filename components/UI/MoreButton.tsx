import RightArrow from "../../assets/svg/rightArrow";

const styles = {
  button: `text-[#6188FF] flex items-center cursor-pointer whitespace-nowrap justify-between`,
};

const MoreButton: React.FC = () => {
  return (
    <div className={styles.button}>
      More <RightArrow />
    </div>
  );
};

export default MoreButton;
