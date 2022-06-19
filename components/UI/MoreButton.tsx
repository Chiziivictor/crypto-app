import RightArrow from "../../assets/svg/rightArrow";

const styles = {
  button: `text-[#6188FF] text-sm md:text-base flex items-center cursor-pointer whitespace-nowrap justify-between`,
};

const MoreButton: React.FC = () => {
  return (
    <div className={styles.button}>
      More&nbsp;
      <RightArrow />
    </div>
  );
};

export default MoreButton;
